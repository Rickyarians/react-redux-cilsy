import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { Todos } from "./views/Todos";
import { AddTodos } from "./views/AddTodos";
import { Todo } from "./views/Todo";
import Login from "./views/Login";
import { Guard } from "./Guard";
import { NotFound } from "./views/NotFound";
import CounterRedux from "./views/CounterRedux";

function App() {
	return (
		<Router>
			<Switch>
				<Route component={Todos} exact path="/" />
				<Guard component={AddTodos} path="/add-todos" />
				<Redirect from="/tambah-todos" to="/add-todos" />
				<Route component={Login} path="/login" />
				<Route component={CounterRedux} path="/counter" />
				<Route component={Todo} exact={true} path="/:slug" />
				<Route render={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
