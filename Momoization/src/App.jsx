import { useState, useCallback, useEffect } from 'react'
import Tasks from './components/Tasks'

function App() {

  const [data, setData] = useState(() => {
    const stored = localStorage.getItem('tasks')
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState('')
  const [completed, setCompleted] = useState(false)

  // const DebouncedInput = useDebouncing(input, 500)

  const handleChange = useCallback((e) => {
    setInput(e.target.value)
  }, [])


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

  const handleCompletedTask = useCallback(() => {
    setCompleted(prev => prev = !prev)
  }, [])

  return (
    <>
      <div>

        <label htmlFor="input">Enter the task title : </label>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder='Enter the task'
        />

        <button onClick={handleAdd} style={{marginLeft: '20px'}}>Add the Task</button>

        <button onClick={handleClear} style={{marginLeft: '40px'}}>Clear All Tasks</button>

        <button onClick={handleCompletedTask} style={{marginLeft: '40px'}}>Show completed Tasks</button>

      </div>

      <div>
        <Tasks data={completed ? data.filter(task => (task.isCompleted === true)): data} setData={setData}/>
      </div>
    </>
  )
}

export default App
