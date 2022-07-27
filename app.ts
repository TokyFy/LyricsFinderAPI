import express from 'express';
import morgan from 'morgan';

const MusicsRoutes = require('./Routes/MusicsRoute');

const app = express();

app.use(morgan("dev"))

app.use('/api/rest/', MusicsRoutes);

app.all('*' , (req , res)=>{
    res.status(404).json({
        message : "Error : Route not Handled"
    })
})

export default app;