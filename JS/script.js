// -----------------------------
// Scroll suave entre secciones
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            const distancia = destino.offsetTop;
            window.scrollTo({
                top: distancia - 50,
                behavior: 'smooth'
            });
        }
    });
});

// -----------------------------
// Efecto de aparición al hacer scroll
// -----------------------------
function elementoVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 100;
}

const elementosAnimar = document.querySelectorAll(
    '#servicios .servicio, #galeria img'
);

window.addEventListener('scroll', () => {
    elementosAnimar.forEach(el => {
        if (elementoVisible(el)) {
            el.classList.add('visible');
        }
    });
});

// Ejecutar una vez al cargar
window.addEventListener('load', () => {
    elementosAnimar.forEach(el => {
        if (elementoVisible(el)) {
            el.classList.add('visible');
        }
    });

    // Año automático en footer
    document.getElementById('anio').textContent = new Date().getFullYear();
});
// -----------------------------
// Validación del formulario de contacto
// -----------------------------

const formulario = document.querySelector('#contacto form');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // evita que se recargue la página

    const nombre = formulario.nombre.value.trim();
    const email = formulario.email.value.trim();
    const mensaje = formulario.mensaje.value.trim();

    // Validar campos vacíos
    if (!nombre || !email || !mensaje) {
        alert('⚠️ Por favor, completá todos los campos antes de enviar.');
        return;
    }

    // Validar formato del email
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(email)) {
        alert('📧 Por favor, ingresá un correo electrónico válido.');
        return;
    }

    // Si todo está correcto
    alert('✅ ¡Gracias por tu mensaje! Te contactaremos pronto.');

    // Opcional: limpiar el formulario
    formulario.reset();
});

// -----------------------------
// Botón "Volver arriba"
// -----------------------------
const btnArriba = document.getElementById('btn-arriba');

// Mostrar u ocultar el botón según el scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        btnArriba.style.display = 'block';
        btnArriba.style.opacity = '1';
    } else {
        btnArriba.style.display = 'none';
        btnArriba.style.opacity = '0';
    }
});

// Desplazamiento suave hacia el inicio
btnArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
