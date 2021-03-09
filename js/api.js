function comenzar(){
    var nombre = document.getElementById("name")
    var apellido= document.getElementById("last_name")
    nombre.addEventListener("input",validar,false)
    apellido.addEventListener("input",validar,false)
    validar()

}
function validar(){
    if(nombre.value=="" && apellido.value==""){
        nombre.setCustomValidity("Intoduce nombre o apellido")
        nombre.style.background="FFDDDD"
        apellido.style.background="FFDDDD"
    }
    else{
        nombre.setCustomValidity("")
        nombre.style.background="FFFFFF"
        apellido.style.background="FFFFFF"
    }
}
window.addEventListener("load",comenzar,false)