function saludar() {
    const nombre = document.getElementById('nombre').value.trim();
    const mensaje = document.getElementById('mensaje');
    const botones = document.getElementById('botones');

    // Limpiar mensajes anteriores
    mensaje.innerHTML = '';
    botones.innerHTML = '';

    // Validar el nombre ingresado
    if (nombre === 'Carlos Jose' || nombre === 'Estefania' || nombre === 'Sara') {
        mensaje.innerHTML = `¡Hola, ${nombre}!`;

        // Crear botones para cada juego
        if (nombre === 'Carlos Jose') {
            botones.innerHTML = `
                <button onclick="location.href='abecedario.html'">Aprende el ABCDario</button>
                <button onclick="location.href='sumas.html'">Botón Sumás</button>
                <button onclick="location.href='animal.html'">Adivina qué animal es</button>
                <button onclick="location.href='vocales.html'">Las Vocales</button>
            `;
        } else if (nombre === 'Estefania') {
            botones.innerHTML = `
                <button onclick="location.href='matematicas.html'">Matemáticas</button>
                <button onclick="location.href='ingles.html'">Inglés</button>
                <button onclick="location.href='castellano.html'">Castellano</button>
                <button onclick="location.href='ciencias.html'">Ciencias Naturales</button>
            `;
        } else if (nombre === 'Sara') {
            // Puedes agregar botones para Sara aquí si los hay
        }
    } else {
        mensaje.innerHTML = 'Nombre no reconocido. Por favor, ingresa un nombre válido.';
    }
}
