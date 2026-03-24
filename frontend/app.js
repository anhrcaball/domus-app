function registrarVenta(){

let cliente=document.getElementById("cliente").value
let producto=document.getElementById("producto").value
let precio=document.getElementById("precio").value

let mensaje=`DOMUS

Cliente: ${cliente}

Producto: ${producto}
Total: $${precio}

Gracias por tu compra.`

let url=`https://wa.me/?text=${encodeURIComponent(mensaje)}`

window.open(url)

}
