

const menu = document.querySelector('.menu');
const painelMenu = document.querySelector('.painelMenu');

let test = false
menu.addEventListener('click', () => {

    if (test) {
        painelMenu.classList.remove('menuAtivo');
        test = false;
    }
    else {
        painelMenu.classList.add('menuAtivo')
       test = true
    }

})