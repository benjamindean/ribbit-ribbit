export const UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const RESET_PROGRESS = 'RESET_PROGRESS';

export function update(increment) {
  return {
    type: UPDATE_PROGRESS,
    increment
  };
}

export function reset() {
  return {
    type: RESET_PROGRESS
  };
}
