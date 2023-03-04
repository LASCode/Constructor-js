import './ProductTypesSection.scss';
import React, { useState } from 'react';
import { TableTypeSingleButton } from "../TableTypeSingleButton/TableTypeSingleButton";
import { TableTypeExpandableButton } from "../TableTypeExpandableButton/TableTypeExpandableButton";


const ProductTypesSection = ({typesArray, current, onChange}) => {
  return (
    <div className='ProductTypesSection'>
      <div className='ProductTypesSection__full'>
        {typesArray.map(el =>
          <TableTypeSingleButton key={el} type={el} active={el===current} onClick={(type) => onChange(type)}/>
        )}
      </div>
      <div className='ProductTypesSection__dropdown'>
        <TableTypeExpandableButton types={typesArray} current={current} onChange={(type) => onChange(type)}/>
      </div>
      <a className='ProductTypesSection__backlink' href='https://www.teras-mebel.ru/katalog'>Вернуться в каталог</a>
    </div>
  );
};

export { ProductTypesSection };