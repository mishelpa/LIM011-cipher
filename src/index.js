window.onload = () => {
  // Se agrega a una ClassList para ocultar unas secciones
  document.getElementById('sec-contar-historia').classList.add('ocultar');
  document.getElementById('sec-descifrar-mensaje').classList.add('ocultar');
  document.getElementById('sec-ver-historia').classList.add('ocultar');
  document.getElementById('btn-ocultar-historia').classList.add('ocultar');
  document.getElementById('parrafo-historias-acumuladas').classList.add('ocultar');

  // Presionar el boton CUENTA TU HISTORIA y te abre una nueva pantalla
  document.getElementById('btn-contar-historia').addEventListener('click', () => {
    document.getElementById('sec-pantalla-inicio').style.display = 'none';
    document.getElementById('sec-contar-historia').style.display = 'block';
  });

  // Presionar el boton DESCIFRAR MENSAJE y te abre una nueva pantalla
  document.getElementById('btn-descifrar-mensaje').addEventListener('click', () => {
    document.getElementById('sec-pantalla-inicio').style.display = 'none';
    document.getElementById('sec-descifrar-mensaje').style.display = 'block';
    document.getElementById('sec-ver-historia').style.display = 'block';
  });

  // Permitira cifrar el nombre y la historia
  document.getElementById('btn-cifrar-contar-historia').addEventListener('click', () => {
    const textKeyEncode = document.getElementById('text-codigo-cifrar').value;
    const textName = document.getElementById('text-nombre-cifrar').value;
    const textEncode = document.getElementById('text-historia-cifrar').value;
    const mensaje = `${textName}: ${textEncode}`;
    if (textKeyEncode === '' || textName === '' || textEncode === '') {
      document.getElementById('completar-datos').innerHTML = 'Uno de los campos esta vacio';
    } else {
      document.getElementById('parrafo-mensaje-cifrado').innerHTML = window.cipher.encode(mensaje, textKeyEncode);
      document.getElementById('parrafo-historias-acumuladas').innerHTML += `${window.cipher.encode(mensaje, textKeyEncode)} ${textKeyEncode}<br>`;
      document.getElementById('completar-datos').innerHTML = '';
    }
  });

  // Ver mensajes

  document.getElementById('btn-mostrar-historia').addEventListener('click', () => {
    document.getElementById('parrafo-historias-acumuladas').style.display = 'block';
    document.getElementById('btn-mostrar-historia').style.display = 'none';
    document.getElementById('btn-ocultar-historia').style.display = 'block';
  });

  // Ocultar mensajes

  document.getElementById('btn-ocultar-historia').addEventListener('click', () => {
    document.getElementById('parrafo-historias-acumuladas').style.display = 'none';
    document.getElementById('btn-mostrar-historia').style.display = 'block';
    document.getElementById('btn-ocultar-historia').style.display = 'none';
  });
  // Permitira descifrar el mensaje
  document.getElementById('btn-descifrar-descifrar-mensaje').addEventListener('click', () => {
    const textKeyDecode = document.getElementById('text-codigo-descifrar').value;
    const textStoryDecode = document.getElementById('text-historia-descifrar').value;
    if (textKeyDecode === '' || 'textStoryDecode' === '') {
      document.getElementById('completar-datos').innerHTML = 'Uno de los campos esta vacio';
    } else {
      document.getElementById('parrafo-mensaje-descifrado').innerHTML = window.cipher.decode(textStoryDecode, textKeyDecode);
      document.getElementById('completar-datos').innerHTML = '';
    }
  });

  // Limpia 1
  document.getElementById('btn-limpiar-contar-historia').addEventListener('click', () => {
    document.getElementById('form-datos-contar-historia').reset();
    document.getElementById('parrafo-mensaje-cifrado').innerHTML = '';
    document.getElementById('completar-datos').innerHTML = '';
  });

  // Limpia 2

  document.getElementById('btn-limpiar-descifrar-mensaje').addEventListener('click', () => {
    document.getElementById('form-datos-descifrar-mensaje').reset();
    document.getElementById('parrafo-mensaje-descifrado').innerHTML = '';
    document.getElementById('completar-datos').innerHTML = '';
  });

  // Te lleva a la pagina de inicio
  document.getElementById('btn-volver-contar-historia').addEventListener('click', () => {
    document.getElementById('sec-pantallainicio').style.display = 'block';
    document.getElementById('sec-contar-historia').style.display = 'none';
    document.getElementById('form-datos-contar-historia').reset();
    document.getElementById('textEncode').innerHTML = '';
    document.getElementById('completar-datos').innerHTML = '';
  });

  // Te lleva a la pagina de inicio
  document.getElementById('btn-volver-descifrar-mensaje').addEventListener('click', () => {
    document.getElementById('sec-pantalla-inicio').style.display = 'block';
    document.getElementById('sec-descifrar-mensaje').style.display = 'none';
    document.getElementById('form-datos-descifrar-mensaje').reset();
    document.getElementById('parrafo-mensaje-descifrado').innerHTML = '';
    document.getElementById('sec-ver-historia').style.display = 'none';
    document.getElementById('completar-datos').innerHTML = '';
  });
};
