function calcularMediana(lista) {
    const listaOrdenada = lista.sort(function(primerElemeto, segundoElemento) {
        return primerElemeto - segundoElemento;
    });
    const mitadLista = parseInt(listaOrdenada.length / 2);
    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedioElemto1y2 = calcularMediaArimetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemto1y2
        return mediana;

    } else {
        mediana = listaOrdenada[mitadLista];
        return mediana
    }

}

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
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