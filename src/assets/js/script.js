import AOS from 'aos';
import 'aos/dist/aos.css';

// Inizializza AOS
AOS.init();

// Swiper JS
let swiper = new Swiper(".mySwiper", {

  direction: "horizontal",
  spaceBetween: 0,
  loop: true,


  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});


// Mostra la descrizione iniziale
document.addEventListener('DOMContentLoaded', function () {
  showStep(1);

  // Aggiunta event ai bottoni
  document.getElementById('voce1').addEventListener('click', function () {
    showStep(1);
  });

  document.getElementById('voce2').addEventListener('click', function () {
    showStep(2);
  });

  document.getElementById('voce3').addEventListener('click', function () {
    showStep(3);
  });


  //gestione cambio icona toggle navbar
  const toggleButton = document.querySelector('.navbar-toggler');
  const offcanvasNavbar = document.getElementById('offcanvasNavbar');
  const openIcon = '<i class="icon-minus fa-solid fa-minus"></i><i class="icon-minus fa-solid fa-minus"></i>';
  const closeIcon = '<i class="fa-solid fa-xmark"></i>';

  // Cambia l'icona quando la sidebar viene aperta
  offcanvasNavbar.addEventListener('show.bs.offcanvas', function () {
    toggleButton.innerHTML = closeIcon;
  });

  // Cambia l'icona quando la sidebar viene chiusa
  offcanvasNavbar.addEventListener('hidden.bs.offcanvas', function () {
    toggleButton.innerHTML = openIcon;
  });




});

//funzione per la gestione dell'animazione entrata e uscita degli steps

function showStep(stepNumber) {
  const counter = document.getElementById('counter');
  const steps = document.querySelectorAll('.voce');
  const currentDescription = document.querySelector('.testo.active');
  const newDescription = document.getElementById('testo' + stepNumber);

  if (currentDescription) {
    // Rimuovi l'animazione di entrata attiva se c'è
    currentDescription.classList.remove('slide-enter-active');

    // Aggiungi l'animazione di uscita
    currentDescription.classList.add('slide-exit-active');

    // Una volta completata l'animazione di uscita, esegui l'animazione di entrata del nuovo elemento
    currentDescription.addEventListener('transitionend', function onExit() {
      currentDescription.classList.remove('slide-exit-active', 'slide-exit', 'active');
      currentDescription.removeEventListener('transitionend', onExit);

      // Aggiungi le classi di entrata per il nuovo elemento
      newDescription.classList.add('slide-enter');
      newDescription.classList.add('active');

      // Forza il reflow per applicare correttamente l'animazione
      void newDescription.offsetWidth;

      // Aggiungi l'animazione di entrata attiva
      newDescription.classList.add('slide-enter-active');
    });
  } else {
    // Se non c'è un elemento corrente (prima visualizzazione), aggiungi le classi di entrata direttamente
    newDescription.classList.add('slide-enter');
    newDescription.classList.add('active');

    // Forza il reflow per applicare correttamente l'animazione
    void newDescription.offsetWidth;

    // Aggiungi l'animazione di entrata attiva
    newDescription.classList.add('slide-enter-active');
  }


  counter.innerText = stepNumber + '/3';

  steps.forEach(step => {
    step.classList.remove('active');
  });

  document.getElementById('voce' + stepNumber).classList.add('active');
}

