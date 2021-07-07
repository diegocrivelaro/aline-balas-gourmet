/* 
Quando o menu for clicado, coloque a classe SHOW no NAV
*/
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll("#nav1 .toggle");

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show');
    })
}

/*------------------*/

/* 
Quando algum tópico do menu for clicado, remova a classe SHOW do NAV
*/
const links = document.querySelectorAll('#nav1 ul li a');

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show');
    })
}

