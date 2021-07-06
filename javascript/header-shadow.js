/*------------------*/
/* HEADER SHADOW SCROLL */
const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll') /* Adicionando a class scroll no header */
    }
    else{
        header.classList.remove('scroll') /* Removendo a class scroll no header */
    }
})
/*------------------*/