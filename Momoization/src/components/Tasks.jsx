import React from 'react'
import { useCallback } from 'react';

function Tasks(props) {

    const tasks = props.data;
    const setData = props.setData

    const handleComplete = useCallback((id) => {
        setData(prev => (
            prev.map(task => (
                task.id === id ? 
                    {...task, isCompleted: !task.isCompleted} :
                    task
            ))
        ))
    }, [])

    const handleDelete = useCallback((id) => {

        setData(prev => prev.filter(task => task.id !== id))
    }, [])

    const handleNotCompleted = useCallback((id) => {
        setData(prev => prev.map(task => {
            return task.id === id ? 
                {...task, isCompleted: !task.isCompleted}:
                task
        }))
    })

    return (
        <div className="tasks-list">
            {tasks.length === 0 && <p className="task-empty">No tasks here yet.</p>}

            {tasks.map(task => (
                <div
                    key={task.id}
                    className={`task-card ${task.isCompleted ? 'task-completed' : 'task-pending'}`}
                >
                    <p className="task-title">{task.title}</p>

                    <div className="task-controls">
                        {task.isCompleted ? (
                            <button className="btn btn-success" onClick={() => handleNotCompleted(task.id)}>Mark Pending</button>
                        ) : (
                            <button className="btn btn-success" onClick={() => handleComplete(task.id)}>Mark Completed</button>
                        )}

                        <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default React.memo(Tasks)