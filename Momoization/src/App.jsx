import { useState, useCallback, useEffect } from 'react'
import Tasks from './components/Tasks'
import PendingTask from './components/PendingTask';
import CompletedTask from './components/CompletedTask';
import { useMemo } from 'react';

function App() {

  const [data, setData] = useState(() => {
    const stored = localStorage.getItem('tasks')
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState('')

  // const DebouncedInput = useDebouncing(input, 500)

  const handleChange = (e) => {
    setInput(e.target.value)
  }


  const handleAdd = useCallback(() => {

    if (!input.trim()) return;

    const task = {
      id: Date.now(),
      title: input,
      isCompleted: false
    }

    setData(prev => (
      prev = [...prev, task]
    ));
    setInput('')
  }, [input])

  useEffect(() => {

    localStorage.setItem('tasks', JSON.stringify(data));
  }, [data])

  const handleClear = useCallback(() => {
    setData([])
    localStorage.removeItem('tasks')
  }, [])

  const pendingTasks = useMemo(() => {
    return data ?
      data.filter(task => (task.isCompleted === false)):
      []
  }, [data])

  const completedTask = useMemo(() => {
    return data ?
      data.filter(task => (task.isCompleted === true)):
      []
  }, [data])

  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Todo Light Theme</h1>
        <p className="todo-subtitle">Easy, clean, and responsive task manager</p>
      </header>

      <section className="todo-input-section">
        <label htmlFor="input">Enter the task title</label>
        <div className="todo-input-row">
          <input
            id="input"
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Add a new task..."
            className="todo-input"
          />

          <button className="btn btn-primary" onClick={handleAdd}>Add Task</button>
          <button className="btn btn-secondary" onClick={handleClear}>Clear All</button>
        </div>
      </section>

      <div className="todo-columns">
        <PendingTask data={pendingTasks} setData={setData} />
        <CompletedTask data={completedTask} setData={setData} />
      </div>
    </div>
  )
}

export default App
