document.addEventListener('DOMContentLoaded', () => {
    const puzzle = document.getElementById('puzzle');
    const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let piezas = letras.slice(); // Copia las letras
    piezas.push(''); // Agregar pieza vacía para completar el rompecabezas

    // Mezclar letras
    piezas = piezas.sort(() => Math.random() - 0.5);

    piezas.forEach((letra, index) => {
        const div = document.createElement('div');
        div.classList.add('puzzle-piece');
        div.innerText = letra;
        div.dataset.index = index;
        div.addEventListener('click', moverPieza);
        puzzle.appendChild(div);
    });

    function moverPieza(e) {
        const pieza = e.target;
        const index = parseInt(pieza.dataset.index);
        const piezas = Array.from(puzzle.children);

        // Encuentra la pieza vacía
        const vacia = piezas.find(p => p.innerText === '');
        const vaciaIndex = parseInt(vacia.dataset.index);

        // Verifica si la pieza es adyacente a la vacía
        if (esAdyacente(index, vaciaIndex)) {
            // Intercambia las posiciones
            const temp = pieza.innerText;
            pieza.innerText = vacia.innerText;
            vacia.innerText = temp;
        }
    }

    function esAdyacente(index1, index2) {
        const diferencia = Math.abs(index1 - index2);
        return diferencia === 1 || diferencia === 5; // Adyacente vertical u horizontal
    }
});
