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
    
      
});