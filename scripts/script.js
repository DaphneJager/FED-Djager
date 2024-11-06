// JavaScript Document

const openButton = document.querySelector ("header > button");
const deNav = document.querySelector("nav");

// +-knop catalog
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countDisplay = document.getElementById("count");

// sizeButton
const sizeButtons = document.querySelectorAll('.size-btn');


// Functie om het menu te openen en te sluiten
function openMenu() {
  // Selecteer de nav
  var deNav = document.querySelector("nav");
  
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


// +-knop

// Beginwaarde
let count = 1;
countDisplay.textContent = count;

// Functie om de waarde te verlagen
function decreaseCount() {
  if (count > 0) { // Zorg ervoor dat de waarde niet onder de 0 komt
    count--;
    countDisplay.textContent = count;
}
}

// Functie om de waarde te verhogen
function increaseCount() {
    count++;
    countDisplay.textContent = count;
}

// sizeButton
sizeButtons.forEach(button => {
  button.addEventListener('click', () => {
      // Verwijder de 'selected' class van alle knoppen
      sizeButtons.forEach(btn => btn.classList.remove('selected'));
      // Voeg de 'selected' class toe aan de geklikte knop
      button.classList.add('selected');
  });
});


// eventlisteners
openButton.onclick = openMenu;
decreaseBtn.addEventListener("click", decreaseCount);
increaseBtn.addEventListener("click", increaseCount);






