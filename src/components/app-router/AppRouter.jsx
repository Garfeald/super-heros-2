import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Main } from '../../pages/main/Main';
import { Images } from '../../pages/images/Images';
import { NotFound } from '../../pages/notfound/NotFound';
import { Search } from '../../pages/search/Search'
import { Details } from '../../pages/details/Details';
import {ThunkTable} from "../../pages/thunkTable/ThunkTable";

export const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/images" component={Images} />
				<Route path="/details/:name" component={Details} />
				<Route path="/search/" component={Search} />
				<Route path="/thunk-table/" component={ThunkTable} />
				<Route component={NotFound} />
				<Redirect from="*" to="/" />
			</Switch>
		</Router>
	);
};