window.onload = () => {
  // Se agrega a una ClassList para ocultar unas secciones
  document.getElementById('cuenta').classList.add('ocultar')
  document.getElementById('descifrando').classList.add('ocultar')
  document.getElementById('ver').classList.add('ocultar')
  document.getElementById('oculto').classList.add('ocultar')
  document.getElementById('denuncias').classList.add('ocultar')

  // Presionar el boton CUENTA TU HISTORIA y te abre una nueva pantalla
  document.getElementById('b1').addEventListener('click', () => {
    document.getElementById('ingreso').style.display = 'none'
    document.getElementById('cuenta').style.display = 'block'
  })

  // Presionar el boton DESCIFRAR MENSAJE y te abre una nueva pantalla
  document.getElementById('b2').addEventListener('click', () => {
    document.getElementById('ingreso').style.display = 'none'
    document.getElementById('descifrando').style.display = 'block'
    document.getElementById('ver').style.display = 'block'
  })

  // Permitira cifrar el nombre y la historia
  document.getElementById('cifrar').addEventListener('click', () => {
    const numero = document.getElementById('num').value
    const nombre = document.getElementById('name').value
    const hist = document.getElementById('historia').value
    const mensaje = nombre + ': ' + hist
    if (numero === '' || nombre === '' || hist === '') {
      alert('Uno de los campos esta vacio')
    } else {
      document.getElementById('cifrado').innerHTML = window.cipher.encode(mensaje, numero)
      document.getElementById('denuncias').innerHTML += window.cipher.encode(mensaje, numero) + ' ' + numero + '<br>'
    }
  })

  // Ver mensajes

  document.getElementById('denuncia').addEventListener('click', () => {
    document.getElementById('denuncias').style.display = 'block'
    document.getElementById('denuncia').style.display = 'none'
    document.getElementById('oculto').style.display = 'block'
  })

  // Ocultar mensajes

  document.getElementById('oculto').addEventListener('click', () =>{
    document.getElementById('denuncias').style.display = 'none'
    document.getElementById('denuncia').style.display = 'block'
    document.getElementById('oculto').style.display = 'none'
  })
  // Permitira descifrar el mensaje
  document.getElementById('descifrar').addEventListener('click', () => {
    const clave = document.getElementById('clave').value
    const hist1 = document.getElementById('historia1').value
    if (clave === '' || hist1 === '') {
      alert('Uno de los campos esta vacio')
    } else {
      document.getElementById('descifrado').innerHTML = window.cipher.decode(hist1, clave)
    }
  })

  // Limpia 1
  document.getElementById('limpiar1').addEventListener('click', () => {
    document.getElementById('form1').reset()
    document.getElementById('cifrado').innerHTML = ''
  })

  // Limpia 2

  document.getElementById('limpiar2').addEventListener('click', () => {
    document.getElementById('form2').reset()
    document.getElementById('descifrado').innerHTML = ''
  })

  // Te lleva a la pagina de inicio
  document.getElementById('inicio1').addEventListener('click', () => {
    document.getElementById('ingreso').style.display = 'block'
    document.getElementById('cuenta').style.display = 'none'
    document.getElementById('form1').reset()
    document.getElementById('cifrado').innerHTML = ''
  })

  // Te lleva a la pagina de inicio
  document.getElementById('inicio2').addEventListener('click', () => {
    document.getElementById('ingreso').style.display = 'block'
    document.getElementById('descifrando').style.display = 'none'
    document.getElementById('form2').reset()
    document.getElementById('descifrado').innerHTML = ''
    document.getElementById('ver').style.display = 'none'
  })
}
