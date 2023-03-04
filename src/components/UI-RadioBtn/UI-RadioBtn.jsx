import './UI-RadioBtn.scss';
import React from 'react';
import { getClassnamesFromObject } from "../../utils/get-classnames-from-object";

const UiRadioBtn = ({checked, disabled, onChange, name, value, error}) => {
  const visibleRadioClassNames = getClassnamesFromObject({
    'UiRadioBtn__visibleRadio': true,
    'UiRadioBtn__visibleRadio--active': checked,
    'UiRadioBtn__visibleRadio--disabled': disabled,
    'UiRadioBtn__visibleRadio--error': error,
  });
  return (
    <label className='UiRadioBtn'>
      <input className='UiRadioBtn__hiddenRadio' type='radio' name={name} value={value} disabled={disabled} checked={checked} onChange={onChange}/>
      <span className={visibleRadioClassNames} />
      <span>{value}</span>
    </label>
  );
};

export { UiRadioBtn };