const mysql = require ('mysql');
const express = require ('express');
const bodyparser = require('body-parser');
const path = require('path');
var multer = require('multer');

//CREAMOS LA INSTANCIA EXPRESS
var app = express();
var upload = multer();

// PARA LEER JSON FACILITA LA VIDA CON JSON
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({ extended: true })); 
app.use(upload.array()); 

// CONEXIÓN CON LA BASE DE DATOS
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyectoiaw',
    multipleStatements: true
    
});

// ESTO ES PARA SI HAY UN ERROR EN LA CONEXIÓN CON LA BASE DE DATOS
// QUE SAQUE UN MENSAJE
mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Conexion bbdd correcta...');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });

//PUERTO DE ESTA APLICACIÓN
    const port = process.env.PORT || 8181;

// CONECTAR, CONFIGURAR EL PUERTO DEL SERVIDOR.
app.listen(port, () => console.log(`Listening on port ${port}..`));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });



