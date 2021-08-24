import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';

// Used to combine reducers so they can be logically split by category
const rootReducer = combineReducers({
  gifs: GifsReducer,
  modal: ModalReducer
});

export default rootReducer;