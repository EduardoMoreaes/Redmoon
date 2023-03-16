import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import WebGL from './webgl.js';
import templateSelector from './templateSelector.js';

if(!WebGL.isWebGLAvailable()){ 
    const warning = WebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
} 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureFront = new THREE.TextureLoader().load("../Images/given/black.jpg");
const textureBack = new THREE.TextureLoader().load("../Images/given/white.jpg");
const textureTop = new THREE.TextureLoader().load("../Images/given/red.jpg");
const textureBottom = new THREE.TextureLoader().load("../Images/given/purple.jpg");
const textureLeft = new THREE.TextureLoader().load("../Images/given/green.jpg");
const textureRight = new THREE.TextureLoader().load("../Images/given/blue.jpg");

const materialFront = new THREE.MeshBasicMaterial({map: textureFront});
const materialBack = new THREE.MeshBasicMaterial({map: textureBack});
const materialTop = new THREE.MeshBasicMaterial({map: textureTop});
const materialBottom = new THREE.MeshBasicMaterial({map: textureBottom});
const materialLeft = new THREE.MeshBasicMaterial({map: textureLeft});
const materialRight = new THREE.MeshBasicMaterial({map: textureRight});

var gx = 1.5, gy = 1.5, gz = 1.5;

const geometry = new THREE.BoxGeometry(gx, gy, gz);

const materials = [materialRight, materialLeft, materialTop, materialBottom, materialFront, materialBack];

const cube = new THREE.Mesh(geometry, materials);

var px = 0, py = 0, pz =0;

scene.add(cube);

camera.position.z = 5;

cube.rotation.x = 1;
cube.rotation.y = 0.8;


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseEnter(event) {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

   
}



function render(cube) {

    window.addEventListener("mouseenter", onMouseEnter, false)

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects([cube]);

  const cameraDirection = new THREE.Vector3();
    camera.getWorldDirection(cameraDirection);
    
    let closestIntersection = null;
    let closestDistance = Infinity;
    
    intersects.forEach(intersect => {
      const faceNormal = intersect.face.normal.clone().applyQuaternion(intersect.object.quaternion);
    
      const distance = cameraDirection.dot(faceNormal);
    
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIntersection = intersect;
      }
    });
    
    if (closestIntersection) {
        const closestFaceIndex = closestIntersection.faceIndex;
        templateSelector(closestFaceIndex);
        minimize()
        return 0;
    }
    requestAnimationFrame(render);
}



renderer.render(scene, camera);

var numRotate = Math.floor(Math.random() * 100 ) + 1;
var velocity;

function animate(){

    cube.rotation.x +=  velocity;
    cube.rotation.y +=  velocity + 0.2;

    if (cube.rotation.x >= numRotate || cube.rotation.y >= numRotate) {        
        render(cube)
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

document.addEventListener('mousedown', onMouseDown, false);

function onMouseDown(event) {
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects([cube]);

  if (intersects.length > 0) {
    givenUp();
  }
}

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
    if( window.innerHeight <= 300){
        clickes = 0;
        animateInitial()
        return 0;

    } else{

        window.innerWidth -= 4;
        window.innerHeight -= 2;

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.render(scene, camera);

        requestAnimationFrame(minimize);
    }
}