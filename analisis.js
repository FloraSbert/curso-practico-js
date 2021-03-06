// Helpers o Utils :son funciones que  no son parte de la logica de negocio pero las necesitamos para nustros calculos 
function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaArimetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calculadora mediana 
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaArimetica([personaMitad1, personaMitad2]);
        return mediana


    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }

}

// mediana General
const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;

    }
);

const salariosColSorted = salariosCol.sort(
    function(sA, sB) {
        return sA - sB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});