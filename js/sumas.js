document.addEventListener('DOMContentLoaded', () => {
    const sumaContainer = document.getElementById('suma-container');

    function generarSuma() {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        const respuestaCorrecta = num1 + num2;

        const opciones = [respuestaCorrecta];
        while (opciones.length < 3) {
            const opcion = Math.floor(Math.random() * 20);
            if (!opciones.includes(opcion)) {
                opciones.push(opcion);
            }
        }

        opciones.sort(() => Math.random() - 0.5);

        sumaContainer.innerHTML = `
            <p>${num1} + ${num2} = ?</p>
            ${opciones.map(opcion => `<button onclick="verificarRespuesta(${opcion}, ${respuestaCorrecta}, this)">${opcion}</button>`).join('')}
        `;
    }

    function verificarRespuesta(opcion, respuestaCorrecta, boton) {
        if (opcion === respuestaCorrecta) {
            boton.classList.add('correcto');
        } else {
            boton.classList.add('incorrecto');
        }
    }

    generarSuma();
});
