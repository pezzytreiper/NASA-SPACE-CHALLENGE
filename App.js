// App.js
import * as THREE  from 'three';

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Create Earth
const earth = new THREE.Mesh(new THREE.SphereGeometry(5, 32, 32), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
earth.position.set(50, 0, 0);
scene.add(earth);

// Create Sun
const sun = new THREE.Mesh(new THREE.SphereGeometry(10, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffd700 }));
scene.add(sun);

// Create rotating meteors 
const meteors = [];
for (let i = 0; i < 10; i++) {
    const meteor = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    meteor.position.set(Math.random() * 100 - 50, Math.random() * 20 - 10, Math.random() * 100 - 50);
    meteors.push(meteor);
    scene.add(meteor);
}

// Create stars 
const starCount = 200;
for (let i = 0; i < starCount; i++) {
    const star = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    star.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100);
    scene.add(star);
}

// Camera position
camera.position.z = 100;

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.005;
    meteors.forEach(meteor => (meteor.rotation.y += 0.01));
    renderer.render(scene, camera);
};

animate();
createEpicScene();