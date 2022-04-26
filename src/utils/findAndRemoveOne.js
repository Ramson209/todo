const findAndRemoveOne = (data, taskID, fn) => {
	const newMutableData = [...data];

	const taskIndex = newMutableData.findIndex(({ id }) => id === taskID);

	//remove task
	newMutableData.splice(taskIndex, 1);

	//update the state with Changes
	fn(newMutableData);
};
export default findAndRemoveOne;
