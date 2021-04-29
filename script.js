//intro message
var state = 0;
var greet = ["B","r","e","a","k"," ","t","h","e"," ","S","c","r","e","e","n"]
// var typeSound = document.getElementById('type');
// typeSound.play();
var message = setInterval(please, 100);
var i = 0;
function please() {
  if (i < greet.length) {
    let greeting = document.getElementById('greeting');
    greeting.innerText = greeting.innerText + greet[i];
    i = i + 1;
  }
}

var mainContainer = document.getElementById("mainContainer");
if (state == 0) {
  setTimeout(function(){
    mainContainer.onclick = crackScreen();
  }, 3000);
}
function crackScreen() {
  mainContainer.style.backgroundImage = "url('broken.jpg')";
  let greeting = document.getElementById('greeting');
  greeting.style.display = "none";
  state = 1;
  console.log('state =' + ' ' + state);
  setTimeout(function(){
    mainContainer.onclick = listPages();
  }, 1000);
}

if (state == 1){
  document.body.addEventListener('click', movingOn);
}

function movingOn(){
  state++;
  console.log('state =' + ' ' + state);
}


// var video = document.querySelector("#videoElement");
//
// if (navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(function (stream) {
//       video.srcObject = stream;
//     })
//     .catch(function (err0r) {
//       console.log("Something went wrong!");
//     });
// }
var pages = ["content", "beauty", "ideology", "privacy", "idols"]
var h, w, size = 0;
function listPages(){
  for (var i = 0; i < pages.length; i++) {
    let word = pages[i];
    let newPara = document.createElement("p");
    newPara.classList.add('newPara');
    newPara.innerText = word;
    h = 6 + Math.random() * 80;
    w = 8 + Math.random() * 80;
    size = 1.4 + Math.random() * 2;
    newPara.style.fontSize = size + "vw";
    newPara.style.top = h + "vh";
    newPara.style.left = w + "vw";
    mainContainer.appendChild(newPara);
    newPara.addEventListener('click', information);
  }
}

var r, g, b, size = 0;
var color1, textsize;

var content = ["Content Creation", "ownership", "expectations", "stress", "restrictions", "copyright", "algorithm", "parasocial"]
var beauty = ["Beauty", "mental health", "self-image"]
// camera shows viewer, displays comments of others
var ideology = ["dark patterns", "consumption", "planned obsolescence", "changed behavior"]
// Identity, exploration, fear of failure, depression
// Fiction vs reality,r","e","e","n time, self-image, fake news
// Idols, gender, constant pressure, clout chasing, cancel culture, anonymity
// Privacy, freedom, surveillance - show log of what the user has done on the website, positive language

function information() {
  mainContainer.style.backgroundImage = '';
  mainContainer.innerHTML = '';
  for (var i = 0; i < content.length; i++) {
    let word = content[i];
    let newPara = document.createElement("p");
    newPara.classList.add('newPara');
    newPara.innerText = word;
    h = 6 + Math.random() * 80;
    w = 8 + Math.random() * 80;
    size = 1.4 + Math.random() * 2;
    newPara.style.fontSize = size + "vw";
    newPara.style.top = h + "vh";
    newPara.style.left = w + "vw";
    mainContainer.appendChild(newPara);
  }
}


r = Math.random() * 255;
g = Math.random() * 255;
b = Math.random() * 255;
color1 = "rgb(" + r + "," + g + "," + b + ")";

size = 0.8 + Math.random() * 2;
textsize = size + "vw";


//
// var word1 = Math.floor( Math.random() * content.length);
// var r2 = Math.floor( Math.random() * nice.length);
//
// console.log("Hope you're having a", nice[r1] + ",", nice[r2], "day!");
