import express from 'express';
import routes from './routes/email_route.js';
import dotenv from 'dotenv'

dotenv.config();

const port = process.env.MAIL_PORT;
const app = new express();

app.use(express.json());
app.use('/api/v1/',routes);

app.listen(port, () => { console.log(`server started - listening on port ${port}`)})
