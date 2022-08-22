const { application } = require('express');
const express=require('express')
const app=express()
const Port=5000;
const authMiddleware=(req,res,next)=>{
    const wa9t=new Date()
    if (wa9t.getDay()===6 || wa9t.getDay()===7 || wa9t.getHours()>17 || wa9t.getHours()<9 ){
        res.send('<h2> we are closed ,please check us back at these times <br> Monday till Friday from 9 Am to 5 Pm <br> you are welcome</h2>')
    }
    else
    {next()}
}
app.use(authMiddleware)
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/Pages/Home.html')
})
app.get('/Contact',(req,res)=>{
    res.sendFile(__dirname +'/Pages/Contact.html')
})
app.get('/Services',(req,res)=>{
    res.sendFile(__dirname +'/Pages/Services.html')
})
app.get('/Style.css',(req,res)=>{
    res.sendFile(__dirname +'/Pages/Style.css')
})
app.listen(Port,err=>err? console.log(err):console.log(`The server is running now on ${Port}` ))