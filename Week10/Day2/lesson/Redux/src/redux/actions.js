export const CHANGE = "change_text";

export const change = (val) => {
  return {
    type: CHANGE,
    payload: val,
  }
}