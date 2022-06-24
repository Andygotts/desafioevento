const form = document.getElementById("formulario");

const enviarFormulario = (event) => {
    event.preventDefault();
    console.log(event);
};

form.addEventListener("submit", enviarFormulario);
