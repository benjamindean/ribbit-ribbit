import { UPDATE_PROGRESS, RESET_PROGRESS } from '../Actions/PlayProgressBar';

export default function playProgressBar(state = 0, action) {
	switch (action.type) {
		case UPDATE_PROGRESS:
			return state + action.increment;
		case RESET_PROGRESS:
			return 0;
		default:
			return state;
	}
}
