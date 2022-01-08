console.log('JS MoviesAdd.js vinculado correctamente!');

window.onload = () => {
let h1 = document.querySelector('h1');

let section = document.querySelector('section');

let article = document.querySelector('article');

h1.innerText += ' AGREGAR PELÍCULAS';

h1.classList.add('titulo');

article.classList.add('fondoTransparente');

section.classList.add('fondoCRUD');
}