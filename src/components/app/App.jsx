import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from '../app-router/AppRouter.jsx';
import { store } from '../../redux/store.js'

export const App = () => (
	<>
		<Provider store={store}>
			<AppRouter />
		</Provider>
	</>
);