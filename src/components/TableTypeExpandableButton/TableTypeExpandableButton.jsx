import './TableTypeExpandableButton.scss';
import React, { useState } from 'react';

const TableTypeExpandableButton = ({types, current, onChange}) => {
  const [open, setOpen] = useState(false);
  const onChangeType = (value) => {
    if (!types.includes(value)) return false;
    setOpen(false);
    onChange(value);
  }

  return (
    <div className='TableTypeExpandableButton'>
      <button onClick={() => setOpen(!open)} className='TableTypeExpandableButton__primaryTypeButton'>
        <span className='TableTypeExpandableButton__buttonIcon'>☰</span>
        <span className='TableTypeSingleButton__buttonText'>{current}</span>
      </button>
      {open &&
        <div className='TableTypeExpandableButton__dropdown'>
          {types.map(el =>
            <span
              key={el}
              onClick={() => onChangeType(el)}
              className={`TableTypeExpandableButton__typeButton${el===current?' TableTypeExpandableButton__typeButton--active': ''}`}
            >
              {el}
            </span>
          )}
        </div>
      }
    </div>
  )
}

export { TableTypeExpandableButton };