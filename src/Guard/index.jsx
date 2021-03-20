import { Redirect, Route } from 'react-router-dom';

const Guard = props => {
	const isAuth = false;

	// if (isAuth) {
	// 	return <Route {...props} />;
	// } else {
	// 	return <Redirect to="/login" />;
	// }

	// <Route component={props.component} path={props.path} />

	return isAuth ? <Route {...props} /> : <Redirect to="/login" />;
};

export { Guard };
