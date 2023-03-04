import './OptionsButton.scss';
import React from 'react';

//{
//  values: T[],
//  disabled: T[],
//  current: T,
//  onChange: (value: T) => void,
//}

const OptionsButton = ({values=[], current='', disabled = [], onChange}) => {
  const getButtonClassnames = (value, current) => {
    return value === current ? 'OptionsButton__button OptionsButton__button--active' : 'OptionsButton__button';
  }
  return (
    <div className='OptionsButton'>
      { values.map(el =>
        <button
          className={getButtonClassnames(el, current)}
          disabled={disabled.includes(el)}
          onClick={()=>onChange(el)}
          key={el}
        >
          {el}
        </button>
      )}
    </div>
  );
};

export { OptionsButton };