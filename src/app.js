import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import GIFSizeApp from './components/GIFSizeApp';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import './styles/styles.scss';

const store = configureStore();

// Wraps sore around base component
const jsx = (
    <Provider store={store}>
        <GIFSizeApp />
    </Provider>
);

// Responsible for rendering complete application
ReactDOM.render(jsx, document.getElementById('app'));
