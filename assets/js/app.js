'use strict';
document.addEventListener("DOMContentLoaded", ()=>{
    let accordion = document.getElementById('accordion');
    let ouvertureDesMentionsLegales = document.getElementById('ouvertureDesMentionsLegales');
    
    ouvertureDesMentionsLegales.addEventListener('click', function () {
        if (accordion.style.display === 'block') {
            accordion.style.display = 'none';
        } else {
            accordion.style.display = 'block';
        }
    });
});