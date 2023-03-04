import './FS-Angular.scss';
import React from 'react';
import { FormSection } from "../FormSection/FormSection";
import { UISelectButtonWrapped } from "../UI-SelectButtonWrapped/UI-SelectButtonWrapped";

const FsAngular = ({state, error, setError, onChange}) => {
  const { angular } = state;
  const changeAngularData = (value) => {
    onChange({...angular, selected: value});
  }
  return (
    <div className='FsAngular'>
      <FormSection title='Угловой стол:' inline hr>
        <UISelectButtonWrapped
          values={angular.options}
          current={angular.selected}
          onChange={changeAngularData}
          disabled={[]}
          errors={error}
          target='angular'
        />
      </FormSection>
    </div>
  );
};

export { FsAngular };