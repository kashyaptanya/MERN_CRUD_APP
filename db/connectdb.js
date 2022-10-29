const mongoose = require("mongoose")


const connectDb = () => {

    const db ='mongodb+srv://tanya:tanya@cluster0.hxpro3g.mongodb.net/company'
mongoose.connect(db,{
})
.then(()=>console.log("connected"))
.catch((err)=>console.log("error",err))
}

module.exports=connectDb 
