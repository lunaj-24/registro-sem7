function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// Del documento, se toma el elemento con id=formlario-registro y se le agrega el evento "click" lo siguiente:
document.getElementById('formulario-registro').addEventListener('submit', (event) => { 
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password1').value;
    const repeatPassword = document.getElementById('password2').value;
    const termsAccepted = document.getElementById('terminos').checked;

    if (!nombre || !apellido || !email || !password || !repeatPassword || !termsAccepted) {
        showAlertError();
    } else if (password.length < 6) {
        showAlertError();
    } else if (password !== repeatPassword) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});

