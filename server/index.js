import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
console.log(process.env.MONGO); 
const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log('connect to db')
    }).catch((err) => {
        throw err
    })
}

const port = 5000;
app.listen(port, () =>{
    connect()
    console.log(`server is starting at http://localhost:${port}/`)
})