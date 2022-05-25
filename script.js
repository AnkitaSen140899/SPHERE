
// Debug


// Canvas
const canvas = document.querySelector('canvas.webgl')

const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load('./earthmap.jpg');
const normalTextureSUN = textureLoader.load('./SUN.jpg');
const normalTexturestar = textureLoader.load('./Star.jpg');
const normaltextureMOON = textureLoader.load('./MOON.jpg');
const normaltextureMercury = textureLoader.load('./mercury.jpg');
const normaltextureSaturnRing = textureLoader.load('./SRINGS.png');
const normaltextureVenus = textureLoader.load('./venus_surface.jpg');
const normaltextureSaturn = textureLoader.load('./saturn.jpg');
const normaltextureMars = textureLoader.load('./mars.jpg');
const normaltextureJupiter = textureLoader.load('./jupiter.jpg');
const normaltextureUranus = textureLoader.load('./uranus.jpg');
const normaltextureNeptune = textureLoader.load('./neptune.jpg');


const Mercurygeometry = new THREE.SphereBufferGeometry(0.17,64,64);
const Venusgeometry = new THREE.SphereBufferGeometry(0.2,64,64);
         
const MOONgeometry = new THREE.SphereBufferGeometry(0.1, 64, 64);
const Marsgeometry = new THREE.SphereBufferGeometry(0.16, 64, 64);
const Jupitergeometry = new THREE.SphereBufferGeometry(0.5, 64, 64);
const Saturngeometry = new THREE.SphereBufferGeometry(0.4, 64, 64);
const SaturnRinggeometry = new THREE.RingBufferGeometry(0.5,0.65,60);
const Uranusgeometry = new THREE.SphereBufferGeometry(0.35, 64, 64);
const Neptunegeometry = new THREE.SphereBufferGeometry(0.3, 64, 64);
// This scene will be a 3D world where 3D objects will be added inside it.
var scene = new THREE.Scene();
// The value that has been copied  are parameters to the camera that will be present in the three.js scene
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1,10000);
// If we change camera position coordinates, camera will move, set camera's position to z
camera.position.z = 10;

// This is renderer it is required to render scene 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lets create a box
// We will need to create a geometry of the box first, follow these steps
const geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
var SUNgeometry = new THREE.SphereBufferGeometry(0.8, 64, 64);
var EARTHgeometry = new THREE.SphereBufferGeometry(0.25, 64, 64);

//  EARTHmaterial.roughness = 0.4;
//  EARTHmaterial.opacity = 0.9;
//  EARTHmaterial.map = normalTexture;



             
var Mercurymaterial = new THREE.MeshBasicMaterial({roughness: 0.4,opacity: 1, map: normaltextureMercury});
        //  Mercurymaterial.roughness = 0.4;
        //  Mercurymaterial.opacity = 0.9;
        //  Mercurymaterial.map = normaltextureMercury;
var sphereMercury = new THREE.Mesh(Mercurygeometry,Mercurymaterial);

var Venusmaterial = new THREE.MeshBasicMaterial({roughness: 0.4,opacity: 1, map: normaltextureVenus});
        //  Venusmaterial.roughness = 0.4;
        //  Venusmaterial.opacity = 0.9;
        //  Venusmaterial.map = normaltextureVenus;
var sphereVenus = new THREE.Mesh(Venusgeometry,Venusmaterial);
             
var Marsmaterial = new THREE.MeshBasicMaterial({roughness: 0.4,opacity: 1, map: normaltextureMars});
        //  Marsmaterial.roughness = 0.4;
        //  Marsmaterial.opacity = 0.9;
        //  Marsmaterial.map = normaltextureMars;
var sphereMars = new THREE.Mesh(Marsgeometry,Marsmaterial);
             
var Jupitermaterial = new THREE.MeshBasicMaterial({roughness: 0.4,opacity: 1, map: normaltextureJupiter});
        //  Jupitermaterial.roughness = 0.4;
        //  Jupitermaterial.opacity = 0.9;
        //  Jupitermaterial.map = normaltextureJupiter;
var sphereJupiter = new THREE.Mesh(Jupitergeometry,Jupitermaterial);
             
var Uranusmaterial = new THREE.MeshBasicMaterial({roughness: 0.4,opacity: 1, map: normaltextureUranus});
        //  Uranusmaterial.roughness = 0.4;
        //  Uranusmaterial.opacity = 0.9;
        //  Uranusmaterial.map = normaltextureUranus;
