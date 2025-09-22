//---------------------------//
//--|funcionalidad_usuario|--//
//---------------------------//
document.addEventListener("DOMContentLoaded", () => {
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
    const spanUsuario = document.getElementById("usuarioActivo");
    const iconoPerfil = document.getElementById("iconoPerfil");
    const menuPerfil = document.getElementById("menuPerfil");
    const cerrarSesionBtn = document.getElementById("cerrarSesion");
    if (usuarioActivo && usuarioActivo.usuario) {
        spanUsuario.textContent = usuarioActivo.usuario;
    } else {
        spanUsuario.textContent = "Invitado";
    }
    iconoPerfil.addEventListener("click", () => {
        menuPerfil.style.display = menuPerfil.style.display === "block" ? "none" : "block";
    });
    cerrarSesionBtn.addEventListener("click", () => {
        localStorage.removeItem("usuarioActivo");
        alert("Sesión cerrada");
        window.location.href = "../html/inicio_de_sesion.html";
    });
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".perfil-container")) {
            menuPerfil.style.display = "none";
        }
    });
});