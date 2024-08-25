function enviarDatos() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const pais = document.getElementById('pais').value;
  
    const datosFormulario = {
      nombre_completo: nombre,
      email: email,
      pais: pais,
      mensaje: mensaje
    };
  
    console.log(datosFormulario);
  }