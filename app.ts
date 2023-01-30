import express from 'express';
import morgan from 'morgan';
import * as path from "path";
import cors from "cors";

const MusicsRoutes = require('./Routes/MusicsRoute');

const app = express();

app.use(cors())

app.use(morgan("dev"))

app.use('/api/rest/', MusicsRoutes);

app.all('*' , (req , res)=>{
    res.status(404).sendFile(path.join(__dirname, './Page/404/404.html'));
})

export default app;