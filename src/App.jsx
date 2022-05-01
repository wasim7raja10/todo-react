import { useEffect, useState } from 'react';

let globalId = 0;

export default function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  function addTasks(e) {
    e.preventDefault();
    setTodos((oldTodos) => {
      setTask('');
      return [...oldTodos, { todo: task, id: globalId++ }];
    });
  }

  function deleteTask(taskId) {
    setTodos(todos.filter((task) => taskId != task.id));
  }

  return (
    <div>
      <h1>Best TODO Ever</h1>
      <form onSubmit={addTasks}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Create Todo</button>
      </form>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.todo}, {item.id}
            <button onClick={() => deleteTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
