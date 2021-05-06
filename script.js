var state = 0; var num = 0;
var typed = document.getElementById("random");
typed.style.display = "none";

var greet = ["B","r","e","a","k"," ","t","h","e"," ","S","c","r","e","e","n"]
var typeSound = document.getElementById('type');
var mainContainer = document.getElementById("mainContainer");
var h, w, size = 0;

document.body.addEventListener('click', movingOn);
function movingOn(){
  state++;
  console.log('state =' + ' ' + state);
}

setTimeout(function(){
var message = setInterval(please, 100);
var i = 0;
typeSound.play();
function please() {
  if (i < greet.length) {
    let greeting = document.getElementById('greeting');
    if (greeting !== null){
      greeting.innerText = greeting.innerText + greet[i];
    } i = i + 1;
  }
}
}, 1400);

if (state == 0) {
  setTimeout(function(){
    mainContainer.onclick = crackScreen();
  }, 4000);
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

// var video = document.querySelector("#videoElement");
// if (navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(function (stream) {
//       video.srcObject = stream;
//     })
//     .catch(function (err0r) {
//       console.log("Something went wrong!");
//     });
// }

let brokenScreen = [
  { // Fiction vs reality, time
    "title" : "content",
    "words" :[
    { "first":"ownership", "more":[ "copyright", "ownership", "censorship", "company", "infringement", "publish", "host"]},
    { "first":"experience", "more":[ "meaningful", "mindless", "communication", "friends", "efficiency", "understanding","entertainment"]},
    { "first":"recommended", "more":[ "echo", "amplify", "conspiracy", "choice", "addiction", "continue"]},
    { "first":"expectations", "more":[ "expectations", "parasocial", "stress", "demand", "more", "more", "more"]},
    { "first":"negativity", "more":[ "online gambling", "online hate", "cyberbullying", "addiction", "explicit"]},
    { "first":"algorithm", "more":[ "algorithm", "fake news", "ethics", "influence", "machine learning", "bias"]},
    { "first":"monetization", "more":[ "monetization", "restrictions", "brands", "advertising", "consumption"]}
    ]
  },
  { // camera shows viewer, displays comments of others
    "title" : "mentality",
    "words": [
    { "first":"self-image", "more":[ "self-image", "comparison", "friendship paradox", "beauty", "perception" ] },
    { "first":"mental health", "more":[ "depression", "social isolation", "anxiety", "addiction", "confident", "satisfied", "happy"]},
    { "first":"friends", "more":[ "friends", "online vs in-person", "forums", "social", "belonging", "understanding"]},
    { "first":"presentation", "more":[ "real vs ideal", "presentation", "social media", "happy", "currated image"] },
    { "first":"identity", "more":[ "exploration", "community", "interests", "need for acceptance", "fear", "identity"] }
    ]
  },
  {
    "title" : "company and consumer",
    "words" :[
    { "first":"ideology", "more":[ "platform", "dark patterns", "planned obsolescence", "growth", "management"]},
    { "first":"products", "more":[ "herd mentality", "dark patterns", "marketing", "changed behavior", "products", "adspeak", "trend"]},
    { "first":"security", "more":[ "authentification", "passcodes", "log-in", "accounts", "data"]},
    { "first":"consumption", "more":[ ]},
    { "first":"coorporation", "more":[ ]}
    ]
  },
  { // show log of what the user has done on the website, positive language
    "title" : "government",
    "words" :[
    { "first":"politics", "more":[ "geopolitics", "cyber warfare", "interdependence", "policy making", "soverignty", "protection", "diplomacy", "digital protests", "human rights"]},
    { "first":"security", "more":[ "security", "trust", "cybercrime", "data breaches", "hacking"]},
    { "first":"surveillance", "more":[ "facial recognition", "privacy", "freedom"]},
    { "first":"data", "more":[ "data mining", "concern", "collection"]}
    ]
  },
  { // Idols, gender, anonymity // , depression
    "title" : "creator",
    "words" :[
    { "first":"personalities", "more":[ "personalities", "idols", "celebrity", "anonymity", "parasocial", "freedom", "gender"]},
    { "first":"live-streaming", "more":[ "life", "fame", "control", "influence", "creativity", "ego", "winning", "chat", "mobilization", "living for an audience"]},
    { "first":"expectations", "more":[ "expectations", "pressure", "clout chasing", "cancel culture", "burden", "hate", "commitment"]},
    { "first":"brand", "more":[ "brand", "sell-out", "judgment", "marketing", "control", "sponsor"]}
    ]
  }
];


function listPages(){
  mainContainer.style.backgroundImage = "url('broken.jpg')";
  typed.style.display = "none";
  for (var i = 0; i < brokenScreen.length; i++) {
    let incoming = brokenScreen[i];
    let word = incoming['title'];
    let newPara = document.createElement("p");
    newPara.classList.add('newPara');
    newPara.innerText = word;
    h = 6 + Math.random() * 80;
    w = 8 + Math.random() * 80;
    size = 1.4 + Math.random() * 2;
    newPara.style.fontSize = size + "vw";
    newPara.style.top = h + "vh";
    newPara.style.left = w + "vw";
    if (incoming['words'] !== undefined){
      newPara.style.cursor = "pointer";
      newPara.onmouseover = function() {newPara.classList.add('hover')};
      newPara.onmouseout = function() {newPara.classList.remove('hover')};
      let number = i;
      newPara.addEventListener("click", function(){
        information(number);
      }, false);
    }
    mainContainer.appendChild(newPara);
  }}

//looping learned from https://www.w3schools.com/js/js_json_arrays.asp
var tHack, lHack, wHack = 0;
function information(number) {
  console.log(brokenScreen[number]['words']);
  mainContainer.style.backgroundImage = '';
  mainContainer.innerHTML = '';
  tHack = -10 + Math.random() * 50;
  lHack = -10 + Math.random() *30;
  wHack = 20 + Math.random() *60;
  typed.style.top = tHack + "vh";
  typed.style.left = lHack + "vw";
  typed.style.width = wHack + "vw";
  typed.style.display = "block";
  let incoming = brokenScreen[number]['words']
  for (i in incoming) {
    let word = incoming[i].first;
    let newPara = document.createElement("p");
    newPara.classList.add('newPara2');
    newPara.innerText = word;
    h = 6 + Math.random() * 80;
    w = 8 + Math.random() * 80;
    size = 1.4 + Math.random() * 2;
    newPara.style.fontSize = size + "vw";
    newPara.style.top = h + "vh";
    newPara.style.left = w + "vw";
    if (incoming[i].more[0] !== undefined){
      newPara.style.cursor = "pointer";
      newPara.onmouseover = function() {newPara.classList.add('hover')};
      newPara.onmouseout = function() {newPara.classList.remove('hover')};
      let number2 = i;
      newPara.addEventListener("click", function(){
        print2(number, number2);
      }, false);
    }
    mainContainer.appendChild(newPara);
  }
  let backUp = document.createElement("img");
  backUp.src = "white.png";
  backUp.classList.add("back");
  backUp.addEventListener('click', home);
  mainContainer.appendChild(backUp);
}

function home() {
  mainContainer.innerHTML = '';
  listPages();
}

function print2(number, number2) {
  num = number2;
  mainContainer.style.backgroundImage = '';
  mainContainer.innerHTML = '';
  let incoming = brokenScreen[number].words[num].more
  for (i in incoming) {
    let word = incoming[i];
    let newPara = document.createElement("p");
    newPara.classList.add('newPara2');
    newPara.innerText = word;
    h = 6 + Math.random() * 80;
    w = 8 + Math.random() * 80;
    size = 1.4 + Math.random() * 2;
    newPara.style.fontSize = size + "vw";
    newPara.style.top = h + "vh";
    newPara.style.left = w + "vw";
    mainContainer.appendChild(newPara);
  }
  let backUp = document.createElement("img");
  backUp.src = "white.png";
  backUp.classList.add("back");
  backUp.addEventListener("click", function(){
    information(number);
  }, false);
  mainContainer.appendChild(backUp);
}

// var r, g, b, size = 0;
// var color1, textsize;
// r = Math.random() * 255;
// g = Math.random() * 255;
// b = Math.random() * 255;
// color1 = "rgb(" + r + "," + g + "," + b + ")";
// size = 0.8 + Math.random() * 2;
// textsize = size + "vw";
