const menu = document.getElementById('menu');
const offsetMenu = window.pageYOffset + menu.getBoundingClientRect().top;

function stickyMenu(){
    if(window.pageYOffset > offsetMenu){
        menu.classList.add("fixed")
    }
    else(
        menu.classList.remove("fixed")
    )
}

stickyMenu()
window.addEventListener('scroll', stickyMenu)