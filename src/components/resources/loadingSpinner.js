import React from 'react';
import Loader from '../../images/loading.gif';

export const LoadingSpinner = (props) => (

    <div className='loading-placeholder'>
      <img src={Loader} alt='loader' />
      {props.message ? `${props.message}` : ''}
    </div>

);

export default LoadingSpinner;
