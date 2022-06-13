const lista1 =[ //lista a evaluar 
  15, 17, 14, 13, 12
];

//promedio 

function calcularPromedio(lista){
   // let sumaLista = 0;
  //  for (let i = 0; i<lista.length; i++){
  //      sumaLista = sumaLista + lista[i];
  //  }

let sumaLista = lista.reduce( //funcion "reduce" para sumar elemntos en los arrays (tambien se puede usar para resta,multiplicacion o division)
    function(valorAcumulado = 0,nuevoElemento){
    return valorAcumulado + nuevoElemento;
    });

const promedio = sumaLista = sumaLista / lista.length;
return promedio;
};

calcularPromedio(lista1);

//mediana 

function esPar(numero){ //funcion para saber si un numero es par o no
if (numero % 2 === 0){
    return true;
}
else {
    return false;
}
};

function compareNumbers(a, b) { //funcion de la propiedad sort() para ordenar los elementos de un array
    return a - b;
}

function calcularMediana (lista){
    var listaOrdenada = lista.sort(compareNumbers);
    const mitadListaOrdenada = parseInt(listaOrdenada.length / 2);
    let mediana;
    if (esPar(listaOrdenada.length)){
        numerosEnLaMitadDeLaLista = [listaOrdenada[(mitadListaOrdenada-1)], listaOrdenada[mitadListaOrdenada]];
        mediana = calcularPromedio(numerosEnLaMitadDeLaLista);
    }
    else{
        mediana = listaOrdenada[mitadListaOrdenada];
    }
    return mediana;
};

calcularMediana(lista1);


//Moda

function calcularModa(lista){
const listacount = {};
lista.map(
    function (elemento){
        if (listacount[elemento]){
            listacount[elemento] = listacount[elemento] + 1;
        }
        else{
        listacount[elemento] = 1;
        }
    }
);
const listaArray = Object.entries(listacount).sort( 
    function(valorAcumulado, nuevoValor){
        return valorAcumulado[1]-nuevoValor[1];
    });

const moda = listaArray [listaArray.length - 1];
return moda;
};

calcularModa(lista1);


//Media armonica

function calcularMediaArmonica(lista){
var divisor = 0;
for (var i = 0; i < lista.length;i++){
divisor = divisor + (1/lista[i]);
};
const mediaArmonica = lista.length/divisor;
return mediaArmonica;
};

calcularMediaArmonica(lista1);


