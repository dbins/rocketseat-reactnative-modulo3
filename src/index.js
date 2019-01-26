import React, { Component } from 'react';
import './config/ReactotronConfig';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';
import Routes from './routes';

// const App = () => (
//  <Provider store={store}>
//    <TodoList />
//  </Provider>
// );

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
export default App;
