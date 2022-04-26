const findAndRemoveAll = (data, fn) => {
	const newMutableData = [...data];

	//get all completed tasks
	const filtered = data.filter(({ completed }) => completed === true);


	//Find and remove each element
	filtered.forEach(({ id }) => {
		const taskIndex = newMutableData.findIndex(
			({ id: taskID }) => id === taskID
		);
		if (taskIndex >= 0) {
			//remove element
			newMutableData.splice(taskIndex, 1);
		}
	});
	//update the state
	fn(newMutableData);
};
export default findAndRemoveAll;
