import React from 'react';
import Home from './components/Home'
import { Route } from 'react-router-dom'
import ProtectedRoute from './components/utils/ProtectedRoute'
import RegisterCustomer from './components/Register/RegisterCustomer'
import RegisterStore from './components/Register/RegisterStore'
import RegisterDeliverer from './components/Register/RegisterDeliverer'
import Login from './components/Login/Login'
import StoreHome from './components/Store/StoreHome/StoreHome'
import StoreHomePage from './components/Store/StoreHomePage/StoreHomePage'
import CustomerHome from './components/Customer/CustomerHome/CustomerHome'
import DelivererHome from './components/Deliverer/DelivererHome/DelivererHome'

function App() {
  return (
    <div>
      <Route exact path='/' component={Home} />

      <Route exact path='/register/customer' component={RegisterCustomer} />
      <Route exact path='/register/store' component={RegisterStore} />
      <Route exact path='/register/deliverer' component={RegisterDeliverer} />

      <Route exact path='/login' component ={Login} />

      <ProtectedRoute exact path='/store/home' component={StoreHome} />
      <ProtectedRoute exact path='/customer/home' component={CustomerHome} />
      <ProtectedRoute exact path='/deliverer/home' component={DelivererHome} />

      <ProtectedRoute exact path='/store/store/:id' component={StoreHomePage} />
    </div>
  );
}

export default App;
