const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
