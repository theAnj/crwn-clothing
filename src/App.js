import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header_component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop_component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up_component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
