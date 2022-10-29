const express = require("express")
const User = require('../models/data')
const router = new express.Router() 



router.get('/',(req,res)=>{
    res.render('index')
    // res.send("routers")
    // console.log("routersjhcbiub")
})
router.post("/", async(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    console.log(name,email)
    try{
        const user = new User({
            name,
            email
        })
        const createUser = await user.save()
        res.status(201).redirect('/')
    }
    catch{
         res.status(400).send(e)
    }
})

// router.post('/',(req,res)=>{
    
// const name = req.body.name
// const email = req.body.email
// console.log(name,email)

// const user = new User({
//     name,
//     email
// })
// user.save(err=>{
//     if(err){
//         console.log("err i")
//     }else{
//         res.redirect('/')
//     }
// })
// })
router.get('/show',(req,res)=>{
    User.find((err,docs)=>{
        if (err) throw err;
        res.render('show',{
            users:docs
        })
    })
})


router.get('/edit/:id',(req,res)=>{
    // console.log(req.params.id)

    User.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,docs)=>{
        if(err){
            console.log("cant update")
        }
        else{
            res.render('edit',{userdata:docs})
        }
    })
})

router.post('/edit/:id',(req,res)=>{

    
    User.findByIdAndUpdate({_id:req.params.id},req.body,(err)=>{
        if(err){
            console.log("error")
        }
        else{
            res.redirect('/show')
        }
    })
})

router.get('/delete/:id',(req,res)=>{
    User.findByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{
        if(err){
            console.log("cant delete")
        }
        else{
            console.log("deleted")
            res.redirect('/show')
        }
    })
})



module.exports= router