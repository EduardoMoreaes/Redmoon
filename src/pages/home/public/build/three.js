import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import WebGL from './webgl.js';

if(!WebGL.isWebGLAvailable()){ 
    const warning = WebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
} 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureFront = new THREE.TextureLoader().load("../Images/black.jpg");
const textureBack = new THREE.TextureLoader().load("../Images/white.jpg");
const textureTop = new THREE.TextureLoader().load("../Images/red.jpg");
const textureBottom = new THREE.TextureLoader().load("../Images/purple.jpg");
const textureLeft = new THREE.TextureLoader().load("../Images/green.jpg");
const textureRight = new THREE.TextureLoader().load("../Images/blue.jpg");

const materialFront = new THREE.MeshBasicMaterial({map: textureFront});
const materialBack = new THREE.MeshBasicMaterial({map: textureBack});
const materialTop = new THREE.MeshBasicMaterial({map: textureTop});
const materialBottom = new THREE.MeshBasicMaterial({map: textureBottom});
const materialLeft = new THREE.MeshBasicMaterial({map: textureLeft});
const materialRight = new THREE.MeshBasicMaterial({map: textureRight});


const geometry = new THREE.BoxGeometry(2, 2, 2);

const materials = [materialRight, materialLeft, materialTop, materialBottom, materialFront, materialBack];

const cube = new THREE.Mesh(geometry, materials);

scene.add(cube);

camera.position.z = 5;

cube.rotation.x = 1;
cube.rotation.y = 0.8;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
  // transforma as coordenadas do mouse em coordenadas no intervalo [-1, 1]
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function render() {
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const faceIndex = intersects[0].faceIndex;

    alert(faceIndex);
  }

  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

window.addEventListener('mouseenter', onMouseMove, false);

renderer.render(scene, camera);

var numRotate = Math.floor(Math.random() * 100 ) + 1;
var velocity;

function animate(){

    cube.rotation.x +=  velocity;
    cube.rotation.y +=  velocity + 0.2;

    if (cube.rotation.x >= numRotate || cube.rotation.y >= numRotate) {        
        minimize();
        return 0;
    }
    else{
        requestAnimationFrame(animate);
    }
   renderer.render(scene, camera);
}

animateInitial();
var run = true;
function animateInitial(){ 
    if (run == false) {
        return 0;
    }else{
        requestAnimationFrame(animateInitial);
    
        cube.rotation.y += 0.01;
        cube.rotation.x += 0.02;
        
        renderer.render(scene, camera);
    }
}

window.addEventListener("mouseup", givenUp);
window.addEventListener("keydown", givenUp);

var clickes = 0;
function givenUp(e) {
    if (clickes >= 2) {
        alert("Muitos clickes seguidos!!");
        return 0;
    }else{
        clickes++;
    }

    cube.rotation.x = 0.0;
    cube.rotation.y = 0.0;

    run = false;
    numRotate = Math.floor(Math.random() * 100 ) + 1;
    velocity = Math.random();

    animate();
}

function minimize(){
    if( window.innerWidth <= 750){
        clickes = 0;
        render();

        return 0;
    } else{
        requestAnimationFrame(minimize);

        window.innerWidth -= 2;
        window.innerHeight -= 1;

        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}