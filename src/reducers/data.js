const dataReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [ ...state, action.payload ];
		case 'TOGGLE':
			let filter = state.filter((i) => i.id === action.payload.id);
			const completed = filter[0].completed; // true or false
			const stateWithoutSelected = state.filter((i) => i.id !== action.payload.id);
			state = stateWithoutSelected;
			filter[0].completed = !completed;
			console.log(filter[0]);
			return [ ...state, filter[0] ];
		case 'REMOVE':
			const remindData = state.filter((i) => i.id !== action.payload.id);

			return [ ...remindData ];
		default:
			return state;
	}
};

export default dataReducer;
