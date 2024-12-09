import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import  {PORT} from './config/serverConfig.js';
import apiRoute from './routes/index.js'

const app=express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());



app.use('/api',apiRoute)

app.get('/ping',(req,res)=>{
    return res.json({message:'pong'})
})


app.listen(PORT,()=>{
    console.log(`Server is runnning on PORT ${PORT}`)
})