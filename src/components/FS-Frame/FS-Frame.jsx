import './FS-Frame.scss';
import React, { useContext } from 'react';
import { FormSection } from "../FormSection/FormSection";
import { WithError } from "../WithError/WithError";
import { UiCheckboxWrapped } from "../UI-CheckboxWrapped/UI-CheckboxWrapped";

const FsFrame = ({state, error, setError, onChange}) => {
  const { frame } = state;
  const { baseFrame, separatingFrame } = frame;
  const changeFrameData = (target, value) => {
    onChange({...frame, [target]: {...frame[target], selected: value}})
  }
  return (
    <div className='FsFrame'>
      <FormSection title='Стойки:' inline>
        <div className='FsFrame__body'>
          { !baseFrame.hidden &&
            <UiCheckboxWrapped
              target='frame.baseFrame'
              errors={error}
              checked={baseFrame.selected}
              onChange={(value) => changeFrameData('baseFrame', value.target.checked)}
              title='Комплект задних стоек'
            />
          }
          { !separatingFrame.hidden &&
            <UiCheckboxWrapped
              target='frame.separatingFrame'
              errors={error}
              checked={separatingFrame.selected}
              onChange={(value) => changeFrameData('separatingFrame', value.target.checked)}
              checkDisabledFunc={() => !baseFrame.selected}
              checkErrorFunc={() => baseFrame.selected}
              throwErrorFunc={() => setError({target: 'frame.baseFrame', message: 'Сначала установите комплект задних стоек!'})}
              title='Разделительная рама'
            />
          }
        </div>
      </FormSection>
    </div>
  );
};

export { FsFrame };