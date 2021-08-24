import { createStore, compose, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers/combine-reducers';

export default function configureStore(initialState) {

    // Creation of the store
    const store = createStore(
        rootReducer,
        initialState,
        compose (
            // Middle ware to handle api call
            applyMiddleware(ReduxPromise),
            // Support for REDUX dev tools
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );

    if (module.hot) {
    // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/combine-reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}