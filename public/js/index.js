console.log('index.js vinculado correctamente!!!');

const qs = q => document.querySelector(q)

const $ = id => document.getElementById(id)

window.onload = () => {
    let main = qs('main');
    let h2 = document.querySelector('.subtitulo');
    let a = qs('a');
    let parrafos = document.querySelectorAll('p');
    
    let nombre = prompt('Decime tu nombre')
    
    if(nombre){
        h2.innerText += ' ' + nombre;
    }else{
        h2.innerText += ' invitado'
    } 

    h2.style.textTransform = 'uppercase';
    a.style.color = "#E51B3E";

    let response = confirm('¿Querés cambiar el color de fondo?');

    if(response){
        document.body.classList.add('fondo')
    }
    
    for (let i = 0; i < parrafos.length; i++) {
        
        if(i % 2 == 0) {
            parrafos[i].classList.add('destacadoPar')
        }else{
            parrafos[i].classList.add('destacadoImpar')
        }
        
    }
    main.style.display = 'block';
}


