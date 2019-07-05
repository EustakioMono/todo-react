import React from 'react';
import TaskList from '../organisms/TaskList';
import Title from '../atoms/Title'

const dataArr = [
  {
    title: 'firsTask',
    done: false,
  },
  {
    title: 'sencondTask',
    done: true,
  }
]

const TaskView = () =>( 
  <React.Fragment> 
    <Title>Today on... today's taks...</Title>
    <TaskList tasks={dataArr}/>
  </React.Fragment>
  )

export default TaskView;