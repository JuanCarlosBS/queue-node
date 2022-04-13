import 'dotenv/config'
import express from 'express';
import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';

const app = express();

app.use(express.json())

app.post('/users', UserController.store);

app.get('/', (req,res) => ( res.json({ message: 'hello world'})))

app.listen(3333, () => {
    console.log('Server running on localhost:3333')
})