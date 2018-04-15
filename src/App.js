import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import allReducers from "./reducers";
import { WebPage } from './components/WebPage';

const store = createStore (allReducers);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <WebPage />
        </Provider>
    );
  }
}

export default App;
