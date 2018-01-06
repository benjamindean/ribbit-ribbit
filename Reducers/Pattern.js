import {
	ToastAndroid,
	Vibration
} from 'react-native';
import {
	PLAY_PATTERN,
	SET_PATTERN,
	UPDATE_PATTERN,
	RESET_PATTERN
} from '../Actions/Pattern';

class PatternReducer {
	constructor(state) {
		this.state = state;
	}

	get value() {
		return this.state;
	}

	set value(pattern) {
		return this.state = pattern;
	}

	validate() {
		if (!Array.isArray(this.state)) {
			ToastAndroid.show('Invalid vibration pattern', ToastAndroid.SHORT);
			return false;
		}

		if (!this.state.length) {
			return false;
		}

		return this.state.filter(element => {
			return Number.isInteger(element);
		});
	}

	update(element) {
		return [...this.state, element];
	}

	play() {
		const validPattern = this.validate(this.state);

		if (validPattern) {
			Vibration.vibrate(validPattern);
			ToastAndroid.show(`Playing pattern: ${JSON.stringify(validPattern)}`, ToastAndroid.LONG);
		}

		return this.state;
	}

	reset() {
		if (!this.state.length) {
			return this.state;
		}

		Vibration.cancel();
		ToastAndroid.show('Pattern cleared', ToastAndroid.SHORT);

		return [];
	}
}

export default function pattern(state = [], action) {
	const pattern = new PatternReducer(state);

	switch (action.type) {
		case PLAY_PATTERN:
			return pattern.play();
		case SET_PATTERN:
			return pattern.value(action.patern);
		case UPDATE_PATTERN:
			return pattern.update(action.element);
		case RESET_PATTERN:
			return pattern.reset();
		default:
			return pattern.value;
	}
}
