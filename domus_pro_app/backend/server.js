
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./domus.db');

db.serialize(()=>{
  db.run(`CREATE TABLE IF NOT EXISTS clients(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone TEXT,
    balance REAL DEFAULT 0
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS products(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    stock INTEGER
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS movements(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_id INTEGER,
    type TEXT,
    description TEXT,
    value REAL,
    date TEXT
  )`);
});

app.get("/clients",(req,res)=>{
  db.all("SELECT * FROM clients",(e,r)=>res.json(r));
});

app.post("/clients",(req,res)=>{
  const {name,phone}=req.body;
  db.run("INSERT INTO clients(name,phone) VALUES(?,?)",[name,phone],function(){
    res.json({id:this.lastID});
  });
});

app.get("/products",(req,res)=>{
  db.all("SELECT * FROM products",(e,r)=>res.json(r));
});

app.post("/products",(req,res)=>{
  const {name,price,stock}=req.body;
  db.run("INSERT INTO products(name,price,stock) VALUES(?,?,?)",[name,price,stock],function(){
    res.json({id:this.lastID});
  });
});

app.listen(3000,()=>console.log("DOMUS PRO running on port 3000"));
