import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

// Inital state is set to define empty values that the store will track
const initialState =  {
    selectedGif: null,
    modalIsOpen: false
};

export default function modal(state = initialState, action) {
    // Switch to handle actions being passed
    switch(action.type) {
        // Sets the modalIsOpen state to true and gets the selectedGif for display in the modal
        case OPEN_MODAL:
            return {
                ...state,
                modalIsOpen: true,
                selectedGif: action.gif.selectedGif
            };
        case CLOSE_MODAL:
            // Sets the modalIsOpen state to false and sets the selectedGif to null
            return {
                ...state,
                modalIsOpen: false,
                selectedGif: null
            };
        default:
            return state;
    }
}