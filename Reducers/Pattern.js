import { ToastAndroid, Vibration } from 'react-native';
import { PLAY_PATTERN, UPDATE_PATTERN, RESET_PATTERN } from '../Actions/Pattern';

function play(state, pattern) {
	if (!pattern.length) {
		return state;
	}

	ToastAndroid.show(`Playing pattern: ${JSON.stringify(pattern)}`, ToastAndroid.LONG);
	Vibration.vibrate(pattern);

	return state;
}

function reset() {
	Vibration.cancel();
	ToastAndroid.show('Pattern cleared', ToastAndroid.SHORT);

	return [];
}

export default function pattern(state = [], action) {
	switch (action.type) {
		case PLAY_PATTERN:
			return play(state, action.pattern);
		case UPDATE_PATTERN:
			return [...state, action.element];
		case RESET_PATTERN:
			return reset();
		default:
			return state;
	}
}
