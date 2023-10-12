// Récupérer les éléments de la navbar
const bouton1 = document.getElementById('b1');
const bouton2 = document.getElementById('b2');
const bouton3 = document.getElementById('b3');
const bouton4 = document.getElementById('b4');
const bouton5 = document.getElementById('b5');
const bouton6 = document.getElementById('b6');
const bouton7 = document.getElementById('b7');


// Ajouter un gestionnaire d'événement à chaque bouton
bouton1.addEventListener('click', () => scrollToElement('a-propos'));
bouton2.addEventListener('click', () => scrollToElement('la-soiree'));
bouton3.addEventListener('click', () => scrollToElement('les-experts'));
bouton4.addEventListener('click', () => scrollToElement('inscription'));
bouton5.addEventListener('click', () => scrollToElement('les-experts'));
bouton6.addEventListener('click', () => scrollToElement('la-soiree'));
bouton7.addEventListener('click', () => scrollToElement('inscription'));

// Fonction pour faire défiler jusqu'à un élément en s'arrêtant 10px avant
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    const offset = 80; // Définir l'offset ici (10px dans ce cas)

    window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
    });
}
