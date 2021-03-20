const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const movimientosRouter = require('./routes/productos');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(cors());

app.use(express.json()); 

app.use(express.urlencoded({extended:true})); 


app.use('/admin',movimientosRouter);



// static files
app.use(express.static(path.join(__dirname, 'views')));


app.listen(8080,()=>{
    console.log('escuchando en el puerto 8080');
})