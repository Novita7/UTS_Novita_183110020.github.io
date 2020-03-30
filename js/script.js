const bt = document.querySelector('.bt-res');
bt.addEventListener('mouseover', function () {
    const text = document.querySelector('.bt-res a');
    text.style.color = 'black';
    text.style.border = '0';
    bt.style.backgroundColor = 'white';
    bt.style.cursor = 'pointer';
})
bt.addEventListener('mouseleave', function () {
    const text = document.querySelector('.bt-res a');
    text.style.color = 'white';
    bt.style.backgroundColor = 'rgba(0,0,0,0)';
})

const slayer0 = document.getElementsByClassName('trigger')[0];
const slayer1 = document.getElementsByClassName('trigger')[1];
const slayer2 = document.getElementsByClassName('trigger')[2];

slayer0.addEventListener('mouseover', function () {
    const slay0 = document.getElementsByClassName('sponsored')[0];
    slay0.style.opacity = 1;
})
slayer0.addEventListener('mouseleave', function () {
    const slay0 = document.getElementsByClassName('sponsored')[0];
    slay0.style.opacity = 0;
})

slayer1.addEventListener('mouseover', function () {
    const slay1 = document.getElementsByClassName('sponsored')[1];
    slay1.style.opacity = 1;
})
slayer1.addEventListener('mouseleave', function () {
    const slay1 = document.getElementsByClassName('sponsored')[1];
    slay1.style.opacity = 0;
})
slayer2.addEventListener('mouseover', function () {
    const slay2 = document.getElementsByClassName('sponsored')[2];
    slay2.style.opacity = 1;
})
slayer2.addEventListener('mouseleave', function () {
    const slay2 = document.getElementsByClassName('sponsored')[2];
    slay2.style.opacity = 0;
})