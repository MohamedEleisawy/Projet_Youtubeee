document.addEventListener("DOMContentLoaded", ()=>{
    'use strict';
    // let accordion = document.getElementById('accordion');
    // let ouvertureDesMentionsLegales = document.getElementById('ouvertureDesMentionsLegales');
    
    // ouvertureDesMentionsLegales.addEventListener('click', function () {
    //     if (accordion.style.display === 'block') {
    //         accordion.style.display = 'none';
    //     } else {
    //         accordion.style.display = 'block';
    //     }
    // });
    let btnHamburger = document.getElementById('hamburger');
    let menu = document.getElementById('menu');
    
    btnHamburger.addEventListener('click', function() {
      menu.classList.toggle('show');
    });

    // Sélectionne tous les éléments avec la classe 'custom-carousel'
var customCarousel = document.querySelector(".custom-carousel");

// Initialise une fonction pour basculer la classe 'active'
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
let button = document.getElementById('btnMention')
 
});