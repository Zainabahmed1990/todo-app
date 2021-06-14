export const add = (value) => {
	return {
		type: 'ADD_TODO',
		payload: value
	};
};

export const toggle = (value) => {
	return {
		type: 'TOGGLE',
		payload: value
	};
};
export const remove = (value) => {
	return {
		type: 'REMOVE',
		payload: value
	};
};
