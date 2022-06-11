//codigo del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area del cuadrado es: " + areaCuadrado + " cm2");

console.groupEnd();

//codigo del triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del Triangulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");
console.log("La altura del Triangulo mide: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del Triangulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;
console.log("El Area del Triangulo es: " + areaTriangulo + " cm2");

console.groupEnd();

//codigo del circulo

console.group("Circulo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI

console.log("El Radio del ciruclo es: " + radioCirculo + " cm");
console.log("El Diametro del circulo es : " + diametroCirculo + " cm");

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Circulo es: " + perimetroCirculo + " cm");

const areaCirculo = (radioCirculo * radioCirculo)*PI;
console.log("El Area del Circulo es: " + areaCirculo + " cm2");

console.groupEnd();