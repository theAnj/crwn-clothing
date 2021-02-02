import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory_selector';

import MenuItem from '../menu_item/menu_item_components';

import '../directory/directory_style.scss';

const Directory = ({sections}) => (
  <div className='directory-menu'>
    {
      sections.map(({id, ...otherSectionProps})=> (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

                   

export default connect(mapStateToProps)(Directory);