import React , {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';


import Header from './components/header/header_component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop_component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up_component';
import CheckOutPage from './pages/checkOut/checkOut_component';

import {auth, createUserProfileDocument} from './firebase/firebase_utiles';
import { setCurrentUser } from './redux/user/user_action';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user_selector';



class App extends Component {
    constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth =null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
       });
     }

     setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route 
            exact path='/signin' 
              render = {()=> this.props.currentUser
              ? (<Redirect to='/' />)
              : <SignInAndSignUpPage />
              }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect (mapStateToProps, mapDispatchToProps) (App);
