// Constants for action types
export const ADD_HABIT = "ADD_HABIT";
export const REMOVE_HABIT = "REMOVE_HABIT";
export const TOGGLE_STATUS = "TOGGLE_STATUS";

// Action for adding habit to global state
export function addHabit(habit) {
  return {
    type: ADD_HABIT,
    habit,
  };
}

// Action for removing habit from global state
export function removeHabit(habit) {
  return {
    type: REMOVE_HABIT,
    habit,
  };
}

// Action creator to toggle habit status
// It takes three input
// 1. index of habit of which status is to be changed
// 2. day of the status to be changed i.e. id of status property
// 3. value of status 0-->Pending , 1--> Done 2--> Not Done

export function toggleHabitStatus(index, id, value) {
  return {
    type: TOGGLE_STATUS,
    id,
    index,
    value,
  };
}
