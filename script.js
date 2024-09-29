let numeroAzar = Math.floor(Math.random()*100) + 1
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')

function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un número valido entre 0 y 100';
        return;
    }else if (numeroIngresado === numeroAzar){
        mensaje.textContent = '¡Felicitaciones! ¡Has adivinado el número!';
        mensaje.style.color = 'green';
        numeroEntrada.disables = true;
    }else if (numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Más alto! El número es mayor al que elegiste';
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = '¡Más bajo! El número es menor al que elegiste';
        mensaje.style.color = 'red';
    }
}