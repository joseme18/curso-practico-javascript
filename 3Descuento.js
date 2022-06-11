
function precioConDescuento(precio, descuento){
    const porcentejePrecioConDescuento = 100 - descuento;
    const precioCD = (precio * porcentejePrecioConDescuento)/100;
    return precioCD;
};

function priceDiscount(){
const inputPrice = document.getElementById("inputPrice");
const valueP = inputPrice.value;
const inputDiscount = document.getElementById("inputDiscount");
const valueD = inputDiscount.value;
const priceWithDiscount = precioConDescuento(valueP, valueD);
const resultado = document.getElementById("resultado");
return resultado.innerHTML = "Lo que debe pagar por el producto es:<strong> $" + priceWithDiscount + " </strong><br> Gracias por su visita";
};