

const menu = document.querySelector('.menu');
const painelMenu = document.querySelector('.painelMenu');
const links = document.querySelectorAll('.links')

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


links.forEach(link => {
    link.addEventListener('click', () => {
        painelMenu.classList.remove('menuAtivo')
        test = false;
    })
})