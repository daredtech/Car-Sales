import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Reducer } from './reducers/Reducer';

import 'bulma/css/bulma.css';
import './styles.scss';


export const store = createStore(Reducer);
console.log('i am the store: ', store);


const rootElement = document.getElementById('root');
ReactDOM.render(

<Provider store={store}>
    <App />
  </Provider>, rootElement);
