import './UI-Button.scss';
import React from 'react';
import { getClassnamesFromObject } from "../../utils/get-classnames-from-object";

const UiButton = ({adaptive, onClick, children, ...otherProps}) => {
  const buttonClassNames = getClassnamesFromObject({
    'UiButton': true,
    'UiButton--adaptive': adaptive,
  });
  return (
    <button className={buttonClassNames} onClick={onClick} {...otherProps}>{children}</button>
  );
};

export { UiButton };