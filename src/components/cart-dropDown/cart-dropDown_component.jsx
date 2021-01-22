import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button_component';
import CartItem from '../cart-item/cart-item_component';
import {selectCartItems} from '../../redux/cart/cart_selector';
import '../cart-dropDown/cart-dropDown_style.scss';


const CartDropDown = ({CartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                CartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>)
                )
            }
        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
);

const mapStateToProps = ( state) => ({
    CartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);