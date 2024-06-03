document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;

    const regexNombre = /^[a-zA-Z\s]*$/;
    const regexTelefono = /^\d{8}$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexNombre.test(nombre)) {
        alert('Por favor, introduce un nombre válido.');
        return false;
    }

    if (!regexTelefono.test(telefono)) {
        document.getElementById('errorTelefono').textContent = 'Por favor, introduce un número de teléfono válido de 8 dígitos.';
        return false;
    } else {
        document.getElementById('errorTelefono').textContent = '';
    }

    if (!regexCorreo.test(correo)) {
        document.getElementById('errorCorreo').textContent = 'Por favor, introduce una dirección de correo electrónico válida.';
        return false;
    } else {
        document.getElementById('errorCorreo').textContent = '';
    }

    document.getElementById('modalGracias').style.display = "block";
    return false;
});

document.getElementsByClassName('cerrar')[0].addEventListener('click', function() {
    document.getElementById('modalGracias').style.display = "none";
});


// Obtén todas las imágenes y los botones
const obras = document.getElementsByClassName('obra');
const botonesOcultar = document.getElementsByClassName('ocultar');

// Añade un evento de clic a cada imagen
for (let i = 0; i < obras.length; i++) {
    obras[i].addEventListener('click', function() {
        // Muestra un mensaje con más información
        alert('Más información sobre ' + this.alt);
    });

    // Añade un evento de clic a cada botón
    botonesOcultar[i].addEventListener('click', function() {
        // Oculta la imagen correspondiente
        this.previousElementSibling.style.display = "none";
    });
}

// Obtén todos los botones de información y los botones de cierre
const botonesInfo = document.getElementsByClassName('info');
const botonesCerrar = document.getElementsByClassName('cerrar');

// Añade un evento de clic a cada botón de información
for (let i = 0; i < botonesInfo.length; i++) {
    botonesInfo[i].addEventListener('click', function() {
        // Obtén el ID de la obra
        const obraId = this.previousElementSibling.alt.replace(' ', '');

        // Muestra el modal correspondiente
        document.getElementById('modal' + obraId).style.display = "block";
    });

    // Añade un evento de clic a cada botón de cierre
    botonesCerrar[i].addEventListener('click', function() {
        // Encuentra el modal padre y ocúltalo
        const modal = this.parentElement.parentElement;
        modal.style.display = "none";
    });
}