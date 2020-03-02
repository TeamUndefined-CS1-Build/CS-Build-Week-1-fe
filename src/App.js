import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './utils/privateRoute';
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
    </div>
  );
}
// commit for staging
export default App;
