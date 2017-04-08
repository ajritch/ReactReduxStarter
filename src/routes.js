import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';

const routes = (
	<Route path = '/' component = {App}>
		{/* put nested routes here */}
	</Route>
);

export default routes;