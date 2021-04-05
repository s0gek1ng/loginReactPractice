const express=require('express');
const mysql=require('mysql');
const app=express();
const cors=require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Sengar@21',
    database:"loginsys"
});

app.post('/register',(req,res)=>{

    const email=req.body.email;
    const password=req.body.password;
    const fname=req.body.fname;
    const lname=req.body.lname;
    const mobileno=req.body.mobileno;

    db.query("INSERT INTO users (fname,lname,email,mobileno,password) values (?,?,?,?,sha1(?))",
    [fname,lname,email,mobileno,password],
    (err,result)=>{
        console.log(err);
    });
});

app.post('/login',(req,res)=>{  
    const email=req.body.email;
    const password=req.body.password;

    db.query("select * from users where email=? and password=sha1(?)",
    [email,password],
    (err,result)=>{
        if(err){
            res.send({err:err});
        }
        if(result.length>0)
            res.send(result);
        else
            res.send({message:"Wrong username/password combination!"});
        }
    );
});

app.listen(3001,()=>{
    console.log('Running 3001');
});