import './WithError.scss';
import React, { useEffect } from 'react';
import warningIcon from '../../assets/warning.png'

const WithError = ({targetName, errorArr, children}) => {
  return (
    <div className='ErrorHandler'>
      {errorArr.some(el=>el.target === targetName) &&
        <div className='ErrorHandler__error'>
          <img className='ErrorHandler__img' src={warningIcon} alt=""/>
        </div>
      }
      {children}
    </div>
  );
};

export { WithError };