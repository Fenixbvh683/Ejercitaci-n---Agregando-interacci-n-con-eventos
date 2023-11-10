window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function () {
        this.classList.toggle('colorRed')
    })

    const inputTitulo = document.getElementById('titulo');

    let position = 0;
    let palabra = "";

    inputTitulo.addEventListener('keyup', (e) => {
        let palabraSecreta = 'secreto'

        if(e.key == palabraSecreta[position]){

            palabra += e.key;
            position += 1;

            if(palabra == "secreto"){
                alert("Secreto en la Montaña");
            }
        } else {
            palabra = "";
            position = 0
        }
    })

}