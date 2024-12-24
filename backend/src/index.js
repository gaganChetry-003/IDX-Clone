import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import { PORT } from './config/serverConfig.js';
import apiRoute from './routes/index.js'



const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        method: ['GET', 'POST']
    }
})

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


io.on('connection', (socket) => {
    console.log('user connected')
})


app.use('/api', apiRoute)

app.get('/ping', (req, res) => {
    return res.json({ message: 'pong' })
})


server.listen(PORT, () => {
    console.log(`Server is runnning on PORT ${PORT}`)
})