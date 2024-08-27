document.addEventListener('DOMContentLoaded', () => {
    const vocalesDiv = document.getElementById('vocales');
    const vocalesContainer = document.getElementById('vocales-container');
    const vocales = ['A', 'E', 'I', 'O', 'U'];
    const resultado = document.getElementById('resultado');
    let vocalesDesordenadas;

    function crearVocales() {
        vocalesDiv.innerHTML = '';
        vocalesContainer.innerHTML = '';
        vocalesDesordenadas = vocales.slice().sort(() => Math.random() - 0.5);

        vocalesDesordenadas.forEach(vocal => {
            const div = document.createElement('div');
            div.classList.add('vocal-desordenada');
            div.innerText = vocal;
            div.draggable = true;
            div.addEventListener('dragstart', dragStart);
            vocalesDiv.appendChild(div);
        });

        vocales.forEach(() => {
            const div = document.createElement('div');
            div.classList.add('vocal');
            div.addEventListener('dragover', dragOver);
            div.addEventListener('drop', drop);
            div.addEventListener('click', showDeleteButton);
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'X';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', removeLetter);
            div.appendChild(deleteButton);
            vocalesContainer.appendChild(div);
        });
    }

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.innerText);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const draggedVocal = e.dataTransfer.getData('text/plain');
        const target = e.target;

        if (target.classList.contains('vocal') && !target.classList.contains('delete-btn')) {
            if (target.innerText === '') {
                target.innerText = draggedVocal;
                e.dataTransfer.clearData();
            } else {
                // Cambiar posición si ya hay una vocal en el área de destino
                const temp = target.innerText;
                target.innerText = draggedVocal;
                const source = document.querySelector(`.vocal-desordenada:contains(${draggedVocal})`);
                if (source) source.innerText = temp;
            }
        } else if (target.classList.contains('vocal-desordenada')) {
            // Revertir a la posición original si se arrastra fuera del área de destino
            const source = document.querySelector(`.vocal-desordenada:contains(${target.innerText})`);
            if (source) source.innerText = target.innerText;
            target.innerText = '';
        }
    }

    function showDeleteButton(e) {
        if (e.target.classList.contains('vocal')) {
            e.target.classList.toggle('active');
        }
    }

    function removeLetter(e) {
        e.stopPropagation();
        const container = e.target.parentElement;
        container.innerText = '';
        container.classList.remove('active');
    }

    function verificar() {
        let correcto = true;
        const vocalesOrdenadas = vocalesContainer.querySelectorAll('.vocal');
        vocalesOrdenadas.forEach((div, index) => {
            if (div.innerText !== vocales[index]) {
                div.classList.add('incorrect');
                correcto = false;
            } else {
                div.classList.remove('incorrect');
                div.classList.add('correct');
            }
        });
        resultado.innerText = correcto ? '¡Perfecto!' : 'Corrige las vocales.';
    }

    function desordenar() {
        const vocalesDesordenadas = Array.from(document.querySelectorAll('#vocales .vocal-desordenada'));
        vocalesDesordenadas.forEach(vocalDiv => {
            const randomIndex = Math.floor(Math.random() * vocalesDesordenadas.length);
            const temp = vocalDiv.innerText;
            vocalDiv.innerText = vocalesDesordenadas[randomIndex].innerText;
            vocalesDesordenadas[randomIndex].innerText = temp;
        });
    }

    document.getElementById('desordenar').addEventListener('click', desordenar);
    document.getElementById('completar').addEventListener('click', verificar);

    crearVocales();
});
