const images = [
    "beach-1246835_1920.jpg",
    "boats-1246684_1920.jpg",
    "castle-467116_1920.jpg",
    "desert-1246282_1920.jpg",
    "fire-department-1246851_1920.jpg",
    "palace-530055_1920.jpg",
    "shoreline-1246532_1920.jpg",
    "windmills-1747331_1920.jpg",
];


const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);