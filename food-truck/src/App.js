import React from 'react';
import Home from './components/Home'
import { Route } from 'react-router-dom'
import RegisterCustomer from './components/Register/RegisterCustomer'
import RegisterStore from './components/Register/RegisterStore'
import RegisterDeliverer from './components/Register/RegisterDeliverer'

function App() {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/register/customer' component={RegisterCustomer} />
      <Route exact path='/register/store' component={RegisterStore} />
      <Route exact path='/register/deliverer' component={RegisterDeliverer} />
    </div>
  );
}

export default App;
