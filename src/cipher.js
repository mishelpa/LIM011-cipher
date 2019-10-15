window.cipher = {
    // Acá escribe tu código.
    encode: (string, offset) => {
        let mensajeCifrado = '';
        let nuevoAscii = '';
        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                nuevoAscii = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
                mensajeCifrado += String.fromCharCode(nuevoAscii);
            } else {
                if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    nuevoAscii = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
                    mensajeCifrado += String.fromCharCode(nuevoAscii);
                } else {
                    mensajeCifrado += string[i];
                }
            }
        }
        return mensajeCifrado;
    },
    decode: (string, offset) => {
        let mensajeDescifrado = '';
        let nuevoAscii1 = '';
        for (let i = 0; i < string.length; i++) {
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                nuevoAscii1 = (string.charCodeAt(i) - 90 - parseInt(offset)) % 26 + 90;
                mensajeDescifrado += String.fromCharCode(nuevoAscii1);
            } else {
                if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    nuevoAscii1 = (string.charCodeAt(i) - 122 - parseInt(offset)) % 26 + 122;
                    mensajeDescifrado += String.fromCharCode(nuevoAscii1);
                } else {
                    mensajeDescifrado += string[i];
                }
            }
        }
        return mensajeDescifrado;
    }
};
