import * as actionTypes from "./actions";

// inisialisasi state awal
const initialState = {
	name: "Ricky Ariansyah",
};

const reducer = (state = initialState, action) => {
	console.log(action);

	switch (action.type) {
		case actionTypes.CHANGENAME:
			return {
				...state,
				name: action.data,
			};
	}
	return state;
};

export default reducer;
