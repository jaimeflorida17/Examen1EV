const boton1 = document.createElement('button');

document.getElementById('buttons-container').appendChild(boton1);

const boton2 = document.createElement('button');

document.getElementById('buttons-container').appendChild(boton2);

const newDiv = document.createElement('div');

document.getElementsByClassName('text-container')[0].appendChild(newDiv);

const nowSpan = document.createElement('span');

document.getElementsByTagName('div')[0].appendChild(nowSpan);

nowSpan.textContent='5';


contarpalabras = document.getElementsById("text-container").value;

numeroCaracteres = contar.length;

textoAreaDiv = contarpalabras.split(" ")

boton1.addEventListener('click', () => {
    window.alert('')
})