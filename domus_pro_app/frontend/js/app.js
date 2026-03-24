
const ctx=document.getElementById('salesChart');

new Chart(ctx,{
type:'bar',
data:{
labels:['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
datasets:[{
label:'Ventas',
data:[120,190,300,250,220,400]
}]
}
});

fetch("http://localhost:3000/clients")
.then(r=>r.json())
.then(data=>{
const list=document.getElementById("debtList");
data.filter(c=>c.balance>0).forEach(c=>{
const li=document.createElement("li");
li.textContent=c.name+" debe $"+c.balance;
list.appendChild(li);
});
});
