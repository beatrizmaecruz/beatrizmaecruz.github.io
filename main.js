console.log("Hey, funny seeing you here. I'm always in the console too. :D");

const greet3 = document.getElementById('greet-3');
const learntLanguagesHoverMsg = document.querySelector('#greet-3 .hover-message');

let languages_hasHovered = false; 
 
// Hover messages functions
greet3.addEventListener('mouseover', () => {
    learntLanguagesHoverMsg.show();
    learntLanguagesHoverMsg.style.animation = 'fadeInOpacity 1s 1';
});

greet3.addEventListener('mouseout', () => {
    learntLanguagesHoverMsg.close();
});
