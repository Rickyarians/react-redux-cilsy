// inisialisasi redux
const redux = require("redux");
// create store
const createStore = redux.createStore;

// inisialisasi state awal
const initialState = {
	counter: 0,
	isOk: false,
};

// init reducer
const rootReducer = (state = initialState, action) => {
	// increment counter
	if (action.type === "INC_COUNTER") {
		return {
			...state,
			counter: state.counter + 1,
		};
	}

	if (action.type === "ADD_COUNTER") {
		return {
			...state,
			counter: state.counter + action.value,
		};
	}

	return state;
};

// store
const store = createStore(rootReducer);

store.dispatch({ type: "INC_COUNTER" });
// state counter = 1
store.dispatch({ type: "ADD_COUNTER", value: 10 });
// state counter = 11

console.log(store.getState());
