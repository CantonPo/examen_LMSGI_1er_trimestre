console.log("hola mundo")

let contadorDeClics = 0;

const boton = document.getElementById('btn1');
const contadorElemento = document.getElementById('contador');

boton.addEventListener('click', function(){
    contadorDeClics++;
    contadorElemento.textContent = contadorDeClics + (contadorDeClics === 1 ? ' clic' : ' clics');
    
    if (contadorDeClics == 1){
        document.querySelector("#info").innerHTML = "Has pulsado el botón"
        
    
    }

    if (contadorDeClics == 2){
        document.querySelector("#info").innerHTML = "Has vuelto a pulsar el botón"
    
    }

    if (contadorDeClics == 3){
        document.querySelector("#info").innerHTML = "Has vuelto a pulsar el botón"
        document.querySelector("#info").style.background = "black";
        document.querySelector("#info").style.color = "white";
    
    }

    if (contadorDeClics == 4){
        contadorDeClics = 0;
        document.querySelector("#info").innerHTML = "Pulsa el botón"
        document.querySelector("#info").style.background = "none";
        document.querySelector("#info").style.color = "black";
    }
});


    
  

    
  

 



