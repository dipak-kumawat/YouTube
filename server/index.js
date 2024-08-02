import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import videoRoutes from './routes/video.js'
import commentRoutes from './routes/comments.js'

dotenv.config()
const app = express()
const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log('connect to db')
    }).catch((err) => {
        throw err
    })
}

app.use('/api/users', userRoutes)
app.use('/api/video', videoRoutes)
app.use('/api/comments', commentRoutes)

const port = 5000;
app.listen(port, () =>{
    connect()
    console.log(`server is starting at http://localhost:${port}/`)
})