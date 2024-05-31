import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
dotenv.config()

const PORT = process.env.PORT || 8080
connectDB()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/users', userRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
