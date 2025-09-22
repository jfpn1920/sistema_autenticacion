//--------------------------------//
//--|funcionalidad_recuperacion|--//
//--------------------------------//
document.addEventListener("DOMContentLoaded", () => {
    const btnVer = document.getElementById("verDatos");
    const btnReset = document.getElementById("resetDatos");
    const resultado = document.getElementById("resultado");
    btnVer.addEventListener("click", () => {
        const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));
        if (usuarioGuardado) {
            resultado.innerHTML = `
                📧 Correo: <b>${usuarioGuardado.correo}</b><br>
                🔑 Contraseña: <b>${usuarioGuardado.password}</b>
            `;
        } else {
            resultado.innerHTML = "⚠️ No hay datos registrados.";
        }
    });
    btnReset.addEventListener("click", () => {
        localStorage.removeItem("usuarioRegistrado");
        localStorage.removeItem("recordarUsuario");
        resultado.innerHTML = "✅ Cuenta restablecida. Regístrate de nuevo.";
    });
});