import React from "react";
import { connect } from "react-redux";

const Login = (props) => {
	return (
		<div>
			<h1>
				login page {props.counter} {props.name}
			</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		counter: state.counter,
		name: state.name,
	};
};

export default connect(mapStateToProps)(Login);
