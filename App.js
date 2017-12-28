// @flow
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers/index';
import AppWithNavigationState from './Components/AppNavigator';

const store = createStore(rootReducer, {
	progress: 0,
	pattern: []
});

export default class Root extends PureComponent {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}
