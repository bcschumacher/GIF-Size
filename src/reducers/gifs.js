import { INCREASE_OFFSET, REQUEST_GIFS, REQUEST_MORE, SET_TERM } from '../actions';

const initialState =  {
    data: [],
    offset: 0,
    term: ""
};

export default function gifs(state = initialState, action) {
    switch (action.type) {
        case REQUEST_GIFS:
            return {
                ...state, data: action.payload.body.data
            };
        case REQUEST_MORE:
            let arr = state.data.concat(action.payload.body.data)
            
            let unique = arr.reduce((res, itm) => {
                // Test if the item is already in the new array
                let result = res.find(item => JSON.stringify(item) == JSON.stringify(itm))
                // If not lets add it
                if(!result) return res.concat(itm)
                // If it is just return what we already have
                return res
            }, [])


            return {
                ...state, data: unique
            }
        case INCREASE_OFFSET:
            return {
                ...state, offset: state.offset + 50
            };
        case SET_TERM:
            return {
                ...state, term: action.term
            };
        default:
        return state;
    }
}