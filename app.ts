import express from 'express';
import morgan from 'morgan';

const MusicsRoutes = require('./Routes/SearchRoute');

const app = express();

app.use(morgan("dev"))

app.use('/api/rest/', MusicsRoutes);

app.all('*' , (req , res)=>{
    res.status(404).json({
        message : "Our API Endpoints is at '/api/rest' 📦 !"
    })
})

export default app;