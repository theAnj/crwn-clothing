import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button_component';
import CartItem from '../cart-item/cart-item_component';

import { createStructuredSelector } from 'reselect';
import {selectCartItems} from '../../redux/cart/cart_selector';

import '../cart-dropDown/cart-dropDown_style.scss';
import { toggleCartHidden } from '../../redux/cart/cart_action';


const CartDropDown = ({CartItems , history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { CartItems.length ?(
                CartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>)
                ))
            : (
                <span className='empty-message'>Your cart is empty</span>
            )
            }
        </div>
        <CustomButton onClick={()=> {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}> 
                GO TO CHECKOUT 
            </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    CartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));