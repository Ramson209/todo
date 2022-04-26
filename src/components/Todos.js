import React, { useState, Fragment } from 'react';
import Task from './Task';
import '../styles/Task.css';
import Toolbar from '../components/Toolbar';
import filter from '../utils/filter';

const Todos = ({ todoData, updateTodos }) => {
	//state to filter out todos
	const [filterString, setFilterString] = useState('All');

	//get count of active tasks
	const count = filter(todoData, 'Active').length;

	//filter based on filterString
	const filteredTodos = filter(todoData, filterString);

	//renderTodos
	const renderTodos = filteredTodos.map((task) => (
		<Task
			key={task.id}
			task={task}
			updateTodos={updateTodos}
			todoData={todoData}
		></Task>
	));
	return (
		<>
			<div className="todos">
				<Fragment>{renderTodos}</Fragment>
			</div>
			<Toolbar
				setFilterString={setFilterString}
				filterString={filterString}
				count={count}
				updateTodos={updateTodos}
				todoData={todoData}
			></Toolbar>
		</>
	);
};

export default Todos;
