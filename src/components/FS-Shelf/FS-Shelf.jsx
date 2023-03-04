import './FS-Shelf.scss';
import React from 'react';
import { FormSection } from "../FormSection/FormSection";
import { FormItemContainer } from "../FormItemContainer/FormItemContainer";
import { UISelectButtonWrapped } from "../UI-SelectButtonWrapped/UI-SelectButtonWrapped";
import { UiCheckboxWrapped } from "../UI-CheckboxWrapped/UI-CheckboxWrapped";

const FsShelf = ({state, error, setError, onChange}) => {
  const { shelf } = state;
  const { baseShelf, additionalShelf, bottomShelf } = shelf;
  const changeShelfData = (target, value) => {
    onChange({...shelf, [target]: {...shelf[target], selected: value}});
  }
  const changeShelfIsActive = (target, value) => {
    onChange({...shelf, [target]: {...shelf[target], isActive: value}});
  }
  const baseShelfLabel = <UiCheckboxWrapped
    target='shelf.baseShelf'
    checked={baseShelf.isActive}
    onChange={e => changeShelfIsActive('baseShelf', e.target.checked)}
    errors={error}
    title='Основная'
  />
  const additionalShelfLabel = <UiCheckboxWrapped
    target='shelf.additionalShelf'
    checked={additionalShelf.isActive}
    onChange={e => changeShelfIsActive('additionalShelf', e.target.checked)}
    errors={error}
    title='Дополнительная'
  />
  const bottomShelfLabel = <UiCheckboxWrapped
    target='shelf.bottomShelf'
    checked={bottomShelf.isActive}
    onChange={e => changeShelfIsActive('bottomShelf', e.target.checked)}
    errors={error}
    title='Нижняя'
  />

  return (
    <div className='FsShelf'>
      <FormSection title='Полки:' >
        <div className='FsShelf__body'>
          { !baseShelf.hidden &&
            <FormItemContainer title={baseShelfLabel} >
              <UISelectButtonWrapped
                values={baseShelf.options}
                current={baseShelf.selected}
                onChange={(value) => changeShelfData('baseShelf', value)}
                disabled={!baseShelf.isActive?baseShelf.options:[]}
                errors={error}
                target='shelf.baseShelf'
              />
            </FormItemContainer>
          }
          { !additionalShelf.hidden &&
            <FormItemContainer title={additionalShelfLabel}>
              <UISelectButtonWrapped
                values={additionalShelf.options}
                current={additionalShelf.selected}
                onChange={(value) => changeShelfData('additionalShelf', value)}
                disabled={!additionalShelf.isActive?additionalShelf.options:[]}
                errors={error}
                target='shelf.additionalShelf'
              />
            </FormItemContainer>
          }
          { !bottomShelf.hidden &&
            <FormItemContainer title={bottomShelfLabel}>
              <UISelectButtonWrapped
                values={bottomShelf.options}
                current={bottomShelf.selected}
                onChange={(value) => changeShelfData('bottomShelf', value)}
                disabled={!bottomShelf.isActive?bottomShelf.options:[]}
                errors={error}
                target='shelf.bottomShelf'
              />
            </FormItemContainer>
          }
        </div>
      </FormSection>
    </div>
  );
};

export { FsShelf };