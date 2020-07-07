import React from 'react';
import Home from './components/Home'
import { Route } from 'react-router-dom'
import RegisterCustomer from './components/Register/RegisterCustomer'
import RegisterStore from './components/Register/RegisterStore'
import RegisterDeliverer from './components/Register/RegisterDeliverer'
import StoreHome from './components/Store/StoreHome/StoreHome'
import CustomerHome from './components/Customer/CustomerHome/CustomerHome'
import DelivererHome from './components/Deliverer/DelivererHome/DelivererHome'

function App() {
  return (
    <div>
      <Route exact path='/' component={Home} />

      <Route exact path='/register/customer' component={RegisterCustomer} />
      <Route exact path='/register/store' component={RegisterStore} />
      <Route exact path='/register/deliverer' component={RegisterDeliverer} />

      <Route exact path='/store/home' component={StoreHome} />
      <Route exact path='/customer/home' component={CustomerHome} />
      <Route exact path='/deliverer/home' component={DelivererHome} />
    </div>
  );
}

export default App;
