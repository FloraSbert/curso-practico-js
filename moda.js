function calcularmoda(lista) {
    const listaobj = {};
    lista.map(
        function(elemento) {
            if (listaobj[elemento]) {
                listaobj[elemento] += 1;
            } else {
                listaobj[elemento] = 1;
            }

        }
    );
    const listaArray = Object.entries(listaobj).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];
    return moda;
}