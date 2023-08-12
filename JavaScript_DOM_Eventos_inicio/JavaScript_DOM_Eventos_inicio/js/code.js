function copiarCodigo() {
    // Selecciona el contenido del código
    const codigo = document.querySelector('code');
    const seleccion = window.getSelection();
    const rango = document.createRange();
    rango.selectNodeContents(codigo);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);

    // Copia el contenido seleccionado al portapapeles
    document.execCommand('copy');
    seleccion.removeAllRanges();

    // Puedes mostrar un mensaje de éxito si lo deseas
    alert('Código copiado al portapapeles');
  }