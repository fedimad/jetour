const panorama = new PANOLENS.ImagePanorama('./images/x70P.jpg');
let imageContainer = document.querySelector('.image-container');

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: false,
    controlBar: false,
});

// Set the initial yaw and pitch angles
const initialYaw = -255.5; // Horizontal angle in radians (0 is front, Math.PI is back)
const initialPitch = 0; // Vertical angle in radians

// Add the panorama and set the initial camera position
viewer.add(panorama);

panorama.addEventListener('load', function() {
    // Set the initial camera position
    viewer.camera.position.set(Math.sin(initialYaw), initialPitch, Math.cos(initialYaw));
});

