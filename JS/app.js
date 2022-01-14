// Header
// HAMBURGER MENU & Navigation Links

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100vh';
}



// About ME PAGE SERCIVES BOX HOVER EFFECT
const skillCardHover = document.querySelector('.abt-skills-card');
const skillCardHover1 = document.querySelector('.card1');
const skillCardHover2 = document.querySelector('.card2');


const aboutSkillCardLine = document.querySelector('.abt-skills-card-line');
const aboutSkillCardLine1 = document.querySelector('.line1');
const aboutSkillCardLine2 = document.querySelector('.line2');


const h6CardHover = document.querySelector('.card-hover');
const h6CardHover1 = document.querySelector('.card-hover1');
const h6CardHover2 = document.querySelector('.card-hover2');

const h6SpanHover = document.querySelector('.c-hover');
const h6SpanHover1 = document.querySelector('.c-hover1');
const h6SpanHover2 = document.querySelector('.c-hover2');

// Card 0
skillCardHover.addEventListener('mouseover',hoverEffectBefore);
skillCardHover.addEventListener('mouseout',hoverEffectAfter);
// Card 1
skillCardHover1.addEventListener('mouseover',hoverEffectBefore1);
skillCardHover1.addEventListener('mouseout',hoverEffectAfter1);
// Card 2
skillCardHover2.addEventListener('mouseover',hoverEffectBefore2);
skillCardHover2.addEventListener('mouseout',hoverEffectAfter2);

function hoverEffectBefore(){
    aboutSkillCardLine.style.background = '#ffc107';
    h6CardHover.style.color = '#fff';
    h6SpanHover.style.color = '#ffc107';
}
function hoverEffectAfter(){
    aboutSkillCardLine.style.background = '#3e64ff';
    h6CardHover.style.color = '#3e64ff';
    h6SpanHover.style.color = '#ee2c4c';
}

// Card 1
function hoverEffectBefore1(){
    aboutSkillCardLine1.style.background = '#ffc107';
    h6CardHover1.style.color = '#fff';
    h6SpanHover1.style.color = '#ffc107';
}
function hoverEffectAfter1(){
    aboutSkillCardLine1.style.background = '#3e64ff';
    h6CardHover1.style.color = '#3e64ff';
    h6SpanHover1.style.color = '#ee2c4c';
}
// Card 2
function hoverEffectBefore2(){
    aboutSkillCardLine2.style.background = '#ffc107';
    h6CardHover2.style.color = '#fff';
    h6SpanHover2.style.color = '#ffc107';
}
function hoverEffectAfter2(){
    aboutSkillCardLine2.style.background = '#3e64ff';
    h6CardHover2.style.color = '#3e64ff';
    h6SpanHover2.style.color = '#ee2c4c';
}

