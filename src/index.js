window.onload = () => {
document.getElementById("cuenta").classList.add("ocultar");
document.getElementById("descifrando").classList.add("ocultar");

document.getElementById("b1").addEventListener("click",function(){
        document.getElementById("ingreso").style.display="none";
    document.getElementById("cuenta").style.display="block";
})

document.getElementById("b2").addEventListener("click",function(){
    document.getElementById("ingreso").style.display="none";
    document.getElementById("descifrando").style.display="block";
})

document.getElementById("cifrar").addEventListener("click",function (){

    const numero=document.getElementById("num").value;
    const nombre=document.getElementById("name").value;
    const hist=document.getElementById("historia").value;
    const mensaje1=nombre+ " " + hist; 
 
    document.getElementById("cifrado").value=window.cipher.encode(mensaje1, numero);
})

document.getElementById("descifrar").addEventListener("click",function(){
    
    const clave=document.getElementById("clave").value;
    const hist1=document.getElementById("historia1").value; 
    
    document.getElementById("descifrado").value=window.cipher.decode(hist1,clave);
})

document.getElementById("inicio1").addEventListener("click",function(){
    document.getElementById("ingreso").style.display="block";
    document.getElementById("cuenta").style.display="none";
    document.getElementById("form1").reset();
    document.getElementById("cifrado").value="";
})

document.getElementById("inicio2").addEventListener("click",function(){
    document.getElementById("ingreso").style.display="block";
    document.getElementById("descifrando").style.display="none";
    document.getElementById("form2").reset();
    document.getElementById("descifrado").value="";
    
})
}
