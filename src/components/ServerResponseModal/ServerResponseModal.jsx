import './ServerResponseModal.scss';
import React from 'react';
import { Portal } from "react-portal";
import { getClassnamesFromObject } from "../../utils/get-classnames-from-object";

const ServerResponseModal = ({title, children, onClose, type='default'}) => {
  const titleClassNames = getClassnamesFromObject({
    'ServerResponseModal__title': true,
    'ServerResponseModal__title--error': type === 'error',
    'ServerResponseModal__title--success': type === 'success',
    'ServerResponseModal__title--warning': type === 'warning',
  });
  return (
    <Portal node={document.body}>
      <div className='ServerResponseModal'>
        <div className='ServerResponseModal__modal'>
          <span className={titleClassNames}>{title}</span>
          <span className='ServerResponseModal__message'>{children}</span>
          <button className='ServerResponseModal__closeBtn' onClick={onClose}>Ок</button>
        </div>
      </div>
    </Portal>
  );
};

export { ServerResponseModal };