import React from 'react'
import Task from './Task'

const TaskList = ({tasks = []}) => tasks.map(task => <Task task={task}/>);

export default TaskList