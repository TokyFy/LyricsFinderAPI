import express from 'express';
const morgan = require('morgan');

const FindsRoutes = require('./Routes/findRoute');

const app = express();

app.use('/api/rest/find', FindsRoutes);

export default app;