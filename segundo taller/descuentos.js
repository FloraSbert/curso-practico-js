function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const CouponValue = inputCoupon.value;

    const resultP = document.getElementById("resultP");

    let descuento;
    let precioConDescuento;

    switch (true) {
        case CouponValue === "Lana_del_Rey":
            descuento = 10;
            precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
            resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
            break;
        case CouponValue === "One_Direction":
            descuento = 15;
            precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
            resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
            break;
        case CouponValue === "Los_Palmeras":
            descuento = 5;
            precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
            resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
            break;
        case CouponValue === "MAX":
            descuento = 50;
            precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
            resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
            break;
        case CouponValue === "Camilla_Cabello":
            descuento = 45;
            precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
            resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
            break;
        case CouponValue === "Suga_Mi_Amor":
            descuento = 75;
            precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
            resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
            break;
        default:
            resultP.innerText = "el cupón ingresado no es valido"

    }
}