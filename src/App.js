import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './utils/privateRoute';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={Login}></Route>
      <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
    </div>
  );
}

export default App;
