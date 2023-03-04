import './CardEstimate.scss';
import React from 'react';

const CardEstimate = ({data}) => {
  return (
    <div className='CardEstimate'>
      <h4 className='CardEstimate__title'>Выбранная комплектация</h4>
      <table className='CardEstimate__table'>
        <thead>
          <tr>
            <th>Название</th>
            <th>Размер</th>
          </tr>
        </thead>
        <tbody>
          {data.map(el =>
            <tr key={el.name}>
              <td>{el.name}</td>
              <td>{el.size}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export { CardEstimate };