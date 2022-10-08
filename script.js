// Adicione à página o título "Paleta de Cores".
const elementoH1 = document.createElement('h1');
elementoH1.innerText = 'Paleta de Cores';
elementoH1.id = 'title';
document.body.appendChild(elementoH1);

// Criando caixa pai.
const main = document.createElement('main');
main.id = 'color-palette';
document.body.appendChild(main);

// Criando caixas filhas.
for (let i = 1; i <= 4; i += 1) {
    const divsMain = document.createElement('div');
    main.appendChild(divsMain);
    divsMain.className = 'color';
}

// Capturando as cores da paleta.
const divPreta = document.getElementsByClassName('color')[0];
const div2 = document.getElementsByClassName('color')[1];
const div3 = document.getElementsByClassName('color')[2];
const div4 = document.getElementsByClassName('color')[3];

// Dando cores a paleta.
divPreta.style.background = 'black';
div2.style.background = 'yellow';
div3.style.background = 'red';
div4.style.background = 'blue';

// Capturando botão de cores aleatorias.
const buttonAleatorio = document.getElementById('button-random-color');

// Adicionando evento ao clicar o botão.
buttonAleatorio.addEventListener('click', coresAleatorias);

function coresAleatorias() {

    let color1 = Math.floor(Math.random() * 350);
    let color2 = Math.floor(Math.random() * 450);
    let color3 = Math.floor(Math.random() * 550);

    div2.style.backgroundColor = `#${color1}`;
    div3.style.backgroundColor = `#${color2}`;
    div4.style.backgroundColor = `#${color3}`;

    localStorage.setItem('corAleatoria1', `#${color1}`);
    localStorage.setItem('corAleatoria2', `#${color2}`);
    localStorage.setItem('corAleatoria3', `#${color3}`);
}

// if(localStorage.cor1) {
//     div2.value = localStorage.cor1;
// }
// if(localStorage.cor1) {
//     div3.value = localStorage.cor2;
// }
// if(localStorage.cor1) {
//     div4.value = localStorage.cor3;
// }

// const salvaCores = function() {
//     let cor1 = div2.value;
//     let cor2 = div3.value;
//     let cor3 = div4.value;

//     localStorage.setItem('cor1', cor1);
//     localStorage.setItem('cor2', cor2);
//     localStorage.setItem('cor3', cor3);

// }

// document.onchange = salvaCores;

// Criando caixa pai.

const article = document.createElement('article');
article.id = 'pixel-board';
document.body.appendChild(article);

// Criando caixas filhas.

for (let i = 1; i <= 5; i += 1) {
    for (let i = 1; i <= 5; i += 1) {
        let divCores = document.createElement('div');
        article.appendChild(divCores);
        divCores.className = 'pixel';
    }
}

divPreta.classList.add('selected');

function capturaACor (param){
    let captura = event.target.param;
    
}
divPreta.addEventListener('click', capturaACor);

// Definindo cor preta como selecionada.

function corInicialPreta () {
    const corPreta = document.getElementsByClassName('selected')[0];
    return window.getComputedStyle(corPreta).backgroundColor;
}


