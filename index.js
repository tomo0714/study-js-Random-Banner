// DOM
const img = document.getElementById('target');

// get random number
const imagesArray = ['image1.PNG', 'image2.PNG', 'image3.jpeg','image4.png', 'image5.png', 'image6.png'];
let num = Math.random();
num = num * 6;
num = Math.floor(num);

// Random banner
img.setAttribute('src', `images/${imagesArray[num]}`);
