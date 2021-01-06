import React from 'react';

import '../menu_item/menu_item_style.scss';

const MenuItem = ({title, size, imageUrl}) => (
    <div 
        style={{
                backgroundImage:`url(${imageUrl})`
                }}   
            className={`${size} menu-item`}>
        <div className='content'>
            <div className='title'>{title}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;