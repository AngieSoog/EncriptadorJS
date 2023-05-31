function encriptar(){
    var frase = document.getElementById("areaTexto").value.toLowerCase();

    var areaTexto = frase.replace(/e/img, "enter");
    var areaTexto = areaTexto.replace(/o/img, "ober");
    var areaTexto = areaTexto.replace(/i/img, "imes");
    var areaTexto = areaTexto.replace(/a/img, "ai");
    var areaTexto = areaTexto.replace(/u/img,   "ufat");

    document.getElementById("textoDesencriptado").innerHTML = areaTexto;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function desencriptar(){
    var frase = document.getElementById("areaTexto").value.toLowerCase();

    var areaTexto = frase.replace(/enter/img, "e");
    var areaTexto = areaTexto.replace(/ober/img, "o");
    var areaTexto = areaTexto.replace(/imes/img, "i");
    var areaTexto = areaTexto.replace(/ai/img, "a");
    var areaTexto = areaTexto.replace(/ufat/img,   "u");

    document.getElementById("textoDesencriptado").innerHTML = areaTexto;
}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}