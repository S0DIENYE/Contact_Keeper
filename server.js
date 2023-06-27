const express = require('express');
const connectDB = require('./routes/config/db');

const app = express();

// Connect Database
connectDB();

// Send data with end point
/**
 * res.send('takes in text');
 * res.json({msg: 'takes in data with json format'}),
 */
app.get('/', (req, res) => res.json({msg: 'Welcome to contact keeper API'}) );

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));