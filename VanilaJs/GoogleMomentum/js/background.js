const images = ["background1.jpg", "background2.jpg", "background3.jpg"];

const randomeimages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${randomeimages}`;
bgImage.className = "background";

document.body.appendChild(bgImage);
