const h1 = document.querySelector('h1');
const pid = document.getElementById('pid')

// MODIFICAR ATRIBUTOS DE UN ELEMENTO
h1.innerHTML = 'Patito';
h1.innerText = 'Patito <br> Feo';
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');
h1.classList.add('amarillo');

const value = document.querySelector('input');
value.value = '123'

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/media/platzi-isotipo@2x.png');

pid.append(img)

const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('calcular');
const pResult = document.getElementById('result');

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const sumainputs =  input1.value + input2.value;
    pResult.innerText = 'Resultado: ' + sumainputs;
}