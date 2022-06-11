//codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado (ladoC){
 return ladoC * 4;
};

function areaCuadrado (ladoC){
    return ladoC * ladoC;
};

console.groupEnd();

//codigo del triangulo
console.group("Triangulo");

function perimetroTriangulo(ladoT1,ladoT2,baseT){
   return ladoT1 + ladoT2 + baseT;
};

function areaTriangulo (h,baseT){
    return (h * baseT) / 2;
};

console.groupEnd();

//codigo del circulo

console.group("Circulo");

const PI = Math.PI

function diametro(r){
    return r * 2;
};

function perimetroCirculo(r){
   const d = diametro(r);
    return d * PI;
};

function areaCirculo(r){
    return (r * r)*PI;
};
console.groupEnd();

// Interacciones con HTML

//Cuadrado

function calcularPerimetroCuadrado(){
const input = document.getElementById("inputCuadrado");
const value = parseInt(input.value);
const perimetro = perimetroCuadrado (value);
const resultadoC = document.getElementById("resultadoC");
return resultadoC.innerHTML = "El Perimetro de tu Cuadrado es: " + perimetro + " cm";
};

function calcularAreaCuadrado(){
const input = document.getElementById("inputCuadrado");
const value = parseInt(input.value);
const area = areaCuadrado (value);
const resultadoC = document.getElementById("resultadoC");
return resultadoC.innerHTML = "El Area de tu Cuadrado es: " + area + " cm2";
};

//Triangulo

function calcularPerimetroTriangulo(){
const inputT1 = document.getElementById("inputT1");
const valueT1 = parseInt(inputT1.value);
const inputT2 = document.getElementById("inputT2");
const valueT2 = parseInt(inputT2.value);
const inputTbase = document.getElementById("inputTbase");
const valueTbase = parseInt(inputTbase.value);
const perimetro = perimetroTriangulo(valueT1,valueT2,valueTbase);
const resultadoT = document.getElementById("resultadoT");
return resultadoT.innerHTML = "El Perimetro de tu Triangulo es: " + perimetro + " cm";
};

function calcularAreaTriangulo(){
const inputTbase = document.getElementById("inputTbase");
const valueTbase = parseInt(inputTbase.value);
const inputTaltura = document.getElementById("inputTaltura");
const valueTaltura = parseInt(inputTaltura.value);
const area = areaTriangulo(valueTaltura,valueTbase);
const resultadoT = document.getElementById("resultadoT");
return resultadoT.innerHTML = "El Area de tu Triangulo es: " + area + " cm2";
};

//Circulo

function calcularPerimetroCirculo(){
const input = document.getElementById("inputCirculo");
const value = parseInt(input.value);
const perimetro = perimetroCirculo(value);
const resultadoCi = document.getElementById("resultadoCi");
return resultadoCi.innerHTML = "El Perimetro de tu Circulo es: " + perimetro + " cm";
};
    
function calcularAreaCirculo(){
const input = document.getElementById("inputCirculo");
const value = parseInt(input.value);
const area = areaCirculo(value);
const resultadoCi = document.getElementById("resultadoCi");
return resultadoCi.innerHTML = "El Area de tu Circulo es: " + area + " cm2";
};
    