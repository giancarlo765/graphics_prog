let x = 2
let xDirection = 1
let yDirection = 1
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(100, window.innerWidth/ window.innerHeight, 0.1, 1000); 
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);  
scene = new THREE.Scene();
scene.background = new THREE.Color( "#9ffff8" );

//// surface ////
const surfacegeometry = new THREE.BoxBufferGeometry(100,1,60);
const surfacematerial = new THREE.MeshStandardMaterial( {color: "#05a908"} );
const surfacecube = new THREE.Mesh(surfacegeometry, surfacematerial);
scene.add(surfacecube);
surfacecube.position.y = -4
surfacecube.position.x = 1.5
surfacecube.position.z = -11

//// tiles ////
const tilesgeometry = new THREE.BoxBufferGeometry(40,1,11);
const tilesmaterial = new THREE.MeshStandardMaterial( {color: "#4b5f81"} );
const tilescube = new THREE.Mesh(tilesgeometry, tilesmaterial);
scene.add(tilescube);
tilescube.position.y = -3.9
tilescube.position.x = 1.5
tilescube.position.z = -11

///house base///
const basegeometry = new THREE.BoxBufferGeometry(17,9,9);
const basematerial = new THREE.MeshStandardMaterial( {color: "#AAB7B8"} );
const basecube = new THREE.Mesh(basegeometry, basematerial);
scene.add(basecube);
basecube.position.y = 1
basecube.position.x = .5
basecube.position.z = -14

///door///
const doorgeometry = new THREE.BoxBufferGeometry(2,5,1.5);
const doormaterial = new THREE.MeshStandardMaterial( {color: "#9a3b07"} );
const doorcube = new THREE.Mesh(doorgeometry, doormaterial);
scene.add(doorcube);
doorcube.position.y = -1.7
doorcube.position.x = 5
doorcube.position.z = -9.4

////door edge///
const dooredgegeometry = new THREE.BoxBufferGeometry(4,5,1);
const dooredgematerial = new THREE.MeshStandardMaterial( {color: "#3a3738"} );
const dooredgecube = new THREE.Mesh(dooredgegeometry, dooredgematerial);
scene.add(dooredgecube);
dooredgecube.position.y = -.9
dooredgecube.position.x = 5
dooredgecube.position.z = -9.4

/// window edge ///
const edgegeometry = new THREE.BoxBufferGeometry(7,3.5,8);
const edgematerial = new THREE.MeshStandardMaterial( {color: "#17202A"} );
const edgecube = new THREE.Mesh(edgegeometry, edgematerial);
scene.add(edgecube);
edgecube.position.y = -.3
edgecube.position.x = -3
edgecube.position.z = -13

/// glass ///
const glassgeometry = new THREE.BoxBufferGeometry(6,2.5,8);
const glassmaterial = new THREE.MeshStandardMaterial( {color: "#FDFEFE"} );
const glasscube = new THREE.Mesh(glassgeometry, glassmaterial);
scene.add(glasscube);
glasscube.position.y = -.3
glasscube.position.x = -3
glasscube.position.z = -13

/// roof1 ///
const roof1geometry = new THREE.BoxBufferGeometry(20,.5,12.3);
const roof1material = new THREE.MeshStandardMaterial( {color: "#566573"} );
const roof1cube = new THREE.Mesh(roof1geometry, roof1material);
scene.add(roof1cube);
roof1cube.position.y = 3
roof1cube.position.x = .5
roof1cube.position.z = -12

/// roof2 ///
const roof2geometry = new THREE.BoxBufferGeometry(18.5,1,10);
const roof2material = new THREE.MeshStandardMaterial( {color: "#2C3E50"} );
const roof2cube = new THREE.Mesh(roof2geometry, roof2material);
scene.add(roof2cube);
roof2cube.position.y = 4
roof2cube.position.x = 1
roof2cube.position.z = -12

/// roof3 ///
const roof3geometry = new THREE.BoxBufferGeometry(18.5,4,11);
const roof3material = new THREE.MeshStandardMaterial( {color: "#273746"} );
const roof3cube = new THREE.Mesh(roof3geometry, roof3material);
scene.add(roof3cube);
roof3cube.position.y = 7
roof3cube.position.x = .5
roof3cube.position.z = -18

/// pillar1 ////
const pillar1geometry = new THREE.CylinderGeometry(.5,.3,7.9,6.5);
const pillar1material = new THREE.MeshStandardMaterial( {color: "#273746"} );
const pillar1Cylinder = new THREE.Mesh(pillar1geometry, pillar1material);
scene.add(pillar1Cylinder);
pillar1Cylinder.position.y = -1
pillar1Cylinder.position.x = 9
pillar1Cylinder.position.z = -6.9

//// pillar 2 ////
const pillar2geometry = new THREE.CylinderGeometry(.5,.3,7,.4);
const pillar2material = new THREE.MeshStandardMaterial( {color: "#273746"} );
const pillar2Cylinder = new THREE.Mesh(pillar2geometry, pillar2material);
scene.add(pillar2Cylinder);
pillar2Cylinder.position.y = -.5
pillar2Cylinder.position.x = -9
pillar2Cylinder.position.z = -6.8

/// light ///
let light = new THREE.DirectionalLight( 0xf6f0ef, 0.7 );
light.position.set(6, 5, 4)
scene.add(light);
let Light2 = new THREE.PointLight ( 0xf6f0ef, 1  );
Light2.position.set(10,8,-3);
scene.add(Light2);

///render///
renderer.render(scene, camera); 
camera.position.z=30;
camera.rotation.x=20;