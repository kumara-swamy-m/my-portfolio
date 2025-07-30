const express = require('express');
const mysql = require('mysql2'); // use mysql2 for compatibility
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // change if you use another user
  password: 'Kumarasql@2004',        // add your MySQL password if set
  database: 'todo_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL Connected...');
});

// ✅ Ensure tasks table exists
db.query(`CREATE TABLE IF NOT EXISTS tasks(
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL
)`, (err) => {
  if (err) throw err;
  console.log('✅ tasks table ready');
});

// ✅ Get all tasks
app.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// ✅ Add new task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  db.query('INSERT INTO tasks (title) VALUES (?)', [title], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, title });
  });
});

// ✅ Delete task
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ success: true });
  });
});

// ✅ Update (Edit) task
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  db.query('UPDATE tasks SET title = ? WHERE id = ?', [title, id], (err) => {
    if (err) throw err;
    res.json({ success: true, id, title });
  });
});

// ✅ Start Server
app.listen(5000, () => console.log('🚀 Backend running on port 5000'));
