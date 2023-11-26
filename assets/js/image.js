// List of image paths in the about directory
const imagePaths = [
    'pic01.jpg',
    'pic02.jpg',
    'pic03.jpg',
    'pic04.jpg',
    'pic05.jpg',
    'pic06.jpg',
];

let currentImageIndex = 0;
const aboutImage = document.getElementById('about-image');

// Function to change the image source
function changeImage() {
    if (currentImageIndex === imagePaths.length) {
        currentImageIndex = 0; // Reset the index to loop through images
    }
    aboutImage.src = `assets/img/about/${imagePaths[currentImageIndex]}`;
    currentImageIndex++;
}

// Change image every 4 seconds
setInterval(changeImage, 4000);