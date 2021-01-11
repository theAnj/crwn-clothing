import React , {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header_component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop_component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up_component';
import {auth} from './components/firebase/firebase_utiles';

class App extends Component {
    constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth =null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){
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
}

export default App;
