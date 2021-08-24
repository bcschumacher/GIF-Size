import { INCREASE_OFFSET, REQUEST_GIFS, REQUEST_MORE, SET_TERM } from '../actions';

// Inital state is set to define empty values that the store will track
const initialState =  {
    data: [],
    offset: 0,
    term: ""
};

export default function gifs(state = initialState, action) {
    // Switch to handle actions being passed
    switch (action.type) {
        case REQUEST_GIFS:
            // Overwrites data with new array of GIFs from api and resets the offset to 0
            return {
                ...state, data: action.payload.body.data, offset: 0
            };
        case REQUEST_MORE:
            // Concatinates old array of GIFs with new array
            let arr = state.data.concat(action.payload.body.data)
            return {
                ...state, data: arr
            }
        case INCREASE_OFFSET:
            // Increases the offset by 100 GIFs
            return {
                ...state, offset: state.offset + 100
            };
        case SET_TERM:
            // Sets the term in state to be used in the API call
            return {
                ...state, term: action.term
            };
        default:
        return state;
    }
}