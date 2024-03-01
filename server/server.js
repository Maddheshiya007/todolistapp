import express from 'express';
import connectToMongo from './config/db.js';
import cors from 'cors'
import routes from './routes/TodoRoute.js'
import path from 'path';
const __dirname = path.resolve();
const app = express();
const PORT = 8000;


app.use(express.json());
app.use(express.static(path.join(__dirname,"..","client","build")));
app.use(routes)
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","client","build","index.html"))
})
app.use(cors());
connectToMongo()

app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`)
})