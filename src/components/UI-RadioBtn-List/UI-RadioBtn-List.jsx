import './UI-RadioBtn-List.scss';
import React, { useContext } from 'react';
import { WithError } from "../WithError/WithError";
import { UiRadioBtn } from "../UI-RadioBtn/UI-RadioBtn";
import { ErrorContext } from "../../index";

const UiRadioBtnList = ({values, selected, name, errors, target, checkErrorFunc=()=>true, checkDisabledFunc=()=>false, throwErrorFunc=()=>true, onChange}) => {
  const onLabelClick = () => {
    if (!checkErrorFunc()) throwErrorFunc();
  }
  return (
    <WithError targetName={target} errorArr={errors}>
      <div className='UiRadioBtnList'>
        { values.map((el, index) =>
          <label className='UiRadioBtnList__label' onClick={()=> onLabelClick()} key={el}>
            <UiRadioBtn
              name={name}
              onChange={onChange}
              value={el}
              checked={selected===el}
              error={errors.some(el=>el.target === target)}
              disabled={checkDisabledFunc()}
            />
          </label>
        )}
      </div>
    </WithError>
  );
};

export { UiRadioBtnList };