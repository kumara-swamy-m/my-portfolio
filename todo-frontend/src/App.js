import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  // ✅ Fetch tasks
  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // ✅ Add new task
  const addTask = () => {
    if (title.trim() === "") return;
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    })
      .then(res => res.json())
      .then(task => setTasks([...tasks, task]));
    setTitle('');
  };

  // ✅ Delete task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
      .then(() => setTasks(tasks.filter(t => t.id !== id)));
  };

  // ✅ Start editing
  const startEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
  };

  // ✅ Save edited task
  const saveEdit = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: editTitle })
    })
      .then(res => res.json())
      .then(() => {
        setTasks(tasks.map(t => (t.id === id ? { ...t, title: editTitle } : t)));
        setEditId(null);
      });
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "center", fontFamily: "Arial" }}>
      <h1>📝 To-Do List</h1>

      {/* Add new task input */}
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter task"
        style={{ padding: "5px" }}
      />
      <button onClick={addTask} style={{ marginLeft: "5px" }}>Add</button>

      {/* Task list */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ margin: "10px", background: "#f2f2f2", padding: "10px", borderRadius: "5px" }}>
            {editId === task.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  style={{ padding: "5px" }}
                />
                <button onClick={() => saveEdit(task.id)} style={{ marginLeft: "5px" }}>💾 Save</button>
                <button onClick={() => setEditId(null)} style={{ marginLeft: "5px" }}>❌ Cancel</button>
              </>
            ) : (
              <>
                {task.title}
                <button onClick={() => startEdit(task)} style={{ marginLeft: "10px" }}>✏️ Edit</button>
                <button onClick={() => deleteTask(task.id)} style={{ marginLeft: "5px" }}>❌ Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
