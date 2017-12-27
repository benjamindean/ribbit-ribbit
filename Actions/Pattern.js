export const UPDATE_PATTERN = 'UPDATE_PATTERN';
export const RESET_PATTERN = 'RESET_PATTERN';

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
