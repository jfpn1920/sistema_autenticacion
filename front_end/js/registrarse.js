//-------------------------------//
//--|funcionalidad_registrarse|--//
//-------------------------------//
function togglePasswordVisibility(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    icon.addEventListener('click', () => {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        icon.classList.toggle('fa-eye-slash');
    });
}
togglePasswordVisibility('password', 'togglePassword');
togglePasswordVisibility('password2', 'togglePassword2');