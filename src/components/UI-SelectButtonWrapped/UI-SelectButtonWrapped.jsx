import './UI-SelectButtonWrapped.scss';
import React from 'react';
import { WithError } from "../WithError/WithError";
import { UISelectButton } from "../UI-SelectButton/UI-SelectButton";

const UISelectButtonWrapped = ({values, current, onChange, errors, target, disabled}) => {
  return (
      <div className='UISelectButtonWrapped'>
        {values.map((el, index) =>
          <UISelectButton
            key={el}
            isActive={current===el}
            disabled={disabled.includes(el)}
            onClick={() => onChange(el)}
          >
            {el}
          </UISelectButton>
        )}
      </div>
  );
};

export { UISelectButtonWrapped };