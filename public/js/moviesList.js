window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    /*let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }*/
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    const logoDH = document.querySelector('.logoDH img');

    logoDH.addEventListener('mouseover', () => {
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })

    const inputTitulo = document.getElementById('titulo')

    inputTitulo.addEventListener('keydown', (e) => {
        console.log(e.key)
    })

}