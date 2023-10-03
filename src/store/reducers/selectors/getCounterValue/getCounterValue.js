// Selector is a function that takes state as argument and returns some value from the state.
export const getCounterValue = (state) => state?.counter?.value || 0;
