const bodyParser = require("body-parser");
const express = require("express")
const connectDb = require("./db/connectdb");
const userRouter = require("./routes/routers")
 const app = express()
 const port = process.env.PORT ||'5000'


connectDb()
    // app.get('/',(req,res)=>{
    //     res.send("hello")
    // })

app.set('view engine','ejs')    

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use("/",userRouter) 
 
app.listen(port,()=>{
    console.log(`server connected at port : ${port}`)
})