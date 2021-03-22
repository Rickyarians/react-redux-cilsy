// inisialisasi state awal
const initialState = {
	counter: 69,
	name: "Ricky Ariansyah",
	isOk: false,
};

const reducer = (state = initialState, action) => {
	console.log(action);

	if (action.type === "INCREMENT") {
		return {
			...state,
			counter: state.counter + 1,
		};
	}

	if (action.type === "DECREMENT") {
		return {
			...state,
			counter: state.counter - 1,
		};
	}

	return state;
};

export default reducer;
