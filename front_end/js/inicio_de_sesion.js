//------------------------------------//
//--|funcionalidad_inicio_de_sesion|--//
//------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    togglePassword.addEventListener('click', () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });
    const btnLogin = document.querySelector(".btn");
    const inputCorreo = document.getElementById("correo");
    const inputPassword = document.getElementById("password");
    const checkboxRecordar = document.querySelector(".options input[type='checkbox']");
    const recordarDatos = JSON.parse(localStorage.getItem("recordarUsuario"));
    if (recordarDatos) {
        inputCorreo.value = recordarDatos.correo || "";
        inputPassword.value = recordarDatos.password || "";
        checkboxRecordar.checked = true;
    }
    btnLogin.addEventListener("click", (e) => {
        e.preventDefault();
        const correoIngresado = inputCorreo.value.trim();
        const passwordIngresado = inputPassword.value.trim();
        if (!correoIngresado || !passwordIngresado) {
            alert("⚠️ Debes ingresar tu correo y contraseña.");
            return;
        }
        const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));
        if (!usuarioGuardado) {
            alert("⚠️ No hay usuarios registrados. Por favor regístrate primero.");
            return;
        }
        if (usuarioGuardado.correo === correoIngresado && usuarioGuardado.password === passwordIngresado) {
            alert("✅ Inicio de sesión exitoso.");
            if (checkboxRecordar && checkboxRecordar.checked) {
                localStorage.setItem("recordarUsuario", JSON.stringify({
                    correo: correoIngresado,
                    password: passwordIngresado
                }));
            } else {
                localStorage.removeItem("recordarUsuario");
            }
            localStorage.setItem("usuarioActivo", JSON.stringify({
                usuario: usuarioGuardado.usuario,
                correo: usuarioGuardado.correo
            }));
            window.location.href = "pagina_web_demostracion.html";
        } else {
            alert("❌ Correo o contraseña incorrectos.");
        }
    });
    const socialButtons = document.querySelectorAll(".social-login a");
    socialButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (btn.classList.contains("google")) {
                alert("✅ Has iniciado sesión exitosamente con Google.");
            } else if (btn.classList.contains("facebook")) {
                alert("✅ Has iniciado sesión exitosamente con Facebook.");
            } else if (btn.classList.contains("twitter")) {
                alert("✅ Has iniciado sesión exitosamente con Twitter.");
            } else if (btn.classList.contains("instagram")) {
                alert("✅ Has iniciado sesión exitosamente con Instagram.");
            }
        });
    });
});