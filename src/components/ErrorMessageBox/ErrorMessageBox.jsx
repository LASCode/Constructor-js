import './ErrorMessageBox.scss';
import React, { useEffect } from 'react';
import { Portal } from "react-portal";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import bulbImg from '../../assets/bulb.svg'

const ErrorMessageBox = ({errorsArray, changeMessageArray}) => {
  const deleteError = (id) => {
    changeMessageArray(errorsArray.filter(el => el.id !== id));
  }
  return (
    <Portal node={document.body}>
      <TransitionGroup className='ErrorMessageBox' appear={true}>
        {errorsArray.map((el, i) =>
          <CSSTransition in={!!el.id} timeout={1000} key={el.message+el.target}>
            <div className='ErrorMessageBox__errorMessage'>
              <div className='ErrorMessageBox__imageContainer'>
                <img className='ErrorMessageBox__img' src={bulbImg} alt=''/>
              </div>
              <div className='ErrorMessageBox__text'>
                {el.message}
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Portal>
  );
};

export { ErrorMessageBox };