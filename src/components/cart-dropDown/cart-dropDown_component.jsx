import React from 'react';

import CustomButton from '../custom-button/custom-button_component';

import '../cart-dropDown/cart-dropDown_style.scss';
import CartIcon from '../cart-icon/cart-icon_component';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-item'></div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
);

export default CartDropDown;