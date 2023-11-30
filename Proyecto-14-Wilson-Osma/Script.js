const inputTarjeta = document.getElementById("inputTarjeta");
const inputFecha = document.getElementById("inputFecha");
const inputCW = document.getElementById("inputCW");

const mascaraNumero = "####-####-####-####";
const mascaraFecha = "##/##";
const mascaraCW = "###";

let tarjetaNumero = [];
let fechaNumero =[];
let cwNumero = [];

inputTarjeta.addEventListener("keydown", (e) => { 
    if(e.key === "Tab" ){
        return;
    }
    e.preventDefault();
    ingresoDatos(mascaraNumero,e.key,tarjetaNumero);
     inputTarjeta.value = tarjetaNumero.join ("");
});
inputFecha.addEventListener("keydown",(e) => { 
    if(e.key ==="Tab"){
        return;
    }
    e.preventDefault();
    ingresoDatos(mascaraFecha,e.key,fechaNumero);
    inputFecha.value=fechaNumero.join("");
});

inputCW.addEventListener("keydown",(e) => {
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();
    ingresoDatos(mascaraCW,e.key,cwNumero);
    inputCW.value = cwNumero.join("");

});

function ingresoDatos(mascara,key,arreglo){
    let numeros = ["0","1","2","3","4","5","6","7","8","9"];
    if(key === "Backspace"  && arreglo.length > 0){
        arreglo.pop();
        return;
    }
    if(numeros.includes(key) && arreglo.length + 1 <= mascara.length){
        if(mascara[arreglo.length]=== "-" || mascara[arreglo.length]=== "/"){
            arreglo.push(mascara[arreglo.length],key);
        }else{
            arreglo.push(key);
        }


    }

};