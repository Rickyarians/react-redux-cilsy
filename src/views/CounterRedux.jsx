import { connect } from "react-redux";
import Login from "./Login";

const CounterRedux = (props) => {
	console.log(props);

	return (
		<div>
			{/* <Login></Login>
			<h1>Counter : {props.counter}</h1> */}
			<p>{props.name}</p>
			{/*  */}
			{/* <button onClick={() => props.onIncrementCounter()}>Increment</button> */}
			{/*  */}
			{/* <button onClick={() => props.onDecrementCounter()}>Decrement</button> */}

			{/* Tugas 
            1. Tangkep Value dari input
            2. Rubah state store name sesuai dengan apa yang di input
            3. klik ubah untuk trigger state name
            */}
			<input type="text" />

			<button>ubah</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		counter: state.counter,
		name: state.name,
	};
};

//
const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
		onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
	};
};
//

//
export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
//
