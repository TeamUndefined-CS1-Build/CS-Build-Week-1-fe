import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './utils/privateRoute';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Landing from './components/Landing';


function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Landing} />
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      <PrivateRoute exact path='/home' component={Home}></PrivateRoute>
    </div>
  );
}
// commit for staging
export default App;
