import './FS-Accessories.scss';
import React from 'react';
import { FormSection } from "../FormSection/FormSection";
import { UiCheckboxWrapped } from "../UI-CheckboxWrapped/UI-CheckboxWrapped";

const FsAccessories = ({state, error, setError, onChange}) => {
  const { accessories, light, frame, type, size } = state;
  const { mountKit } = light;
  const { baseFrame } = frame;
  const changeAccessoriesData = (target, value) => {
    onChange({...accessories, [target]: {...accessories[target], selected: value}})
  }

  const toolbarThrowErrorFunc = () => {
    switch (type) {
      case 'Modern': return false;
      default: setError({target: 'light.mountKit', message: 'Сначала добавьте крепление для светильника!'});
    }
  }
  const toolbarCheckErrorFunc = () => {
    switch (type) {
      case 'Modern': return false;
      // case 'Dual': return
      default: return mountKit.selected !== 'No';
    }
  }
  const toolbarCheckDisabledFunc = () => {
    switch (type) {
      case 'Modern': return false;
      default: return mountKit.selected === 'No';
    }
  }

  const accessoriesItems = [
    {
      target: 'groundingNode',
      title: 'Объединительный узел заземления',
    },
    {
      target: 'groundingKit',
      title: 'Колодка заземления',
    },
    {
      target: 'lockerDoubleFront',
      title: 'Подвесная тумба на 2 ящика',
    },
    {
      target: 'lockerDoubleBack',
      title: 'Подвесная тумба на 2 ящика (Дальняя)',
    },
    {
      target: 'lockerTripleFront',
      title: 'Подвесная тумба на 3 ящика',
    },
    {
      target: 'lockerTripleBack',
      title: 'Подвесная тумба на 3 ящика (Дальняя)',
    },
    {
      target: 'computerAdapterFront',
      title: 'Подставка под системный блок подвесная',
    },
    {
      target: 'computerAdapterBack',
      title: 'Подставка под системный блок подвесная (Дальняя)',
    },
    {
      target: 'toolbarFront',
      title: 'Инструментальная планка',
      checkFunc: toolbarCheckErrorFunc,
      disableFunc: toolbarCheckDisabledFunc,
      errorFunc: toolbarThrowErrorFunc,
    },
    {
      target: 'toolbarBack',
      title: 'Инструментальная планка (Дальняя)',
      checkFunc: () => mountKit.selected !== 'No',
      disableFunc: () => mountKit.selected === 'No',
      errorFunc: () => setError({target: 'light.mountKit', message: 'Сначала добавьте крепление для светильника!'})
    },
    {
      target: 'monitorAdapterFront',
      title: 'Держатель монитора',
      checkFunc: () => baseFrame.selected,
      disableFunc: () => !baseFrame.selected,
      errorFunc: () => setError({target: 'frame.baseFrame', message: 'Сначала добавьте разделительную раму!'})
    },
    {
      target: 'monitorAdapterBack',
      title: 'Держатель монитора  (Дальний)',
      checkFunc: () => baseFrame.selected,
      disableFunc: () => !baseFrame.selected,
      errorFunc: () => setError({target: 'frame.baseFrame', message: 'Сначала добавьте разделительную раму!'})
    },
    {
      target: 'blueprintAdapterFront',
      title: 'Держатель чертежей',
      checkFunc: () => baseFrame.selected,
      disableFunc: () => !baseFrame.selected,
      errorFunc: () => setError({target: 'frame.baseFrame', message: 'Сначала добавьте разделительную раму!'})
    },
    {
      target: 'blueprintAdapterBack',
      title: 'Держатель чертежей (Дальний)',
      checkFunc: () => baseFrame.selected,
      disableFunc: () => !baseFrame.selected,
      errorFunc: () => setError({target: 'frame.baseFrame', message: 'Сначала добавьте задние стойки!'})
    },

    ...(type === 'Solid' ? [
      {
        target: 'solid_rail',
        title: 'Рельс',
        checkFunc: () => baseFrame.selected,
        disableFunc: () => !baseFrame.selected,
        errorFunc: () => setError({target: 'frame.baseFrame', message: 'Сначала добавьте задние стойки!'})
      },
    ] : []),
    ...(type === 'Solid' ? size.width.selected === 1200 ? [
      {target: 'solid_locker_1R', title: 'Подвесная тумба на 1 ящик (Правая)'},
      {target: 'solid_locker_2R', title: 'Подвесная тумба на 2 ящика (Правая)'},
      {target: 'solid_locker_3R', title: 'Подвесная тумба на 3 ящика (Правая)'},
      {target: 'solid_locker_5R', title: 'Подвесная тумба на 5 ящиков (Правая)'},
    ] : [
      {target: 'solid_locker_1L', title: 'Подвесная тумба на 1 ящик (Левая)'},
      {target: 'solid_locker_2L', title: 'Подвесная тумба на 2 ящика (Левая)'},
      {target: 'solid_locker_3L', title: 'Подвесная тумба на 3 ящика (Левая)'},
      {target: 'solid_locker_5L', title: 'Подвесная тумба на 5 ящиков (Левая)'},
      {target: 'solid_locker_1R', title: 'Подвесная тумба на 1 ящик (Правая)'},
      {target: 'solid_locker_2R', title: 'Подвесная тумба на 2 ящика (Правая)'},
      {target: 'solid_locker_3R', title: 'Подвесная тумба на 3 ящика (Правая)'},
      {target: 'solid_locker_5R', title: 'Подвесная тумба на 5 ящиков (Правая)'},
    ] : [])
  ];

  return (
    <div className='FsAccessories'>
      <FormSection title='Аксессуары:'>
        <div className='FsAccessories__body'>
          {accessoriesItems.filter(el=>!accessories[el.target].hidden).map(el =>
            <UiCheckboxWrapped
              key={el.target}
              target={`accessories.${el.target}`}
              errors={error}
              checked={accessories[el.target].selected}
              onChange={(value) => changeAccessoriesData(el.target, value.target.checked)}
              checkDisabledFunc={el.disableFunc}
              throwErrorFunc={el.errorFunc}
              checkErrorFunc={el.checkFunc}
              title={el.title}
            />
          )}
        </div>
      </FormSection>
    </div>
  );
};

export { FsAccessories };