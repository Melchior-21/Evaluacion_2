const express=require('express');
const app= express();
const rutas = require('./routes/index.routes')
const morgan = require('morgan')
app.use(morgan("dev"))

app.use(express.urlencoded({ extended: false }));
app.listen(3000, ()=>{ console.log('Escuchando en el puerto 3000')})
app.use(express.json());

app.use(rutas)

