import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart_selector';

import {toggleCartHidden} from '../../redux/cart/cart_action';

import '../cart-icon/cart-icon_style.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {itemCount} </span>
    </div>
);

const mapDispatchToProps = Dispatch => ({
    toggleCartHidden: () => Dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})



export default connect (mapStateToProps, mapDispatchToProps)(CartIcon);