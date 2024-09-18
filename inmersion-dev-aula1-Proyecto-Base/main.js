let cantidad = document.getElementById('cantidad'); // Tomar el elemento por ID
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

// Palabra reservada, es una constante, no cambia
const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXZabcdefghijklmnñopqrstuvwxz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    console.log('Cantidad digitada:', numeroDigitado);

    if (isNaN(numeroDigitado) || numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;  // Termina la función si la cantidad es inválida
    }

    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        // Generar un caracter aleatorio
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }
    console.log('Contraseña generada:', password);

    // Asignar la contraseña generada al campo de texto
    contrasena.value = password;

    // No es necesario convertir `contrasena` a cadena ya que `contrasena.value` ya es una cadena de texto
    // y `trim()` no es necesario aquí ya que no hay espacios en blanco en el valor generado

    // Verifica si tiene letras mayúsculas y números
    let tieneMayuscula = /[A-ZÑ]/.test(password);  // Incluye Ñ en el rango de mayúsculas
    let tieneNumeros = /\d/.test(password);       // Verifica si contiene números

    console.log("Contraseña generada:", password);
    console.log("Tiene mayúscula:", tieneMayuscula);
    console.log("Tiene números:", tieneNumeros);

    // Condicionales para validar la contraseña
    if (!tieneMayuscula || !tieneNumeros) {
        alert("La contraseña generada es débil");
    } else {
        alert("La contraseña es fuerte");
    }
}

function limpiar() {
    // Selecciona el textbox y limpia su valor
    contrasena.value = '';
}


// let texto = "texto";
// console.log(typeof cantidad);










