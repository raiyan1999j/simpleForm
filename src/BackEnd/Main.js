const express = require('express');
const app = express();
const mysql= require('mysql');
const cors = require('cors');
const nodemailer=require('nodemailer')

app.use(express.json());
app.use(cors());

// ================
// mysql-server
// ================

let connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'raiyanKhan@317',
    database:'bravo'
})

// ================
// create-user
// ================
app.post('/verify/:num',(req,res)=>{
    let number = req.params.num;
    let val = req.body;

    let from = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        service:'gmail',
        auth:{
            type:'PLAIN',
            user:'boomboomraiyan@gmail.com',
            pass:'ltbxtdfzpzlwyktv'
        }
    });

    let customer= {
        from:'boomboomraiyan@gmail.com',
        to:`${val.email}`,
        subject:'verification number',
        text:`${number}`
    };

    from.sendMail(customer,(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log(result.response)
        }
    })
})
// ================
// verify-user
// ================
app.post('/verifyServer',(req,res)=>{
    let val = req.body;
    let sql = `insert into userList (userName,pass,mail) values ("${val.name}","${val.pass}","${val.mail}")`;

    connect.query(sql,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(result);
        }
    })
})

// ================
// login-user
// ================
app.get('/logInInfo',(req,res)=>{
    let sql = 'select * from userList';

    connect.query(sql,(error,result)=>{
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
})

// ================
// submit-data
// ================

app.post('/sendData/:refId',(req,res)=>{
    const val = req.body;
    const idNumber= Number(req.params.refId);
    const sql = `insert into orders (user,country,opinion,gmail,personId) values ("${val.user}","${val.country}","${val.opinion}","${val.gmail}","${idNumber}")`;

    connect.query(sql,(error,result)=>{
        if(error){
            console.log('failed to upload');
            res.status(500).send('faild');
        }
        else{
            res.send('upload to server')
        }
    })
})

// ================
// get-data
// ================

app.get('/getData/:refId',(req,res)=>{
    const idNumber= req.params.refId;
    const sql = `select * from orders where personId= "${idNumber}"`;

    connect.query(sql,(error,result)=>{
        if(error){
            console.log('failed to collect');
            res.status(500).send('try again')
        }
        else{
            res.send(result);
        }
    })
})

// ================
// edit-data
// ================

app.put('/editData/:id/:refId',(req,res)=>{
    const val = req.body;
    const idNum= Number(req.params.id);
    const idNumber= req.params.refId;

    const sql = `update orders set user="${val.user}", country="${val.country}", opinion="${val.opinion}", gmail="${val.gmail}", personId="${idNumber}" where id="${idNum}"`;

    connect.query(sql,(error,result)=>{
        if(error){
            console.log(error);
            res.status(500).send('next try')
        }
        else{
            console.log(req.body)
        }
    })
})

// ================
// remove-data
// ================

app.delete('/removeData/:id',(req,res)=>{
    const idNumber = req.params.id;
    const sql = `delete from orders where id="${idNumber}"`;

    connect.query(sql,(error,result)=>{
        if(error){
            console.log(error);
            res.status(500).send('try harder')
        }
        else{
            res.send(result)
        }
    })
})

app.listen(5000,()=>{
    console.log('done')
})