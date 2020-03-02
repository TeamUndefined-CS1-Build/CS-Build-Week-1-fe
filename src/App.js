import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={Login}></Route>
    </div>
  );
}

export default App;
