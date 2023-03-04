import './TablePartImage.scss';
import React from 'react';
import { CSSTransition } from "react-transition-group";

const TablePartImage = ({when, src}) => {
  return (
    <CSSTransition in={when} timeout={500} unmountOnExit appear>
      <img className='TablePartImage__img' src={src} alt=''/>
    </CSSTransition>
  );
};

export { TablePartImage };