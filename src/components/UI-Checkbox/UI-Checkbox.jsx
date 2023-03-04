import './UI-Checkbox.scss';
import React from 'react';
import checkmarkImg from '../../assets/checkmark.svg';
import { getClassnamesFromObject } from "../../utils/get-classnames-from-object";

const UiCheckbox = ({checked, disabled, onChange, error}) => {
  const visibleCheckboxClassNames = getClassnamesFromObject({
    'UiCheckbox__visibleCheckbox': true,
    'UiCheckbox__visibleCheckbox--active': checked,
    'UiCheckbox__visibleCheckbox--disabled': disabled,
    'UiCheckbox__visibleCheckbox--error': error,
  });
  return (
    <label className='UiCheckbox'> 
      <input className='UiCheckbox__hiddenCheckbox' type="checkbox" onChange={onChange} disabled={disabled} checked={checked}/>
      <span className={visibleCheckboxClassNames}>
        { !!checked && <img src={checkmarkImg} alt='checked' className='UiCheckbox__checkmarkImg' />}
      </span>
    </label>
  );
};

export { UiCheckbox };