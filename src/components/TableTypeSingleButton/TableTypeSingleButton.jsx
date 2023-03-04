import './TableTypeSingleButton.scss';
import React from 'react';
import { getClassnamesFromObject } from "../../utils/get-classnames-from-object";

const TableTypeSingleButton = ({type, active, onClick}) => {
  const buttonClassNames = getClassnamesFromObject({
    'TableTypeSingleButton': true,
    'TableTypeSingleButton--active': active,
  });
  return (
    <button className={buttonClassNames} onClick={() => onClick(type)}>
      {type}
    </button>
  )
}

export { TableTypeSingleButton };