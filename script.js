'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');
    const cactus = document.querySelector('.cactus');
    const cactusMov = document.querySelector('.cactus__mov');
    const start = document.querySelector('.start');


    function startAnimation() {
        start.style.backgroundColor = 'rgba(0,0,0,.7)';
    let startTimer = document.createElement('div');
        start.append(startTimer);
        startTimer.classList.add('start__timer');
        startTimer.innerHTML = '3';
        cactus.classList.remove('cactus__mov');

        const startInterval = setInterval(() => {
            if (startTimer.innerText == '3') {
                startTimer.innerHTML = '2';
            } else if (startTimer.innerText == 2) {
                startTimer.innerHTML = '1';
            } else {
                startTimer.remove();
                start.style.backgroundColor = 'transparent';
                clearInterval(startInterval);
                cactus.classList.add('cactus__mov');
            }
        }, 1000);
    }

    startAnimation();



    document.addEventListener('keydown', function() {
        jump();
    });

    document.addEventListener('touchstart', function() {
        jump();
    });

    function jump() {
        if (dino.classList != 'jump') {
            dino.classList.add('jump');
        } 
        setTimeout(function() {
            dino.classList.remove('jump');
        }, 500);
    }


    const result = document.querySelector('.result');
    let i = 1;


    let isAlive = setInterval (function() {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            const end = document.createElement('div');
            end.classList.add('end');
            document.body.append(end);
            startAnimation();       

            end.innerHTML = `ВЫ ПРОИГРАЛИ! Очков набранно <span>${result.value}</span>`;
            result.value = '';
            i = 0;
            setTimeout(() => {
                end.remove();
            },3000);
        } else if (cactusLeft < 50 && cactusLeft > 0 && dinoTop <= 120) {
            result.value = i;
            i = i + 1;
        }
    }, 80);
});