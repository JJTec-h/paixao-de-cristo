
function scrollToAnchor(event) {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"

        });
    }
    console.log('ola')
}

const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");
smoothScrollLinks.forEach(function (link) {
    link.addEventListener("click", scrollToAnchor);
    console.log('ola')

});


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



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
