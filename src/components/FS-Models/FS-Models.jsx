import './FS-Models.scss';
import React from 'react';
import { FormSection } from "../FormSection/FormSection";
import { UISelectButtonWrapped } from "../UI-SelectButtonWrapped/UI-SelectButtonWrapped";

const FsModels = ({state, error, setError, onChange}) => {
  const { models } = state;
  const changeModelData = (value) => {
    onChange({...models, selected: value});
  }
  return (
    <div className={'FSModels'}>
      <FormSection title='Исполнение:' inline>
        <UISelectButtonWrapped
          values={models.options}
          current={models.selected}
          onChange={changeModelData}
          disabled={[]}
          errors={error}
          target='models'
        />
      </FormSection>
    </div>
  );
};

export { FsModels };