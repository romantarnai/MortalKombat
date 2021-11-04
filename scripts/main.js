const bg = document.querySelector('.bg');
const sub = document.querySelector('.sub')
const scorp = document.querySelector('.scorp')
const textbox = document.querySelector('.textbox')

document.addEventListener("mousemove", function(e){
    bg.style.width =  100 + e.pageX/100 + '%';
    bg.style.height =  100 + e.pageX/100 + '%';

    scorp.style.right = 1 + e.pageX/100 + '%';
    sub.style.left = 1 + e.pageX/100 + '%';

    textbox.style.bottom = 35 + e.pageX/70 + "%";
})