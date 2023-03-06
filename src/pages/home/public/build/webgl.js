let cubeRotation = 0.0;
let deltaTime = 0;
import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";

var run = false;
main()


window.addEventListener("mouseup", givenUp);
window.addEventListener("keydown", givenUp);

function givenUp(e) {
    run = true;
    main();
}

function main(){
    const canvas = document.getElementById("cnv");
	const gl = canvas.getContext("webgl");
	


	if(!gl){
        alert(
            `Desculpe! Mas seu navegador não possuí os 
            recursos suficientes, ou a sua máquina não suporta o conteúdo`
            );
    return;
	}
	
    const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying highp vec2 vTextureCoord;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vTextureCoord = aTextureCoord;
    }
  `;

  const fsSource = `
  varying highp vec2 vTextureCoord;

  uniform sampler2D uSampler;

  void main(void) {
    gl_FragColor = texture2D(uSampler, vTextureCoord);
  }
`;

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

    const programInfo = {
        program: shaderProgram,
        attribLocations: {
          vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
          textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
        },
        uniformLocations: {
          projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
          modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
          uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
        },
      };

    const buffers = initBuffers(gl);
    const texture = loadTexture(gl, "./Images/Given.png");
    
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    
    let then = 0;
    let i = 0;
    

    function render(now) {
        now *= 0.025;
        deltaTime = now - then;
        then = now;
        
        drawScene(gl, programInfo, buffers, texture, cubeRotation);
        cubeRotation += deltaTime;
        
        if (i <= 100) {
            i++;
            requestAnimationFrame(render);
            
            if(i == 100){

                templateSelector(programInfo, vsSource, fsSource);
            }
        }
    }
    if (run === true) {
        requestAnimationFrame(render);
    }
    drawScene(gl, programInfo, buffers, texture, cubeRotation);
}

function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);


    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);


    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert(
        `não foi possível inicializar o shader: ${gl.getProgramInfoLog(
            shaderProgram
        )}`
        );
        return null;
    }

    return shaderProgram;
}

function loadShader(gl, type, source) {
    const shader = gl.createShader(type);


    gl.shaderSource(shader, source);

    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(
        `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`
        );
        gl.deleteShader(shader);
        return null;
    }
    
    return shader;
}

function templateSelector(programInfo, vsSource, fsSource) {
    const canvas = document.getElementById("cnv");
    const gl = canvas.getContext("webgl");
    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

    // Obtém a matriz de modelo-visão-projeção (model-view-projection matrix)
    const u_MvpMatrix = gl.getUniformLocation(shaderProgram, "uProjectionMatrix");
    const mvpMatrix = new Float32Array(16);
    gl.getUniform(shaderProgram, u_MvpMatrix).forEach(function(value, index) {
        mvpMatrix[index] = value;
    });

    // Calcula a matriz inversa da matriz de modelo-visão-projeção
    // É necessário importar ou implementar a classe Matrix4 com o método inverse
    var inverseMvpMatrix = new Float32Array(16);
    if (!Matrix4.inverse(mvpMatrix, inverseMvpMatrix)) {
        console.log('Não foi possível calcular a matriz inversa.');
        return;
    }

    // Calcula o vetor normal da face em questão
    // É necessário importar ou implementar a classe Vector3 com o método transformDirection
    var normal = new Vector3([0.0, 0.0, 1.0]); // Exemplo: face frontal
    normal.transformDirection(inverseMvpMatrix);

    // Obtém a direção da câmera
    var viewDirection = new Vector3([0.0, 0.0, -1.0]); // Exemplo: câmera olhando para o cubo

    // Calcula o produto escalar entre o vetor normal e a direção da câmera
    var dotProduct = normal.dot(viewDirection);

    // Determina qual face está virada para o usuário
    if (dotProduct > 0.0) {
        console.log('A face está virada para o usuário.');
    } else {
        console.log('A face está de costas para o usuário.');
    }
    return alert("deu");
}


function loadTexture(gl, url) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
  
    const level = 0;
    const internalFormat = gl.RGBA;
    const width = 1;
    const height = 1;
    const border = 0;
    const srcFormat = gl.RGBA;
    const srcType = gl.UNSIGNED_BYTE;
    const pixel = new Uint8Array([0, 0, 255, 255]);
    gl.texImage2D(
      gl.TEXTURE_2D,
      level,
      internalFormat,
      width,
      height,
      border,
      srcFormat,
      srcType,
      pixel
    );
  
    const image = new Image();
    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        level,
        internalFormat,
        srcFormat,
        srcType,
        image
      );
  
      if (isPowerOf2(image.width) && isPowerOf2(image.height)) {

        gl.generateMipmap(gl.TEXTURE_2D);
      } else {

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      }
    };
    image.src = url;
  
    return texture;
  }
  
  function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
  }