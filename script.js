let btn = document.querySelector('#btn-menu');

btn.addEventListener('click', function() {
    let menu = document.querySelector('.btn-menu');
    menu.style.display = 'flex';
})

let xBtn = document.querySelector('.fa-xmark');

xBtn.addEventListener('click', function(){
    let menu= document.querySelector('.btn-menu');
    menu.style.display = 'none';
})