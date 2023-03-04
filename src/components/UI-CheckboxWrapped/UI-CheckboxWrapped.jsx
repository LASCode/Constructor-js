import './UI-CheckboxWrapped.scss';
import React from 'react';
import { WithError } from "../WithError/WithError";
import { UiCheckbox } from "../UI-Checkbox/UI-Checkbox";

const UiCheckboxWrapped = ({checked, onChange, errors, checkErrorFunc=()=>true, checkDisabledFunc=()=>false, throwErrorFunc=()=>true, target, title}) => {
  const onLabelClick = (e) => {
    if (!checkErrorFunc()) {
      throwErrorFunc();
    }
  }
  return (
    <WithError targetName={target} errorArr={errors}>
      <label className='UiCheckboxWrapped' onClick={() => onLabelClick()}>
        <UiCheckbox
          checked={checked}
          onChange={onChange}
          error={errors.some(el=>el.target === target)}
          disabled={checkDisabledFunc()}
        />
        { title }
      </label>
    </WithError>
  );
};

export { UiCheckboxWrapped };