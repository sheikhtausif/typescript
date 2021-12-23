import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todos.route';
import { json } from 'body-parser';

const app = express();

// app.use(express.json());
app.use(json());

app.use('/todos', todoRoutes);

app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
    next();
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})


