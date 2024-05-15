import { CHANGE } from "./actions"

const initialState = {
    text: "not Ok"
}

export const reducer = (state=initialState,action) => {
    switch(action.type) {
        case CHANGE: 
            return {...state, text: action.payload};
        default:
        return state
    }
}