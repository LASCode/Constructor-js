import './FS-Light.scss';
import React from 'react';
import { FormSection } from "../FormSection/FormSection";
import { WithError } from "../WithError/WithError";
import { UiRadioBtnList } from "../UI-RadioBtn-List/UI-RadioBtn-List";

const FsLight = ({state, error, setError, onChange}) => {
  const { light, frame, shelf } = state;
  const { lightKit, mountKit, additionalLightKit } = light;
  const { baseFrame } = frame;
  const { baseShelf } = shelf;
  const changeLightKitData = (target, value) => {
    onChange({...light, [target]: {...light[target], selected: value}})
  }

  return (
    <>
      {!mountKit.hidden &&
          <FormSection title='Комплект крепления освещения:'>
            <div className='FsLight__container'>
              <UiRadioBtnList
                  name='mountKit'
                  target='light.mountKit'
                  values={mountKit.options}
                  selected={mountKit.selected}
                  errors={error}
                  onChange={(e) => changeLightKitData('mountKit', e.target.value)}
                  checkDisabledFunc={() => !baseFrame.selected}
                  checkErrorFunc={() => baseFrame.selected}
                  throwErrorFunc={() => setError({target: 'frame.baseFrame', message: 'Сначала установите задние стойки'})}
              />
            </div>
          </FormSection>
      }
      {!lightKit.hidden &&
        <FormSection title='Освещение рабочей поверхности:'>
          <div className='FsLight__container'>
            <UiRadioBtnList
              name='lightKit'
              target='light.lightKit'
              values={lightKit.options}
              selected={lightKit.selected}
              errors={error}
              onChange={(e) => changeLightKitData('lightKit', e.target.value)}
              checkDisabledFunc={() => !baseFrame.selected || (mountKit.selected === 'No' && baseFrame.selected)}
              checkErrorFunc={() => mountKit.selected !== 'No'}
              throwErrorFunc={() => setError({target: 'light.mountKit', message: 'Сначала установите комплект крепления освещения'})}
            />
          </div>
        </FormSection>
      }
      {!additionalLightKit.hidden &&
        <FormSection title='Доп. освещение под основную полку:'>
          <div className='FsLight__container'>
            <UiRadioBtnList
              name='additionalLightKit'
              target='light.additionalLightKit'
              values={additionalLightKit.options}
              selected={additionalLightKit.selected}
              errors={error}
              onChange={(e) => changeLightKitData('additionalLightKit', e.target.value)}
              checkDisabledFunc={() => !baseFrame.selected || !baseShelf.isActive}
              checkErrorFunc={() => baseShelf.isActive}
              throwErrorFunc={() => setError({target: 'shelf.baseShelf', message: 'Сначала установите основную полку!'})}
            />
          </div>
        </FormSection>
      }
    </>
  );
};

export { FsLight };