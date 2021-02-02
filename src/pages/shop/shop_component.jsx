import React from 'react';
import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview_component';
import CollectionPage from '../collection-page/collection-page_component';
import './shop_style.scss';

const ShopPage =({match})=>(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default (ShopPage);