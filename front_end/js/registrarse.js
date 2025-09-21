//-------------------------------//
//--|funcionalidad_registrarse|--//
//-------------------------------//

// Función para alternar visibilidad de contraseñas
function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    icon.addEventListener('click', () => {
        if (input.type === "password") {
            input.type = "text"; // Mostrar contraseña
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash"); // Cambiar icono
        } else {
            input.type = "password"; // Ocultar contraseña
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye"); // Cambiar icono de vuelta
        }
    });
}

// Activamos para los dos inputs de contraseña
togglePasswordVisibility('password', 'togglePassword');
togglePasswordVisibility('password2', 'togglePassword2');

//-------------------------------//
//--|validacion_registro|--//
//-------------------------------//
document.addEventListener("DOMContentLoaded", () => {
    const formBtn = document.querySelector(".btn");

    formBtn.addEventListener("click", (e) => {
        e.preventDefault(); // evitar refrescar la página

        // Obtener valores
        const usuario = document.getElementById("usuario").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const correo2 = document.getElementById("correo2").value.trim();
        const ciudad = document.getElementById("ciudad").value.trim();
        const fechaNacimiento = document.getElementById("fecha-nacimiento").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const password = document.getElementById("password").value.trim();
        const password2 = document.getElementById("password2").value.trim();
        const politicas = document.getElementById("politicas").checked;

        // Validaciones
        if (!usuario || !correo || !correo2 || !ciudad || !fechaNacimiento || !telefono || !password || !password2) {
            alert("⚠️ Todos los campos son obligatorios.");
            return;
        }

        if (correo !== correo2) {
            alert("⚠️ Los correos no coinciden.");
            return;
        }

        if (password !== password2) {
            alert("⚠️ Las contraseñas no coinciden.");
            return;
        }

        if (!/^[0-9]{10}$/.test(telefono)) {
            alert("⚠️ El número de teléfono debe tener 10 dígitos.");
            return;
        }

        if (!politicas) {
            alert("⚠️ Debes aceptar las políticas de uso de datos.");
            return;
        }

        // Guardar en localStorage (simulación de registro)
        const usuarioData = {
            usuario,
            correo,
            ciudad,
            fechaNacimiento,
            telefono,
            password
        };
        localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioData));

        alert("✅ Registro exitoso. Ya puedes iniciar sesión.");
        // Redirigir a login si quieres
        // window.location.href = "login.html";
    });
});
