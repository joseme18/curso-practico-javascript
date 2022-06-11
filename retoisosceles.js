
function alturaIsosceles(ladoT1,ladoT2,baseT){
    if (ladoT1 == ladoT2 && ladoT1 != baseT){
        const altura = Math.sqrt((ladoT1*ladoT1)-((baseT/2)*(baseT/2)));
        return console.log("La altura de tu triangulo Isosceles es: " + altura + " cm");
    }
    else {
        return console.log("Lo siento, las medidas que estas indicando no pertenecen a un triangulo Isosceles");
    }
 };
 
 alturaIsosceles(3, 3, 2);