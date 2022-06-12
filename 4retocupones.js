var precioInicio = 120;

function Porcentaje(discount){
const precioNuevo = document.getElementById("resultadoPrecio");
const priceWithDiscount = parseInt(precioConDescuento(precioInicio,discount));
precioInicio = precioInicio - (precioInicio * discount/100);
return precioNuevo.innerHTML = "$ " + priceWithDiscount + ",00";
};

function precioConDescuento(precio, descuento){
    const porcentejePrecioConDescuento = 100 - descuento;
    const precioCD = (precio * porcentejePrecioConDescuento)/100;
    return precioCD;
};