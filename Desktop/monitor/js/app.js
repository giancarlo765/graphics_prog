let x = 0
let xDirection = 1
let yDirection = 1
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(35, window.innerWidth/ window.innerHeight, 0.1, 1000); 
camera.rotation.x= 0.005;
camera.position.z= 40; 
camera.position.x = -10;
camera.rotation.y= -0.5;

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);  




///desk///
let deskgeometry = new THREE.BoxBufferGeometry(22,1,16);
let deskmaterial = new THREE.MeshStandardMaterial( {color: 0x828282} );
let deskcube = new THREE.Mesh(deskgeometry, deskmaterial);
scene.add(deskcube);
deskcube.position.y = -4
deskcube.position.x = 3
deskcube.position.z = -1

// front leg 1 
let leg1geometry = new THREE.CylinderGeometry( 0.5, 0.5, 11 );
let leg1material = new THREE.MeshStandardMaterial( {color: 0x666666} );
let leg1cylinder = new THREE.Mesh( leg1geometry, leg1material );
scene.add( leg1cylinder );

leg1cylinder.position.y = -10
leg1cylinder.position.x = -6
leg1cylinder.position.z = 4

//front leg 2
let leg2geometry = new THREE.CylinderGeometry( 0.5, 0.5, 11);
let leg2material = new THREE.MeshStandardMaterial( {color: 0x666666} );
let leg2cylinder = new THREE.Mesh( leg2geometry, leg2material );
scene.add( leg2cylinder );

leg2cylinder.position.y = -10
leg2cylinder.position.x = 12
leg2cylinder.position.z = 4

//back leg 1
let back1geometry = new THREE.CylinderGeometry( 0.5, 0.5, 11 );
let back1material = new THREE.MeshStandardMaterial( {color: 0x666666} );
let back1cylinder = new THREE.Mesh( back1geometry,back1material );
scene.add( back1cylinder );

back1cylinder.position.y = -10
back1cylinder.position.x = -6
back1cylinder.position.z = -7

//back leg 2
let back2geometry = new THREE.CylinderGeometry( 0.5, 0.5, 11 );
let back2material = new THREE.MeshStandardMaterial( {color: 0x666666} );
let back2cylinder = new THREE.Mesh( back2geometry, back2material );
scene.add( back2cylinder );

back2cylinder.position.y = -10
back2cylinder.position.x = 9
back2cylinder.position.z = -4

//lamp
let lamp1geometry = new THREE.CylinderGeometry( 0.1, 0.5, 2);
let lamp1material = new THREE.MeshStandardMaterial( {color: 0x997070
} );
let lamp1cylinder = new THREE.Mesh( lamp1geometry, lamp1material );
scene.add( lamp1cylinder );

lamp1cylinder.position.y = 5.5
lamp1cylinder.position.x = 9

let lamp2geometry = new THREE.CylinderGeometry( 0.1, 0.1, 7);
let lamp2material = new THREE.MeshStandardMaterial( {color: 0x997070} );
let lamp2cylinder = new THREE.Mesh( lamp2geometry, lamp2material );
scene.add( lamp2cylinder );

lamp2cylinder.position.y = 3.5
lamp2cylinder.position.x = 9

let lamp3geometry = new THREE.CylinderGeometry( 0.5, 0.5, 1);
let lamp3material = new THREE.MeshStandardMaterial( {color: 0x997070} );
let lamp3cylinder = new THREE.Mesh( lamp3geometry, lamp3material );
scene.add( lamp3cylinder );

lamp3cylinder.position.y = 5
lamp3cylinder.position.x = 9


let lamp4geometry = new THREE.ConeGeometry( 1, 3, 32);
let lamp4material = new THREE.MeshStandardMaterial( {color: 0x997070} );
let lamp4cone = new THREE.Mesh( lamp4geometry, lamp4material );
scene.add( lamp4cone );

lamp4cone.position.y = 5
lamp4cone.position.x = 9
lamp4cone.rotation.z = 5


let lamp5geometry = new THREE.SphereGeometry( 0.8, 32, 32, );
let lamp5material = new THREE.MeshMatcapMaterial( {color: 0xffff91} );
let lamp5sphere = new THREE.Mesh( lamp5geometry, lamp5material );
scene.add( lamp5sphere );

