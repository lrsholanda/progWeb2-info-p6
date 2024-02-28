const hero = document.querySelector('.mario'); //usar class, getElementById: usar id
const pipe = document.querySelector('.pipe');
var points =0;
var moreOnePoint=1;

const jump = () =>{
    hero.classList.add('jump');
    setTimeout(()=>{
        hero.classList.remove('jump');
    }, 500);
}

document.getElementById('points').innerHTML = points;

const gameOver = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const heroPosition = +window.getComputedStyle(hero).bottom.replace('px', ''); //apos retirar o px da string. usa-se + para converter essa string para numero
    if(pipePosition<=40 && pipePosition >0 && heroPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        hero.style.animation = 'none';
        hero.style.left = `${heroPosition}px`;

        hero.src = "./images/game-over.png";
    }else if(pipePosition <0 && moreOnePoint ==1){
        points++;
        moreOnePoint = 0;
    }else if (pipePosition >0){
        moreOnePoint= 1;
    }
},20)
document.addEventListener('keydown', jump); //keyup é usado quando a tecla é solta
//function jump(){}