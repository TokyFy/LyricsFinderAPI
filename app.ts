import express from 'express';
import morgan from 'morgan';

const FindsRoutes = require('./Routes/findRoute');

const app = express();

app.use(morgan("dev"))

app.use('/api/rest/find', FindsRoutes);

app.all('*' , (req , res)=>{
    res.status(404).json({
        message : "Our API Endpoints is at '/api/rest/find'!"
    })
})
export default app;