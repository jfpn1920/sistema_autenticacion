//-------------------------------//
//--|funcionalidad_registrarse|--//
//-------------------------------//
function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    icon.addEventListener('click', () => {
        if (input.type === "password") {
            input.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye"); 
        }
    });
}
togglePasswordVisibility('password', 'togglePassword');
togglePasswordVisibility('password2', 'togglePassword2');
document.addEventListener("DOMContentLoaded", () => {
    const formBtn = document.querySelector(".btn");
    formBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const usuario = document.getElementById("usuario").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const correo2 = document.getElementById("correo2").value.trim();
        const ciudad = document.getElementById("ciudad").value.trim();
        const fechaNacimiento = document.getElementById("fecha-nacimiento").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const password = document.getElementById("password").value.trim();
        const password2 = document.getElementById("password2").value.trim();
        const politicas = document.getElementById("politicas").checked;
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
        const usuarioRegistrado = {
            usuario,
            correo,
            ciudad,
            fechaNacimiento,
            telefono,
            password
        };
        localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioRegistrado));
        alert("✅ Registro exitoso. Ya puedes iniciar sesión.");
        window.location.href = "inicio_de_sesion.html";
    });
    const mensajes = {
        google: "✅ Te has registrado con éxito con Google.",
        facebook: "✅ Te has registrado con éxito con Facebook.",
        twitter: "✅ Te has registrado con éxito con Twitter.",
        instagram: "✅ Te has registrado con éxito con Instagram."
    };
    const socialButtons = document.querySelectorAll(".social-login a");
    socialButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); 
            for (let red in mensajes) {
                if (btn.classList.contains(red)) {
                    alert(mensajes[red]);
                }
            }
        });
    });
});