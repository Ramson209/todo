import React, { useState, useEffect} from 'react';
import '../styles/Index.css';
import Todos from '../components/Todos';
import { nanoid } from 'nanoid';

const Index = () => {
	//init states to handle todo Operations
	const [todos, setTodos] = useState([]);

	const [task, setTask] = useState('');



	//creates todo
	const createTodo = ({ key }) => {
		if (key === 'Enter') {
			if (task) {
				//add a task
				setTodos([
					...todos,
					{
						id: nanoid(),
						content: task,
						active: true,
						completed: false,
					},
				]);

				//clear input value
				setTask('');
			}
		}
	};

	//add an eventListener
	useEffect(() => {
		window.addEventListener('keyup', createTodo);
		return () => {
			window.removeEventListener('keyup', createTodo);
		};
	});

	//handleChange to control input element
	const handleChange = (e) => setTask(e.target.value);
	return (
		<>
			<div className="input__box">
				<input
					className="input"
					placeholder="what needs to be done?"
					value={task}
					onChange={handleChange}
					autoFocus
				></input>
			</div>
			{todos.length > 0 && <Todos todoData={todos} updateTodos={setTodos}></Todos>}
		</>
	);
};

export default Index;
