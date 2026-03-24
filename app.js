function guardarCliente(){

let nombre=document.getElementById("nombre").value
let telefono=document.getElementById("telefono").value

alert("Cliente guardado")

}

function registrarVenta(){

let cliente=document.getElementById("cliente").value
let producto=document.getElementById("producto").value
let precio=document.getElementById("precio").value

let mensaje=`Hola ${cliente}

DOMUS

Compra registrada

Producto: ${producto}
Total: $${precio}`

let url=`https://wa.me/57?text=${encodeURIComponent(mensaje)}`

window.open(url)

}
