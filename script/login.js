const usuario = document.getElementById('user');
const contraseña = document.getElementById('password');
const mensaje = document.getElementById('mensaje');

function entrar(event) {
    event.preventDefault();

    const usuarioInput = usuario.value;
    const contraseñaInput = contraseña.value;

    if (usuarioInput === 'pedroC007' && contraseñaInput === 'pedroCORTES7*'){
        window.location.href = '../pages/index.html';
        alert ('¡Bienvenido a Ambicom!');
    } else {
        mensaje.textContent = 'Usuario y contraseña invalidos, intente nuevamente';
    }
}

function registrarse() {
    window.location.href = '../pages/registro.html';
}