import { combineReducers } from 'redux';
import progress from './PlayProgressBar';
import pattern from './Pattern';

const rootReducer = combineReducers({
    progress,
    pattern
});

export default rootReducer;
