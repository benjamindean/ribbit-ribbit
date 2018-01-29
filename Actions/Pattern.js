export const PLAY_PATTERN = 'PLAY_PATTERN';
export const UPDATE_PATTERN = 'UPDATE_PATTERN';
export const RESET_PATTERN = 'RESET_PATTERN';
export const SET_PATTERN = 'SET_PATTERN';
export const SHARE_PATTERN = 'SHARE_PATTERN';

export function play(pattern) {
  return {
    type: PLAY_PATTERN,
    pattern
  };
}

export function set(pattern) {
  return {
    type: SET_PATTERN,
    pattern
  };
}

export function update(element) {
  return {
    type: UPDATE_PATTERN,
    element
  };
}

export function reset() {
  return {
    type: RESET_PATTERN
  };
}

export function share(view, pattern) {
  return {
    type: SHARE_PATTERN,
    view,
    pattern
  };
}
