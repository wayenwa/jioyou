// import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import App from './components/App';

// CSS files from mpupu web template

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/template/styles.css';
// import './semantic/dist/semantic.min.css';

// import allReducers from './reducers';

// const store = createStore(allReducers);
// window.store = store;

render((
    //<Provider store = {store}>
        <BrowserRouter>

            <App />

        </BrowserRouter>
   // </Provider>
), document.getElementById('root'));

// export default store;