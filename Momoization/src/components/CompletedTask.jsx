import React from 'react'
import Tasks from './Tasks'

function CompletedTask(props) {

    const data = props.data
    const setData = props.setData

    return (
        <div style={{width: '50%', padding: '10px'}}>
            <h1>Completed Task</h1>
            <Tasks data={data}  setData = {setData}/>
        </div>
    )
}

export default React.memo(CompletedTask)