const express = require("express")
const app = express()

app.use(express.json())

let clientes=[]
let productos=[]
let ventas=[]
let pagos=[]

app.get("/clientes",(req,res)=>{
res.json(clientes)
})

app.post("/clientes",(req,res)=>{
clientes.push(req.body)
res.json({mensaje:"cliente creado"})
})

app.post("/ventas",(req,res)=>{
ventas.push(req.body)
res.json({mensaje:"venta registrada"})
})

app.post("/pagos",(req,res)=>{
pagos.push(req.body)
res.json({mensaje:"pago registrado"})
})

app.listen(3000,()=>{
console.log("DOMUS funcionando")
})
