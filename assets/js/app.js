document.addEventListener("DOMContentLoaded", ()=>{
    'use strict';
    let btnHamburger = document.getElementById('hamburger');
    let menu = document.getElementById('menu');
    
    btnHamburger.addEventListener('click', function() {
      menu.classList.toggle('show');
    });
  
    const elements = document.querySelectorAll('#menu .element');
    elements.forEach(element => {
      element.addEventListener('click', () => {
        elements.forEach(e => e.classList.remove('actif'));
        element.classList.add('actif');
      });
    });

    // Sélectionne tous les éléments avec la classe 'custom-carousel'
var customCarousel = document.querySelector(".custom-carousel");

    function toggleActive(event) {
    // Sélectionne tous les éléments enfants avec la classe 'item'
    var items = customCarousel.querySelectorAll(".item");
    
    // Retire la classe 'active' de tous les éléments
    items.forEach(function(item) {
        item.classList.remove("active");
    });
    
    // Bascule la classe 'active' sur l'élément cliqué
    event.target.classList.toggle("active");
}

// Ajoute un écouteur d'événement 'click' à l'élément parent
var customCarousel = document.querySelector(".custom-carousel");
if (customCarousel) {
    customCarousel.addEventListener("click", function(event) {
        // Vérifie si l'élément cliqué a la classe 'item'
        if (event.target.classList.contains("item")) {
            // Appelle la fonction pour basculer la classe 'active'
            toggleActive(event);
        }
    });
}

});