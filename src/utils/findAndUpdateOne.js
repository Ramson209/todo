const findAndUpdateOne = (data, taskID, fn, content = '') => {
	const newMutableData = [...data];

	//find the corresponding task with taskID
	const task = newMutableData.find(({ id }) => id === taskID);

	if (content) {
		task.content = content;
		//update the state with Changes
		fn(newMutableData);
		return;
	}

	//update detailts
	task.completed = !task.completed;
	task.active = !task.active;

	//update the state with Changes
	fn(newMutableData);
};
export default findAndUpdateOne;
