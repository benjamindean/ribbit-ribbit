import { UPDATE_PATTERN, RESET_PATTERN } from '../Actions/Pattern';

export default function pattern(state = [], action) {
  switch (action.type) {
    case UPDATE_PATTERN:
      return [...state, action.element];
    case RESET_PATTERN:
      return [];
    default:
      return state;
  }
}
