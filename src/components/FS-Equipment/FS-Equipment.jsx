import './FS-Equipment.scss';
import React, { useEffect, useMemo, useState } from 'react';
import { FormSection } from "../FormSection/FormSection";
import { WithError } from "../WithError/WithError";
import { UiCheckboxWrapped } from "../UI-CheckboxWrapped/UI-CheckboxWrapped";

const FsEquipment = ({state, error, setError, onChange}) => {
  const { additionalEquipment, frame, type } = state;
  const { baseFrame, separatingFrame } = frame;
  const changeFrameData = (target, value) => {
    onChange({...additionalEquipment, [target]: {...additionalEquipment[target], selected: value}})
  }
  const fullWidthThrowErrorFunc = () => {
    switch (true) {
      case !baseFrame.selected: setError({target: 'frame.baseFrame', message: 'Сначала добавьте заднюю стойку.'}); break;
      case separatingFrame.selected: setError({target: 'frame.separatingFrame', message: 'Сначала уберите разделительную раму.'}); break;
      default: setError({target: null, message: 'Произошла неизвестная ошибка.'}); break;
    }
  }
  const fullWidthCheckErrorFunc = () => {
    switch (type) {
      case 'Dual': return baseFrame.selected;
      default: return baseFrame.selected && !separatingFrame.selected;
    }
  }
  const fullWidthCheckDisabledFunc = () => {
    switch (type) {
      case 'Dual': return !baseFrame.selected;
      default: return !baseFrame.selected || separatingFrame.selected;
    }
  }
  const halfWidthThrowErrorFunc = () => {
    switch (true) {
      case !separatingFrame.selected: setError({target: 'frame.separatingFrame', message: 'Сначала добавьте разделительную раму.'}); break;
      default: setError({target: null, message: 'Произошла неизвестная ошибка.'}); break;
    }
  }
  const halfWidthCheckErrorFunc = () => {
    switch (type) {
      default: return separatingFrame.selected;
    }
  }
  const halfWidthCheckDisableFunc = () => {
    switch (type) {
      default: return !baseFrame.selected || !separatingFrame.selected;
    }
  }

  const pages = [
    {
      name: 'Во всю ширину',
      items: [
        {
          target: 'fullPerforatedPlate',
          title: `Перфорированный экран${type==='Dual'?' Dual':''}`,
          checkFunc: fullWidthCheckErrorFunc,
          disableFunc: fullWidthCheckDisabledFunc,
          errorFunc: fullWidthThrowErrorFunc,
        },
        {
          target: 'fullHighPerforatedPlate',
          title: `Перфорированный экран высокий${type==='Dual'?' Dual':''}`,
          checkFunc: fullWidthCheckErrorFunc,
          disableFunc: fullWidthCheckDisabledFunc,
          errorFunc: fullWidthThrowErrorFunc,
        },
        {
          target: 'fullPlank',
          title: `Планка для крепления лотков${type==='Dual'?' Dual':''}`,
          checkFunc: fullWidthCheckErrorFunc,
          disableFunc: fullWidthCheckDisabledFunc,
          errorFunc: fullWidthThrowErrorFunc,
        },
        {
          target: 'fullWiringPanel',
          title: `Электромонтажная панель${type==='Dual'?' Dual':''}`,
          checkFunc: fullWidthCheckErrorFunc,
          disableFunc: fullWidthCheckDisabledFunc,
          errorFunc: fullWidthThrowErrorFunc,
        },
      ],
    },
    {
      name: 'Половинные',
      items: [
        {
          target: 'leftPerforatedPlate',
          title: `Перфорированный экран (Левый)`,
          checkFunc: halfWidthCheckErrorFunc,
          disableFunc: halfWidthCheckDisableFunc,
          errorFunc: halfWidthThrowErrorFunc,
        },
        {
          target: 'rightPerforatedPlate',
          title: `Перфорированный экран (Правый)`,
          checkFunc: halfWidthCheckErrorFunc,
          disableFunc: halfWidthCheckDisableFunc,
          errorFunc: halfWidthThrowErrorFunc,
        },
        {
          target: 'leftPlank',
          title: `Планка для крепления лотков (Левая)`,
          checkFunc: halfWidthCheckErrorFunc,
          disableFunc: halfWidthCheckDisableFunc,
          errorFunc: halfWidthThrowErrorFunc,
        },
        {
          target: 'rightPlank',
          title: `Планка для крепления лотков (Правая)`,
          checkFunc: halfWidthCheckErrorFunc,
          disableFunc: halfWidthCheckDisableFunc,
          errorFunc: halfWidthThrowErrorFunc,
        },
        {
          target: 'leftWiringPanel',
          title: `Электромонтажная панель (Левая)`,
          checkFunc: halfWidthCheckErrorFunc,
          disableFunc: halfWidthCheckDisableFunc,
          errorFunc: halfWidthThrowErrorFunc,
        },
        {
          target: 'rightWiringPanel',
          title: `Электромонтажная панель (Правая)`,
          checkFunc: halfWidthCheckErrorFunc,
          disableFunc: halfWidthCheckDisableFunc,
          errorFunc: halfWidthThrowErrorFunc,
        },
      ],
    }
  ];
  const formattedPages = [
    ...pages
      .map(el => ({...el, items: el.items.filter(el => !additionalEquipment[el.target].hidden)}))
      .filter(el => el.items.length > 0)
  ]
  const [currentPage, setCurrentPage] = useState(formattedPages[0].name);
  const pageIsFound = formattedPages.some(el => el.name === currentPage);
  useEffect(() => {
    if (!pageIsFound) {
      setCurrentPage(formattedPages[0].name)
    }
  }, [formattedPages])
  return (
    <FormSection title='Дополнительное оснащение:'>
      <div className='FSEquipment'>
        <div className='FSEquipment__pageList'>
          {
            formattedPages.map(el =>
                <button
                  className={`FSEquipment__pageButton${currentPage === el.name?' FSEquipment__pageButton--active':''}`}
                  onClick={()=>setCurrentPage(el.name)}
                  key={el.name}
                >
                  {el.name}
                </button>
              )
          }
        </div>
        <div className='FSEquipment__fullPage'>
          { pageIsFound && formattedPages.find(el => el.name === currentPage).items.map((el, index) =>
            <UiCheckboxWrapped
              key={index}
              target={`additionalEquipment.${el.target}`}
              errors={error}
              checked={additionalEquipment[el.target].selected}
              onChange={(value) => changeFrameData(el.target, value.target.checked)}
              checkDisabledFunc={el.disableFunc}
              throwErrorFunc={el.errorFunc}
              checkErrorFunc={el.checkFunc}
              title={el.title}
            />
          )}
        </div>
      </div>
    </FormSection>
  );
};

export { FsEquipment };