import {createStore} from 'redux';

const initialState = {
    previousValues: [],
    futureValues: [],
    currentValue: 0
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const UNDO = "UNDO";
export const REDO = "REDO";
function counter(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return { futureValues: [],
                    currentValue: state.currentValue + action.payload,
                    previousValues: [state.currentValue, ...state.previousValues]};
        case DECREMENT:
            return { futureValues: [],
                    currentValue: state.currentValue - action.payload,
                    previousValues: [state.currentValue, ...state.previousValues]};
        case UNDO:
        return {
            currentValue: state.previousValues[0],
            futureValues: [state.currentValue, ...state.futureValues],
            previousValues: state.previousValues.slice(1)
        }
        case REDO:
        return {
            currentValue: state.previousValues[0],
        }
        default:
            return state;
    }

}

export default createStore(counter);
