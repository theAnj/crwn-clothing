import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart_action';

import '../cart-icon/cart-icon_style.scss';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = Dispatch => ({
    toggleCartHidden: () => Dispatch(toggleCartHidden())
});



export default connect (null, mapDispatchToProps)(CartIcon);