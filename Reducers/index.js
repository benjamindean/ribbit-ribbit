import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../Components/AppNavigator';
import progress from './PlayProgressBar';
import pattern from './Pattern';

const firstAction = AppNavigator.router.getActionForPathAndParams('CustomPattern');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(firstAction, tempNavState);

function nav(state = initialNavState, action) {
	let nextState;

	switch (action.type) {
		case 'CustomPattern':
			nextState = AppNavigator.router.getStateForAction(NavigationActions.back(), state);
			break;
		default:
			nextState = AppNavigator.router.getStateForAction(action, state);
			break;
	}

	return nextState || state;
}

const rootReducer = combineReducers({
	nav,
	progress,
	pattern
});

export default rootReducer;
