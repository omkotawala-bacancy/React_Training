import React from 'react'

function Tasks(props) {

    const tasks = props.data;
    const setData = props.setData

    function handleComplete(id) {
        setData(prev => (
            prev.map(task => (
                task.id === id ? 
                    {...task, isCompleted: !task.isCompleted} :
                    task
            ))
        ))
    }

    return (
        <div>
            <h1>Tasks</h1>
            <div>
                <div style={{margin: '10px auto'}}>
                    {
                        tasks.map(task => (

                            task.isCompleted ?
                                (
                                    <div key={task.id} style={{ border: '1px solid green', margin: '10px auto'}}>
                                        <p style={{textDecoration: 'line-through'}}>{task.title}</p>
                                        <button disabled>Completed</button>
                                    </div>
                                ) :
                                (
                                    <div key={task.id} style={{ border: '1px solid black', margin: '10px auto' }}>
                                        <p>{task.title}</p>
                                        <button onClick={() => handleComplete(task.id)}>Completed</button>
                                    </div>
                                )
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tasks