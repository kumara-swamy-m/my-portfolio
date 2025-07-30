const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');   // ✅ only one declaration

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Database Connection (using Render Environment Variables)
const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

// ✅ Connect to Database
db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err);
    return;
  }
  console.log('✅ Connected to Railway MySQL!');
});

// ✅ Routes

// Get all tasks
app.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  db.query('INSERT INTO tasks (title) VALUES (?)', [title], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, title });
  });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// Edit (Update) a task
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  db.query('UPDATE tasks SET title = ? WHERE id = ?', [title, id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
