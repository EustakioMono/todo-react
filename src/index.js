import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import TaskView from './components/pages/TaskView'

const App = () => <TaskView/>;


render(<App  />, document.getElementById('root'));
