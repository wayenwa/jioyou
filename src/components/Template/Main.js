import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
// import NotFound from '../UI/Errors/NotFound';
import routes from '../../shared/routes';

class Main extends Component {
	/*
	 * The Main Component renders application routes
	 * Route list can be found in /src/shared/routes.js file
	 * If the current accessed URL is not found in routes file,
	 * 		this component will render a NotFound component
	 */

	render() {
		return (
			<main className="main-content">
				<Switch>
						{
							routes.map((element) =>
								<Route key={element.path} exact path={element.path} component={element.component}/>
							)
						}
						<Route/>
				</Switch>

			</main>
		);
	}
}

export default Main;
