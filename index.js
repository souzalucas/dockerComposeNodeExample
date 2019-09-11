const express = require('express');
const mysql = require('mysql');

const PORT = 3000
const HOST = '0.0.0.0';

const app = express();
const bodyParser = require('body-parser');
const connection = mysql.createConnection({
    host     : process.env.DATABASE_HOST || '127.0.0.1',
    port     : 3306,
    user     : 'root',
    password : 'root',
    database : 'loja'
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
    execSQLQuery('SELECT * FROM Clientes', res);
});

app.listen(PORT, HOST);

//listando os clientes
function execSQLQuery(sqlQry, res){

    connection.query(sqlQry, function(error, results, fields){
        if(error) {
            res.json(error);
        }
        else {
            res.json(results);
        }
        connection.end();
        console.log('executou!');
    });
}