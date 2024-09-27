// JavaScript Document

const openButton = document.querySelector ("header > button");
const deNav = document.querySelector("nav");

const bleachModeButton = document.getElementById("bleachModeButton")
const bleachmode = document.getElementById("bleachmode")

bleachModeButton.addEventListener("click", toggleBleach)

function toggleBleach() {
  bleachmode.classList.toggle("visually_hidden");
}

// Functie om het menu te openen en te sluiten
function openMenu() {
  // Selecteer de nav
  
  
  // Toggle de class toonMenu op de nav zodat de css de nav kan laten zien of verbergen
  deNav.classList.toggle("toonMenu");

  
  // Als de nav wordt getoond, dan wordt de scroll van de body uitgezet
  // Als de nav wordt verborgen, dan wordt de scroll van de body weer aangezet
  if (deNav.classList.contains("toonMenu")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = document.body.style.overflow === "hidden" ? "" : "auto";
  }
}

openButton.onclick = openMenu;







