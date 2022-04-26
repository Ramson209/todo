import React, { useState } from 'react';
import '../styles/Task.css';
import { ReactComponent as Check } from '../assets/check-solid-svgrepo-com.svg';
import { ReactComponent as Cross } from '../assets/cross-svgrepo-com.svg';
import findAndUpdate from '../utils/findAndUpdateOne';
import findAndRemove from '../utils/findAndRemoveOne';

const Task = ({ task, updateTodos, todoData }) => {
	//decons task data
	const { id, completed, content } = task;

	//state to edit
	const [edit, setEdit] = useState({ content, editable: false });

	

	//toggles between check and uncheck
	const handleCheck = () => {
		//find the task in todos,change the state of completed and update the state
		findAndUpdate(todoData, id, updateTodos);
		// setCompleted(!completed);
	};
	const handleRemoveTask = () => {
		//remove Task
		findAndRemove(todoData, id, updateTodos);
	};

	const handleEdit = () => {
		setEdit({ ...edit, editable: true });
	};
	const handleTaskEdit = ({ target }) => {
		setEdit({ ...edit, content: target.value });
	};

	const handleSubmitChanges = ({ key }) => {
		if (key === 'Enter') {
			if (edit.content) {
				//set editable to false
				setEdit({ ...edit, editable: false });
				//edit task
				//find the task in todos,change the state of completed and update the state
				findAndUpdate(todoData, id, updateTodos, edit.content);
			}
		}
	};

	return (
		<div
			className={`task ${edit.editable ? 'task__edit' : ''}`}
			onDoubleClick={handleEdit}
		>
			{edit.editable ? (
				<input
					className="task__inputEdit"
					value={edit.content}
					onChange={handleTaskEdit}
					onKeyUp={handleSubmitChanges}
					autoFocus
				></input>
			) : (
				<>
					<div className="task__box">
						<span
							className="task__checkBox"
							style={{ border: completed && '1px solid var(--checkedLight)' }}
							onClick={handleCheck}
						>
							{completed && <Check className="task__check"></Check>}
						</span>
						<p className={completed ? 'task__crossThrough' : ''}>{content}</p>
					</div>

					<Cross className="task__cross" onClick={handleRemoveTask}></Cross>
				</>
			)}
		</div>
	);
};

export default Task;
