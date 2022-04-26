const filter = (data, type) => {
	//get todo data based on action
	if (data.length > 0) {
		if (type === 'All') {
			return data;
		} else if (type === 'Active') {
			return data.filter(({ active }) => active === true);
		} else if (type === 'Completed') {
			return data.filter(({ completed }) => completed === true);
		}
	}
	return [];
};
export default filter;
