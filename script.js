let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    formularioPesquisa.classList.remove('active');
    cartItem.classList.remove('active');
}

let formularioPesquisa = document.querySelector('.formulario-pesquisa');

document.querySelector('#search-btn').onclick = () =>{
    formularioPesquisa.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-itens-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    formularioPesquisa.classList.remove('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
    formularioPesquisa.classList.remove('active');
    cartItem.classList.remove('active');
}


