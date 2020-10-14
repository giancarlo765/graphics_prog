const SCENE = new THREE.Scene();
const CLOCK = new THREE.Clock();
const FOV = 90;
const NEAR = 0.1;
const FAR = 1000;
const MAXPARTICLES = 4000;
const RENDERER = new THREE.WebGLRenderer();
let deltaTime;

RENDERER.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(RENDERER.domElement);

// camera
let camera = new THREE.PerspectiveCamera(
  FOV,
  window.innerWidth / window.innerHeight,
  NEAR,
  FAR
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 225;

camera.lookAt(new THREE.Vector3(0, 0, 0));


// particles
let particles = new THREE.Geometry();
for (let i = 0; i < MAXPARTICLES; i++) {
  let particle = new THREE.Vector3(
    random(-300, 300),
    random(-10, 10),
    random(-200, 200)
  );
  particles.vertices.push(particle);
}
let particleMaterial = new THREE.PointsMaterial({
  color: 0xa49b72,
  size: 1,
});
let particleSystem = new THREE.Points(particles, particleMaterial);
particleSystem.sortParticles = true;
SCENE.add(particleSystem);

// random helper RNG
function random(min, max) {
    if (isNaN(max)) {``
      max = min;
      min = 0;
    }
    return Math.random() * (max - min) + min;
  }
// Sphere
  let satTex = new THREE.TextureLoader().load(
    'images/saturnTexture.png');
  let satGeo = new THREE.SphereGeometry(100, 50, 50);
  let satMat = new THREE.MeshBasicMaterial({map: satTex});
  let sat = new THREE.Mesh(satGeo, satMat);
  SCENE.add(sat);


// render loop
function render() {
    requestAnimationFrame(render);
  
    deltaTime = CLOCK.getDelta();
    
    particleSystem.rotation.y = Date.now() * 0.0002;
    RENDERER.render(SCENE, camera);
  }
  render();
  

// resize
function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  RENDERER.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", resize, false);