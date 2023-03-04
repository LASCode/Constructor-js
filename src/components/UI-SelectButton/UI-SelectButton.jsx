import './UI-SelectButton.scss';
import React from 'react';
import { getClassnamesFromObject } from "../../utils/get-classnames-from-object";

const UISelectButton = ({onClick, disabled, isActive, children}) => {
  const buttonClassNames = getClassnamesFromObject({
    'UISelectButton': true,
    'UISelectButton--active': isActive,
  });
  return (
    <button
      className={buttonClassNames}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { UISelectButton };