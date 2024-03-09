import express from "express";
import usersRouter from "./routes/users.router.js";
import businessRouter from "./routes/business.router.js";
import ordersRouter from "./routes/orders.router.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST', 'PUT'] }));

const connection = mongoose.connect('mongodb+srv://admin:admin@cluster0.ucsa73j.mongodb.net/?retryWrites=true&w=majority');

app.use('/api/users', usersRouter);
app.use('/api/business', businessRouter);
app.use('/api/orders', ordersRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Server is running on port ' + PORT));