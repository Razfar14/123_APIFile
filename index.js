require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDatabase = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', require('./routes/api'));

async function startServer() {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();