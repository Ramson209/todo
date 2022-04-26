import React from 'react';
import '../styles/Toolbar.css';
import findAndRemoveAll from '../utils/findAndRemoveAll';

const Toolbar = ({
	setFilterString,
	filterString,
	count,
	todoData,
	updateTodos,
}) => {
	const handleAction = ({ target }) => {
		//get text content from event triggered elememt
		const filter = target.textContent;

		if (filter) {
			//set a new filter state
			setFilterString(filter);
		}
	};
	const handleClearAction = () => {
		//clear all completed tasks
		findAndRemoveAll(todoData, updateTodos);
	};

	// const addActive=(filter,type){
	//     return

	// }
	return (
		<>
			<div className="toolbar">
				<span className="toolbar__count">
					{count > 1 ? count + ' items' : count + ' item'} Left
				</span>
				<div className="toolbar__actions" onClick={handleAction}>
					<span
						className={`toolbar__btn ${filterString === 'All' ? 'active' : ''}`}
					>
						All
					</span>
					<span
						className={`toolbar__btn ${
							filterString === 'Active' ? 'active' : ''
						}`}
					>
						Active
					</span>
					<span
						className={`toolbar__btn ${
							filterString === 'Completed' ? 'active' : ''
						}`}
					>
						Completed
					</span>
				</div>
				<span className="toolbar__clearBtn" onClick={handleClearAction}>
					Clear Completed
				</span>
			</div>
			<div className="toolbar__footer toolbar__footer--1"></div>
			<div className="toolbar__footer toolbar__footer--2"></div>
		</>
	);
};

export default Toolbar;
