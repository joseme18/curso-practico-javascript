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