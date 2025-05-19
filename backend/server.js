import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import resellRoutes from "./routes/resellProductRoutes.js";

// App Config
const app = express()
const port = process.env.PORT || "https://revogue-frontend.onrender.com"
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())


app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true // if you're using cookies or authentication tokens
}));
  // Other middlewares
  app.use(express.urlencoded({ extended: true }));
  

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use("/api/resell", resellRoutes);



app.get('/',(req,res)=>{
    res.send("API Working")
})



app.listen(port, ()=> console.log('Server started on PORT : '+ port))
