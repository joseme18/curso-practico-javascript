const salariosCol = colombia.map(
function(personita){
    return personita.salary;
});

const salariosColSorted = salariosCol.sort(
function(salaryA, salaryB){
    return salaryA-salaryB;

});

function esPar (numero){
    if (numero % 2 === 0){
        return true;
    }
    else{
        return false;
    }
};
function calcularPromedio(lista){
  let sumaLista = lista.reduce( //funcion "reduce" para sumar elemntos en los arrays (tambien se puede usar para resta,multiplicacion o division)
     function(valorAcumulado = 0,nuevoElemento){
     return valorAcumulado + nuevoElemento;
     });
 
 const promedio = sumaLista = sumaLista / lista.length;
 return promedio;
 };

 //mediana general 

function calcularMediana(lista){
    var mitadlista = parseInt(lista.length / 2);
    var mediana = 0;

    if (esPar(lista.length)){
    var valoresEnLaMitadDeLalista = [(lista[mitadlista]),((lista[mitadlista - 1]))]
    mediana = calcularPromedio(valoresEnLaMitadDeLalista);
    }
    else{
    mediana = lista[mitadlista];
    }
    return mediana;
}

const medianaGeneral = calcularMediana(salariosColSorted);

//mediana top 10%

//Ejemplo de Splice: Funcion splice para cortar arrays, la posicion del parametro numero 1 indica donde se corta del array, la posicion del parametro numero 2 indica cuantas partes quieres sacar del array.

//const arrayEjemplo = [0,1,2,3,4,5,||6,7||,8,9,10];
//const ejemplo = arrayEjemplo.splice(5,2);

// la funcion splice saca del array los valores seleccionados con el parametro numero 2. y eso es lo que quedara guardado en el array nuevo "variable ejemplo"

//const arrayEjemplo = [0,1,2,3,4,5,8,9,10];
//const ejemplo = [6,7];

// fin del ejemplo 

const spliceParametro1 = (salariosColSorted.length * 90) / 100;
const spliceParametro2 = salariosColSorted.length - spliceParametro1;

const salariosColTop10 = salariosColSorted.splice(spliceParametro1,spliceParametro2); 

const medianaTop10 = calcularMediana(salariosColTop10);


