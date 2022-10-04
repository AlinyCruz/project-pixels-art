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

const buttonAleatorio = document.getElementById('button-random-color');

buttonAleatorio.addEventListener('click', coresAleatorias);

function coresAleatorias() {
    let color1 = Math.floor(Math.random() * 2000);
    let color2 = Math.floor(Math.random() * 3000);
    let color3 = Math.floor(Math.random() * 4000);
    
    div2.style.backgroundColor = `#${color1}`;
    div3.style.backgroundColor = `#${color2}`;
    div4.style.backgroundColor = `#${color3}`;
}