var sphereUranus = new THREE.Mesh(Uranusgeometry,Uranusmaterial);
             
var Neptunematerial = new THREE.MeshBasicMaterial({roughness: 0.4,opacity: 1, map: normaltextureNeptune});
        //  Neptunematerial.roughness = 0.4;
        //  Neptunematerial.opacity = 0.9;
        //  Neptunematerial.map = normaltextureNeptune;
var sphereNeptune = new THREE.Mesh(Neptunegeometry,Neptunematerial);
             
var MOONmaterial= new THREE.MeshBasicMaterial({roughness: 0.4,opacity: 1, map: normaltextureMOON});
        //  MOONmaterial.opacity = 0.9;
        //  MOONmaterial.roughness = 0.4;
        //  MOONmaterial.map = normaltextureMOON;;
var sphereMOON = new THREE.Mesh(MOONgeometry,MOONmaterial);
             
var SaturnMaterial = new THREE.MeshBasicMaterial({roughness: 0.4,opacity: 1, map: normaltextureSaturn});
/  SaturnMaterial.opacity = 0.9;
/  SaturnMaterial.roughness = 0.4;
/  SaturnMaterial.map = normaltextureSaturn;
var sphereSaturn = new THREE.Mesh(Saturngeometry,SaturnMaterial);
    
var SaturnRingMAterial = new THREE.MeshBasicMaterial({map: normaltextureSaturnRing});
/  SaturnRingMAterial.map = normaltextureSaturnRing;
var sphereSaturnRing = new THREE.Mesh(SaturnRinggeometry,SaturnRingMAterial);
    
    
/  // Material is a layer that will be added on the geometry
var EARTHmaterial = new THREE.MeshBasicMaterial({transparent: true,opacity: 1,metalness: 0,roughness: 0.3, map: normalTexture});
var SUNmaterial = new THREE.MeshBasicMaterial({transparent: true,opacity: 1,metalness: 0,roughness: 0.3, map: normalTextureSUN});
var material = new THREE.MeshBasicMaterial({map: normalTexturestar, side: THREE.BackSide});
/  // Creating a mesh object from the box geometry and a material
var sphere = new THREE.Mesh(SUNgeometry, SUNmaterial);
var cube = new THREE.Mesh(geometry, material);
var sphereEARTH = new THREE.Mesh(EARTHgeometry,EARTHmaterial);
/ // Adding that cube in scene
scene.add(sphere);
scene.add(sphereEARTH);
scene.add(cube);

