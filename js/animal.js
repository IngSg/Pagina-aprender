document.addEventListener('DOMContentLoaded', () => {
    const animalImage = document.getElementById('animal-image');
    const opcionesDiv = document.getElementById('opciones');
    
    // Definir los animales y sus imágenes
    const animales = [
        { nombre: 'Perro', imagen: 'https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-hueso-mordedura-perro-pug-lindo-naturaleza-animal-icono-concepto-aislado-premium_138676-7370.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid' },
        { nombre: 'Gato', imagen: 'https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg' },
        { nombre: 'Elefante', imagen: 'https://st.depositphotos.com/2400497/2908/v/450/depositphotos_29088727-stock-illustration-cartoon-elephant.jpg' }
    ];
    
    // Seleccionar un animal al azar
    const animalSeleccionado = animales[Math.floor(Math.random() * animales.length)];
    
    // Establecer la imagen del animal seleccionado
    animalImage.src = animalSeleccionado.imagen;
    
    // Crear opciones de respuesta
    const opciones = animales.map(animal => animal.nombre);
    opciones.push(animalSeleccionado.nombre);
    opciones.sort(() => Math.random() - 0.5);
    
    opciones.forEach((opcion) => {
        const boton = document.createElement('button');
        boton.innerText = opcion;
        boton.addEventListener('click', () => verificarRespuesta(opcion, boton));
        opcionesDiv.appendChild(boton);
    });

    function verificarRespuesta(opcion, boton) {
        if (opcion === animalSeleccionado.nombre) {
            boton.classList.add('correcto');
        } else {
            boton.classList.add('incorrecto');
        }
    }
});
