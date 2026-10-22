const boton=document.getElementById("btngenerar");
boton.addEventListener("click", generarqr)
function generarqr(){
    const texto=document.getElementById("textoinput").value
    const contenedorqr=document.getElementById("codigoqr");
    if(!texto.trim()){
        alert("Porfavor, teclea un texto una direccion url.")
        return;
    }
    contenedorqr.innerHTML="";
    new QRCode(contenedorqr,{
        text:texto,
        width:200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel:QRCode.CorrectLevel.H
    });
}