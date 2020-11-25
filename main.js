const boton1 = document.createElement('button');

document.getElementById('buttons-container').appendChild(boton1);

const boton2 = document.createElement('button');

document.getElementById('buttons-container').appendChild(boton2);

const newDiv = document.createElement('div');

document.getElementsByClassName('text-container')[0].appendChild(newDiv);

const contadorDiv = (div) => {
    let counter = 0;
    const text = div.textContent.replace('.', '');
    const texto = text.replace(',', '');
    const arrayPalabras = texto.split(" ");
    for (let i = 0; i < arrayPalabras.length; i++) {
        if (arrayPalabras[i].length > 10) {
            counter++;
        }
    }
    return counter;
}


const contar = () => {
    newSpan.textContent = contadorDiv(div);
}

boton1.setAtributte('onclick', 'contar()')

const nowSpan = document.createElement('span');

newDiv.appendChild(nowSpan);

/*
nowSpan.textContent='5';


contarpalabras = document.getElementsById("text-container").value;
*/
/*
numeroCaracteres = contar.length;

textoAreaDiv = contarpalabras.split(" ")

boton1.addEventListener('click', () => {
    window.alert('')
})
*/