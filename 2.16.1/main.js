'use strict' ;

//Ejercicio 1

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);

//Ejercicio 2

let timer = 0;

const incrementAndShowTimer = () => {
    timer++;
    const grapes = document.querySelector('.grapes');
    grapes.innerHTML = timer;
    if(timer > 12) {
        grapes.classList.add('hidden');
    }
}

setInterval(incrementAndShowTimer, 1000);

//Ejercicio 3