import React from 'react';
import {withRouter} from 'react-router-dom';

import '../menu_item/menu_item_style.scss';

const MenuItem = ({title, size, imageUrl, history, linkUrl,match}) => (
    <div 
        style={{
                backgroundImage:`url(${imageUrl})`
                }}   
            className={`${size} menu-item`} 
            onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='content'>
            <div className='title'>{title}</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);