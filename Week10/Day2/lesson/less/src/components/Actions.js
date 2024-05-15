export const INCREMENT = "a";
export const DECREMENT = "b";

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }

}