sphereEARTH.add(sphereMOON);
scene.add(sphereSaturn);
sphereSaturn.add(sphereSaturnRing);
scene.add(sphereMercury);
scene.add(sphereVenus);
scene.add(sphereMars);
scene.add(sphereJupiter);
scene.add(sphereUranus);
scene.add(sphereN
document.addEventListener('mousemove', onDocumentMo
let mouseX = 0
let mouseY = 0
    
let targetX = 0
let targetY = 0
    
const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;
    
function onDocumentMouseMove(event) {

    mouseX = (event.clientX - windowHalfX)
    mouseY = (event.clientY - windowHalfY)
}
const updateSphere = (event) => {
    sphereMercury.position.y = window.scrollY * .001
    sphereVenus.position.y = window.scrollY * .001
    sphereEARTH.position.y = window.scrollY * .001
    sphereMars.position.y = window.scrollY * .001
    sphereJupiter.position.y = window.scrollY * .001
    sphereSaturn.position.y = window.scrollY * .001
    sphereUranus.position.y = window.scrollY * .001
    sphereNeptune.position.y = window.scrollY * .001

window.addEventListener('scroll', updateSphere);
const clock = new THREE
// Add a function to render
function render() {
    requestAnimationFrame(render);
    targetX = mouseX * .001
    targetY = mouseY * .0
    const elapsedTime = clock.getElapsedTime()
    sphere.rotation.z = 0.5 * elapsedTi
    sphere.rotation.y += .5 * (targetX - sphere.rotation.y)
    sphere.rotation.x += .05 * (targetY - sphere.rotation.x)
    sphere.position.z += -.05 * (targetY - sphere.rotation.
    
    const r1 = Date.now() * 0.0009;
    sphereMercury.rotation.z = 1.2 * elapsedTime
    sphereMercury.rotation.y += .05 * (targetX - sphereEARTH.rotation.y)
    sphereMercury.rotation.x += .05 * (targetY - sphereEARTH.rotation.x)
    sphereMercury.position.z += -.05 * (targetY - sphereEARTH.rotation.x)
    sphereMercury.position.x = 3.5 * Math.cos(r1)
    sphereMercury.position.y = 1.5 * Math.sin(r
    const r2 = Date.now() * 0.0007;
    sphereVenus.rotation.z = 1.2 * elapsedTime
    sphereVenus.rotation.y += .05 * (targetX - sphereEARTH.rotation.y)
    sphereVenus.rotation.x += .05 * (targetY - sphereEARTH.rotation.x)
    sphereVenus.position.z += -.05 * (targetY - sphereEARTH.rotation.x)
    sphereVenus.position.x = 4.5 * Math.cos(r2)
    sphereVenus.position.y = 2 * Math.sin(r
    //sphereEARTH.position.y = -1
    sphereEARTH.rotation.z = 1.2 * elapsedTime
    sphereEARTH.rotation.y += .05 * (targetX - sphereEARTH.rotation.y)
    sphereEARTH.rotation.x += .05 * (targetY - sphereEARTH.rotation.x)
    sphereEARTH.position.z += -.05 * (targetY - sphereEARTH.rotation.
    const r3 = Date.now() * 0.000
    sphereEARTH.position.x = 6 * Math.cos(r3)
    sphereEARTH.position.y = 2.5 * Math.sin(r3)
    // sphereEARTH.position.z = 0.1 * Math.sin(r)
    sphereMOON.position.x = -0
    const r4 = Date.now() * 0.0005;
    sphereMars.rotation.z = 1.2 * elapsedTime
    sphereMars.rotation.y += .05 * (targetX - sphereEARTH.rotation.y)
    sphereMars.rotation.x += .05 * (targetY - sphereEARTH.rotation.x)
    sphereMars.position.z += -.05 * (targetY - sphereEARTH.rotation.x)
    sphereMars.position.x = 7 * Math.cos(r4)
    sphereMars.position.y = 3.6 * Math.sin(r
    const r5 = Date.now() * 0.0004;
    sphereJupiter.rotation.z = 1.2 * elapsedTime
    sphereJupiter.rotation.y += .05 * (targetX - sphereEARTH.rotation.y)
    sphereJupiter.rotation.x += .05 * (targetY - sphereEARTH.rotation.x)
    sphereJupiter.position.z += -.05 * (targetY - sphereEARTH.rotation.x)
    sphereJupiter.position.x = 8 * Math.cos(r5)
    sphereJupiter.position.y = 4.3 * Math.sin(r
    const r6 = Date.now() * 0.0003;
    sphereSaturn.rotation.z = 1.2 * elapsedTime
    sphereSaturn.rotation.y += .05 * (targetX - sphereEARTH.rotation.y)
    sphereSaturn.rotation.x += .05 * (targetY - sphereEARTH.rotation.x)
    sphereSaturn.position.z += -.05 * (targetY - sphereEARTH.rotation.x)
    sphereSaturn.position.x = 9 * Math.cos(r6)
    sphereSaturn.position.y = 5.5 * Math.sin(r
    const r7 = Date.now() * 0.00025;
    sphereUranus.rotation.z = 1.2 * elapsedTime
    sphereUranus.rotation.y += .05 * (targetX - sphereEARTH.rotation.y)
    sphereUranus.rotation.x += .05 * (targetY - sphereEARTH.rotation.x)
    sphereUranus.position.z += -.05 * (targetY - sphereEARTH.rotation.x)
    sphereUranus.position.x = 10 * Math.cos(r7)
    sphereUranus.position.y = 6 * Math.sin(r
    const r8 = Date.now() * 0.0002;
    sphereNeptune.rotation.z = 1.2 * elapsedTime
    sphereNeptune.rotation.y += .05 * (targetX - sphereEARTH.rotation.y)
    sphereNeptune.rotation.x += .05 * (targetY - sphereEARTH.rotation.x)
    sphereNeptune.position.z += -.05 * (targetY - sphereEARTH.rotation.x)
    sphereNeptune.position.x = 10.8 * Math.cos(r8)
    sphereNeptune.position.y = 6.7 * Math.sin(r8)
      
    cube.rotation.z = 0.01 * elapsedTime
    cube.rotation.y += .5 * (targetX - sphere.rotation.y)
    cube.rotation.x += .05 * (targetY - sphere.rotation.x)
    cube.position.z += -.05 * (targetY - sphere.rotation.x)
    
    cube.rotation.x += 0.002;
    cube.rotation.y += 0.002;
    renderer.render(scene, camera);
   }
   // We will need to call this function from somewhere
   r
