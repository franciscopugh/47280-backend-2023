import express from 'express'
import userRouter from './routes/user.routes.js'

const app = express()
const PORT = 8000

app.use(express.json())

app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log('Server on port ', PORT)
})