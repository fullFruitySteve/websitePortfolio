function NormalText(){
    document.getElementById("translation").innerHTML = "Hover over text to see translation";
}
function H1Text(){
    document.getElementById("translation").innerHTML = "Self Introduction";
}
function P1Text(){
    document.getElementById("translation").innerHTML = "A good self introduction is a very important skill and a great part of this website";
}
function P2Text(){
    document.getElementById("translation").innerHTML = "It's nice to meet you, I am Stephen";
}
function P3Text(){
    document.getElementById("translation").innerHTML = "My favourite hobbies are:";
}
function L1Text(){
    document.getElementById("translation").innerHTML = "Skateboarding";
}
function L2Text(){
    document.getElementById("translation").innerHTML = "Learning Japanese (ofcourse)";
}
function L3Text(){
    document.getElementById("translation").innerHTML = "Going to the gym";
}
function L4Text(){
    document.getElementById("translation").innerHTML = "Playing games";
}
function P4Text(){
    document.getElementById("translation").innerHTML = "I started learning Japanese when I was a university student, I thought it would be a good business decisoin";
}
function P5Text(){
    document.getElementById("translation").innerHTML = "These days, I love the Japanese culture and language and study it every day";
}
function NavFunc() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }