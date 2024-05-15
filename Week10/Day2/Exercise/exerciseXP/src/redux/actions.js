export const ADD = "add_task";
export const REMOVE = "remove_task";
export const CHANGE = "change_status";

export const add = (val) => {
  return {
    type: ADD,
    payload: val,
  }
}

export const remove = (val) => {
    return {
      type: REMOVE,
      payload:val
    }
  }

  export const changeStatus = (val) => {
    return {
      type: CHANGE,
      payload:val
    }
  }