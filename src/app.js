import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
const palo = ["♥","♦","♣","♠"];
const numero = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

const paloRandom= Math.floor(Math.random() * palo.length)
console.log(paloRandom);

const numeroRandom = Math.floor(Math.random() * numero.length)
console.log(numeroRandom);

const simbolo =palo[paloRandom];
const color = simbolo === "♥" || simbolo === "♦" ? "red" : "black" ;



const paloDoc =  document.getElementById("palo");
const numeroDoc = document.getElementById("numeroArriba");
const numeroDoc2 = document.getElementById("numeroAbajo");



paloDoc.textContent = palo[paloRandom];
numeroDoc.textContent = numero[numeroRandom];
numeroDoc2.textContent = numero[numeroRandom];

paloDoc.style.color = color;
numeroDoc.style.color = color;
numeroDoc2.style.color = color;
};
