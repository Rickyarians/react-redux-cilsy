import * as actionTypes from "./actions";

// inisialisasi state awal
const initialState = {
	counter: 69,

	isOk: false,
};

const reducer = (state = initialState, action) => {
	console.log(action);

	switch (action.type) {
		case actionTypes.INCREMENT:
			return {
				...state,
				counter: state.counter + 1,
			};
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1,
			};
	}
	return state;
};

export default reducer;