lamp5sphere.position.y = 4.5
lamp5sphere.position.x = 7.5
lamp5sphere.rotation.z = -5



let lamp6geometry = new THREE.BoxBufferGeometry(1.5,1.5,1.5);
let lamp6material = new THREE.MeshStandardMaterial( {color: 0x808080} );
let lamp6cube = new THREE.Mesh(lamp6geometry, lamp6material);
scene.add(lamp6cube);
lamp6cube.position.y = -2
lamp6cube.position.x = 5.5
lamp6cube.position.z = 7

let lamp7geometry = new THREE.ConeGeometry( 1, 3, 9);
let lamp7material = new THREE.MeshStandardMaterial( {color: 0x997070} );
let lamp7cone = new THREE.Mesh( lamp7geometry, lamp7material );
scene.add( lamp7cone );

lamp7cone.position.y = 0
lamp7cone.position.x = 9

// monitor
let monitor1BaseGeometry = new THREE.CylinderGeometry(1, 3, 1.2, 30);
let monitor1BaseMaterial = new THREE.MeshStandardMaterial({color: 0xa39193});
let monitor1Base = new THREE.Mesh( monitor1BaseGeometry, monitor1BaseMaterial);
monitor1Base.position.x = -1;
monitor1Base.position.y = -2.5;
scene.add(monitor1Base);

let monitor1StandGeometry = new THREE.CylinderGeometry(0.21, 0.21, 2.5, 30);
let monitor1StandMaterial = new THREE.MeshStandardMaterial({color: 0xa39193});
let monitor1Stand = new THREE.Mesh( monitor1StandGeometry, monitor1StandMaterial);
monitor1Stand.position.x = -1;
monitor1Stand.position.y = -2;
scene.add(monitor1Stand);

let monitor1Geometry = new THREE.BoxGeometry(3, 4.7, 8.700);
let monitor1Material = new THREE.MeshStandardMaterial({color: 0x66545e});
let monitor1 = new THREE.Mesh( monitor1Geometry, monitor1Material);
monitor1.position.x = -1;
monitor1.position.y = 1.6;
monitor1.rotation.y = 1.50;
scene.add(monitor1);

// blue book
let book1geometry = new THREE.BoxBufferGeometry(4,1,4);
let book1material = new THREE.MeshStandardMaterial( {color: 0x4056ff} );
let book1cube = new THREE.Mesh(book1geometry, book1material);
scene.add(book1cube);
book1cube.position.y = -3
book1cube.position.x = 3
book1cube.position.z = 6
//white pages
let book2geometry = new THREE.BoxBufferGeometry(4,.5,4);
let book2material = new THREE.MeshStandardMaterial( {color: 0xffffff} );
let book2cube = new THREE.Mesh(book2geometry, book2material);
scene.add(book2cube);
book2cube.position.y = -3
book2cube.position.x = 3
book2cube.position.z = 6
// green book
let book3geometry = new THREE.BoxBufferGeometry(4,.5,4);
let book3material = new THREE.MeshStandardMaterial( {color: 0x0aff99} );
let book3cube = new THREE.Mesh(book3geometry, book3material);
scene.add(book3cube);
book3cube.position.y = -3
book3cube.position.x = -2
book3cube.position.z = 7
//white pages
let book4geometry = new THREE.BoxBufferGeometry(3.8,.5,.2);
let book4material = new THREE.MeshStandardMaterial( {color: 0xffffff} );
let book4cube = new THREE.Mesh(book4geometry, book4material);
scene.add(book4cube);
book4cube.position.y = -3
book4cube.position.x = -2
book4cube.position.z = 9
// purple book
let book5geometry = new THREE.BoxBufferGeometry(3,.5,2);
let book5material = new THREE.MeshStandardMaterial( {color: 0xed19fc} );
let book5cube = new THREE.Mesh(book5geometry, book5material);
scene.add(book5cube);
book5cube.position.y = -2.2
book5cube.position.x = 2
book5cube.position.z = 8
//lights
let ambience = new THREE.AmbientLight(0x222022, 2);
ambience.position.set(-0.300, 10.041, 0);
scene.add(ambience);
let spotLight2 = new THREE.PointLight ( 0xf0ff00, 1, 100  );
spotLight2.position.set(5,5,-5);
scene.add(spotLight2);

renderer.render(scene, camera); 
camera.position.z=20;