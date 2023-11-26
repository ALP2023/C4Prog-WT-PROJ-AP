// List of image paths in the about & projects directories
const imagePaths = [
    'pic01.jpg',
    'pic02.jpg',
    'pic03.jpg',
    'pic04.jpg',
    'pic05.jpg',
    'pic06.jpg',
    'pic07.jpg',
    'pic08.jpg',
    'pic09.jpg',
    'pic10.jpg',
    'pic11.jpg',
    'pic12.jpg',
];

const imagePaths2 = [
    'csharp01.jpg',
    'csharp02.jpg',
    'csharp03.jpg',
];

const imagePaths3 = [
    'sql01.jpg',
    'sql02.jpg',
    'sql03.jpg',
];

let currentAboutImageIndex = 0;
const aboutImage = document.getElementById('about-image');

let currentCsharpImageIndex = 0;
const csharpImage = document.getElementById('csharp-image');

let currentSqlImageIndex = 0;
const sqlImage = document.getElementById('sql-image');

function changeAboutImage() {
    aboutImage.src = `assets/img/about/${imagePaths[currentAboutImageIndex]}`;
    currentAboutImageIndex = (currentAboutImageIndex + 1) % imagePaths.length;
}

function changeCsharpImage() {
    csharpImage.src = `assets/img/projects/${imagePaths2[currentCsharpImageIndex]}`;
    currentCsharpImageIndex = (currentCsharpImageIndex + 1) % imagePaths2.length;
}

function changeSqlImage() {
    sqlImage.src = `assets/img/projects/${imagePaths3[currentSqlImageIndex]}`;
    currentSqlImageIndex = (currentSqlImageIndex + 1) % imagePaths3.length;
}

// Change images every 4 seconds for about-image and project-image respectively
setInterval(changeAboutImage, 4000);
setInterval(changeCsharpImage, 3500);
setInterval(changeSqlImage, 3500);