import React from 'react';

import '../collection_item/collection-item_style.scss';
import CustomButton from '../custom-button/custom-button_component';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart_action';

const CollectionItem = ({item , addItem}) => {
    const {imageUrl,name,price} = item;
    return(
    <div  className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={()=> addItem(item)} inverted>
            Add To Cart
        </CustomButton>
    </div>
)};

const mapToDispatchProps = Dispatch => ({
    addItem: item => Dispatch(addItem(item))
})

export default connect(null,mapToDispatchProps)(CollectionItem);