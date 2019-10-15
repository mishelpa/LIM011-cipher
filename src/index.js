window.onload = () => {
  // Se agrega a una ClassList para ocultar unas secciones
  document.getElementById('cuenta').classList.add('ocultar')
  document.getElementById('descifrando').classList.add('ocultar')
  document.getElementById('allStory').classList.add('ocultar')
  document.getElementById('hideAllStory').classList.add('ocultar')
  document.getElementById('textAllStory').classList.add('ocultar')

  // Presionar el boton CUENTA TU HISTORIA y te abre una nueva pantalla
  document.getElementById('bContar').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none'
    document.getElementById('cuenta').style.display = 'block'
  })

  // Presionar el boton DESCIFRAR MENSAJE y te abre una nueva pantalla
  document.getElementById('bDescifrar').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none'
    document.getElementById('descifrando').style.display = 'block'
    document.getElementById('allStory').style.display = 'block'
  })

  // Permitira cifrar el nombre y la historia
  document.getElementById('cifrarCuenta').addEventListener('click', () => {
    const textKeyCuenta = document.getElementById('textKeyCuenta').value
    const textName = document.getElementById('textName').value
    const textStory = document.getElementById('textStory').value
    const mensaje = textName + ': ' + textStory
    if (textKeyCuenta === '' || textName === '' || textStory === '') {
      document.getElementById('incomplete').innerHTML = 'Uno de los campos esta vacio'
    } else {
      document.getElementById('textEncode').innerHTML = window.cipher.encode(mensaje, textKeyCuenta)
      document.getElementById('textAllStory').innerHTML += window.cipher.encode(mensaje, textKeyCuenta) + ' ' + textKeyCuenta + '<br>'
      document.getElementById('incomplete').innerHTML = ''
    }
  })

  // Ver mensajes

  document.getElementById('seeAllStory').addEventListener('click', () => {
    document.getElementById('textAllStory').style.display = 'block'
    document.getElementById('seeAllStory').style.display = 'none'
    document.getElementById('hideAllStory').style.display = 'block'
  })

  // Ocultar mensajes

  document.getElementById('hideAllStory').addEventListener('click', () =>{
    document.getElementById('textAllStory').style.display = 'none'
    document.getElementById('seeAllStory').style.display = 'block'
    document.getElementById('hideAllStory').style.display = 'none'
  })
  // Permitira descifrar el mensaje
  document.getElementById('descifrarDescifrando').addEventListener('click', () => {
    const textKeyDescifrando = document.getElementById('textKeyDescifrando').value
    const textStoryDescifrando = document.getElementById('textStoryDescifrando').value
    if (textKeyDescifrando === '' || 'textStoryDescifrando' === '') {
      document.getElementById('incomplete').innerHTML = 'Uno de los campos esta vacio'
    } else {
      document.getElementById('textDecode').innerHTML = window.cipher.decode(textStoryDescifrando, textKeyDescifrando)
      document.getElementById('incomplete').innerHTML = ''
    }
  })

  // Limpia 1
  document.getElementById('cleanCuenta').addEventListener('click', () => {
    document.getElementById('formCuenta').reset()
    document.getElementById('textEncode').innerHTML = ''
    document.getElementById('incomplete').innerHTML = ''
  })

  // Limpia 2

  document.getElementById('cleanDescifrando').addEventListener('click', () => {
    document.getElementById('formDescifrando').reset()
    document.getElementById('textDecode').innerHTML = ''
    document.getElementById('incomplete').innerHTML = ''
  })

  // Te lleva a la pagina de inicio
  document.getElementById('startCuenta').addEventListener('click', () => {
    document.getElementById('start').style.display = 'block'
    document.getElementById('cuenta').style.display = 'none'
    document.getElementById('formCuenta').reset()
    document.getElementById('textEncode').innerHTML = ''
    document.getElementById('incomplete').innerHTML = ''
  })

  // Te lleva a la pagina de inicio
  document.getElementById('startDescifrando').addEventListener('click', () => {
    document.getElementById('start').style.display = 'block'
    document.getElementById('descifrando').style.display = 'none'
    document.getElementById('formDescifrando').reset()
    document.getElementById('textDecode').innerHTML = ''
    document.getElementById('allStory').style.display = 'none'
    document.getElementById('incomplete').innerHTML = ''
  })
}
