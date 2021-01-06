import React from 'react';

import '@babel/core';
import './homepage.style.scss';
import '../../components/directory/directory_component';
import Directory from '../../components/directory/directory_component';

const HomePage = () => (
  <div className='homepage'>
    <Directory />
  </div>
);

export default HomePage;