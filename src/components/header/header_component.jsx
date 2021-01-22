import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {auth} from '../../firebase/firebase_utiles';
import {ReactComponent as Logo} from '../../assets/crown.svg.svg';
import '../header/header_style.scss';

import CartIcon from '../cart-icon/cart-icon_component';
import CartDropDown from '../cart-dropDown/cart-dropDown_component';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart_selector';
import { selectCurrentUser } from '../../redux/user/user_selector';

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser 
                ? 
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }

            <CartIcon />    
        </div>
            {
                hidden ? null : <CartDropDown />
            }
    </div>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);