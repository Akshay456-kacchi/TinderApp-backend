import express from 'express'
import mongoose from 'mongoose'

import Cards from './models/dbCards.js'



//App Config

const app = express();

const port = process.env.PORT ||  9001

const connection_url = 'mongodb+srv://admin:aks456ash@cluster0.higuw.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middlewares



//DB config
mongoose.connect(connection_url ,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
})

//API Endpoints

app.get('/',(req,res) => res.status(200).send("HELLO WORLD"));

app.post('/tinder/card' ,(req , res) =>{
    const dbCard =req.body;

    Cards.create(dbCard, (err ,data) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});


app.get('/tinder/card' ,(req , res) =>{
    Cards.find( (err ,data) =>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })

})
//Listener

app.listen(port, () => console.log(`listening on Localhost : ${port})`));

