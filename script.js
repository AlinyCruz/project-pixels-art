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
// Adicionando classe para cor preta.
divPreta.classList.add('selected');

// Definindo cor preta como selecionada.

function corInicialPreta() {
    const corPreta = document.getElementsByClassName('selected')[0];
    return window.getComputedStyle(corPreta).backgroundColor;
}

// Retirando e colocando classe selected.
function selected() {
    const cores = document.querySelectorAll('.color');
    for (cor of cores) {
        cor.addEventListener('click', function (event) {
            const selecao = document.getElementsByClassName('selected')[0];
            selecao.classList.remove('selected');
            event.target.classList.add('selected');
        });
    }
}
selected();

// Pintando a paleta.
function pintando() {
    const pixels = document.querySelectorAll('.pixel');
    for (pi of pixels) {
        pi.addEventListener('click', function (event) {
            const selecao2 = document.querySelector('.selected');
            event.target.style.backgroundColor = selecao2.style.backgroundColor;
        });
    }
}
pintando();

// Adicionando evento no botão clicar.
function limpando() {
    const botaoLimpar = document.querySelector('#clear-board');
    botaoLimpar.addEventListener('click', function (){
        const pixels = document.querySelectorAll('.pixel');
        for (let pix = 0; pix < pixels.length; pix += 1) {
            pixels[pix].style.backgroundColor = 'white';
        }
    })
}
limpando();
