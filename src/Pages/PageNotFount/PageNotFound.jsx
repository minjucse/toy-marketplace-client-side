import React from 'react';
import useTitle from '../../hooks/useTitle';

const PageNotFound = () => {
  useTitle('Not Found');
  return (
    <div className='text-warning '>
      <img src="https://c8.alamy.com/comp/2D9R7MJ/error-404-page-not-found-vector-illustration-for-web-design-2D9R7MJ.jpg" alt="" />
    </div>
  )
}

export default PageNotFound