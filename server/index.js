import express from 'express'
import cors from 'cors'

import userRouter from './routes/UserRouter.js' ;
import busRouter from './routes/BusRouter.js' ;
import connectDb from './config/ConnectDb.js' ;


const app = express() ;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));

app.use(express.json()) ;


const PORT = 8080 ;
app.get("/",(req,res)=>{
     res.json({
        message : "server is running" + PORT ,
    })
})

app.use('/api/user',userRouter) ;
app.use('/api/bus',busRouter) ;

connectDb().then(()=>{
       app.listen(PORT,()=>{
        console.log("Server is running",PORT)
    })
})
