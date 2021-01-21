import React from 'react';

import CollectionItem from '../collection_item/collection-item_component';
import '../collection_preview/collection_preview_style.scss';


const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                items
                .filter((item,idx)=> idx <4 )
                .map((item)=> 
                    < CollectionItem key={item.id} item={item} />)
                }
            </div>
    </div>
)
export default CollectionPreview;