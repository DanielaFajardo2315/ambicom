const confirmInput = document.getElementById('confirm');

function validarContraseña (password) {
    const longitudMinima = /^.{8,}$/
    const tieneMayuscula = /[A-Z]/
    const tieneMinuscula = /[a-z]/
    const tieneNumero = /\d/
    const tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/

    if (!longitudMinima.test(password)) {
        return 'La contraseña debe tener al menos 8 caracteres';
    }
    if (!tieneMayuscula.test(password)) {
        return 'La contraseña debe tener al menos una letra mayúscula';
    }
    if (!tieneMinuscula.test(password)) {
        return 'La contraseña debe tener al menos una letra minúscula';
    }
    if (!tieneNumero.test(password)) {
        return 'La contraseña debe tener al menos un número';
    }
    if (!tieneEspecial.test(password)) {
        return 'La contraseña debe tener al menos un carácter especial';
    }
    
    return 'valido';
}

const passwordInput = document.getElementById('password');
const mensaje = document.getElementById('mensaje');

function validar(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const nameInput = name.value;
    const password = passwordInput.value;
    const confirm = confirmInput.value;
    const resultado = validarContraseña(password);

    if(resultado === 'valido' && password === confirm) {
        mensaje.textContent = `Bienvenido ${nameInput}, valide su acceso en el correo electrónico registrado`;
    } else if (resultado === 'valido' && password != confirm){
        mensaje.textContent = 'Las contraseñas deben coincidir'
    }
    else {
        mensaje.textContent = resultado;
    }
}

function volver() {
    window.location.href = '../pages/login.html';
}