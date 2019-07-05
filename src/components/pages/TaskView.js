import React from 'react';

import TaskList from '../organisms/TaskList';
import AddTask from '../organisms/AddTask';
import Title from '../atoms/Title';

const TaskView = () =>( 
  <React.Fragment>
    <Title>Today on... today's taks...</Title>
    <AddTask/>
    <TaskList/>
  </React.Fragment>
  )

export default TaskView;