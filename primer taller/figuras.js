console.group("cuadrados")


function perimetroCuadrado(lado) {
    return lado * 4;
}



function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


console.group("Circulos")

function radioCirculo(radio) {
    return radio;
}

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1Triangulo");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputLado2Triangulo");
    const value2 = Number(input2.value);
    const inputbase = document.getElementById("inputBaseTriangulo");
    const valueBase = Number(inputbase.value);

    const perimetro = perimetroTriangulo(value1, value2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputBaseTriangulo");
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("inputAlturaTriangulo");
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputRadioCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputRadioCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    alert(area)

}