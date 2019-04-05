//Instancias necessarias
const express = require('express'); //chamada do Express
const app = express(); //instanciando o Express
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// <--- Configs conexão mongo --->
const url = 'mongodb+srv://adm:adm@clusterapi-gtb9m.mongodb.net/test?retryWrites=true'
const options ={reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true};
// <--- Fim --->

mongoose.connect(url,options);
mongoose.set('useCreateIndex',true);

mongoose.connection.on('error',(err)=>{
    console.log('Erro na conexão com o banco de dados:' + err);
}); //função para erros na conexão

mongoose.connection.on('disconnect',()=> {
    console.log('Aplicação desconectada do banco de dados!');
}); //função de alerta caso desconecte do DB

mongoose.connection.on('connected',()=>{
    console.log('Aplicação conectada ao banco de dados');
});

//BODY PARSER, transforma em JSON
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//FIM configs padrão BODY PARSER

app.listen(27017);//listening a porta 3000