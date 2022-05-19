import express from 'express';
import routes from './routes/email_route.js';
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();

const port = process.env.MAIL_PORT;
const app = new express();
app.use(cors())
app.use(express.json());

app.use('/api',routes);

app.listen(port, () => { console.log(`server started - listening on port ${port}`)})
