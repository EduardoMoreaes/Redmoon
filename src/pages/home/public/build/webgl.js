let cubeRotation = 0.0;
let deltaTime = 0;
import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";

var run = false;
main()


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
        now *= 0.01;
        deltaTime = now - then;
        then = now;
        
        drawScene(gl, programInfo, buffers, texture, cubeRotation);
        cubeRotation += deltaTime;
        
        if (i <= 100) {
            i++;
            requestAnimationFrame(render);
            
            if(i == 100){
                templateSelector();
            }
        }
        cubeRotation = 2;
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

function templateSelector() {
    cubeRotation = Math.floor(cubeRotation%10);
    var colorFace = "";

    switch (cubeRotation) {
        case 0:
            colorFace = ("white");
        
        break;

        case 1:
            colorFace = ("white");

        break;

        case 2:
            colorFace = ("pink");
    
        break;

        case 3:
            colorFace = ("pink");

        break;
        
        case 4:
            colorFace = ("blue");
        
        break;
        
        case 5:
            colorFace = ("blue");
        
        break;
        
        case 6:
            colorFace = ("yellow");
        
        break;

        case 7:
            colorFace = ("yellow");
        
        break;

        case 8:
            colorFace = ("yellow");
        
        break;

        case 9:
            colorFace = ("red");
        
        break;
        default:
        break;
    }
    
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