import './App.scss';
import { useState } from "react";
import { OptionsSection } from "./components/OptionsSection/OptionsSection";
import { ProductTypesSection } from "./components/ProductTypesSection/ProductTypesSection";
import { CardEstimate } from "./components/CardEstimate/CardEstimate";
import { TableImage } from "./components/TableImage/TableImage";
import { CardSendMail } from "./components/CardSendMail/CardSendMail";

const isAnySelected = (items) => items.some(el => el.selected);

function App() {
  const initialState = [
    {
      type: 'Solid',
      models: {
        hidden: false,
        registered: true,
        options: ['Общепромышленное', 'Антистатическое'],
        selected: 'Общепромышленное',
      },
      angular: { hidden: true, registered: true, options: ['Нет', 'Да'], selected: 'Нет' },
      size: {
        hidden: false,
        width: { hidden: false, options: [1200, 1500, 1800], selected: 1500 },
        deep: { hidden: false, options: [700], selected: 700 },
      },
      frame: {
        hidden: false,
        baseFrame: { hidden: false, registered: true, selected: false },
        separatingFrame: { hidden: true, registered: true, selected: false },
      },
      shelf: {
        hidden: false,
        baseShelf: { hidden: false, registered: true, isActive: false, options: [300, 400], selected: 300 },
        additionalShelf: { hidden: false, registered: true, isActive: false, options: [300, 400], selected: 300 },
        bottomShelf: { hidden: true, registered: true, isActive: false, options: [300, 400], selected: 300 },
      },
      light: {
        hidden: false,
        mountKit: {
          hidden: false,
          registered: true,
          options: ['No', 'Base'],
          selected: 'No',
        },
        lightKit: {
          hidden: false,
          registered: true,
          options: ['Без освещения', 'Светодиодное'],
          selected: 'Без освещения'
        },
        additionalLightKit: {
          hidden: true,
          registered: true,
          options: ['Без освещения', 'Светодиодное'],
          selected: 'Без освещения'
        },
      },
      additionalEquipment: {
        hidden: false,
        leftPerforatedPlate: {hidden: true, registered: true, selected: false},
        rightPerforatedPlate: {hidden: true, registered: true, selected: false},
        fullPerforatedPlate: {hidden: false, registered: true, selected: false},
        fullHighPerforatedPlate: {hidden: true, registered: true, selected: false},
        leftPlank: {hidden: true, registered: true, selected: false},
        rightPlank: {hidden: true, registered: true, selected: false},
        fullPlank: {hidden: true, registered: true, selected: false},
        leftWiringPanel: {hidden: true, registered: true, selected: false},
        rightWiringPanel: {hidden: true, registered: true, selected: false},
        fullWiringPanel: {hidden: false, registered: true, selected: false},
      },
      accessories: {
        hidden: false,
        toolbarFront: {hidden: false, registered: true, selected: false},
        toolbarBack: {hidden: true, registered: true, selected: false},
        blueprintAdapterFront: {hidden: true, registered: true, selected: false},
        blueprintAdapterBack: {hidden: true, registered: true, selected: false},
        monitorAdapterFront: {hidden: true, registered: true, selected: false},
        monitorAdapterBack: {hidden: true, registered: true, selected: false},
        computerAdapterFront: {hidden: true, registered: true, selected: false},
        computerAdapterBack: {hidden: true, registered: true, selected: false},
        lockerDoubleFront: {hidden: true, registered: true, selected: false},
        lockerDoubleBack: {hidden: true, registered: true, selected: false},
        lockerTripleFront: {hidden: true, registered: true, selected: false},
        lockerTripleBack: {hidden: true, registered: true, selected: false},
        groundingNode: {hidden: true, registered: true, selected: false},
        groundingKit: {hidden: true, registered: true, selected: false},

        solid_locker_1L: {hidden: false, registered: true, selected: false},
        solid_locker_1R: {hidden: false, registered: true, selected: false},
        solid_locker_2L: {hidden: false, registered: true, selected: false},
        solid_locker_2R: {hidden: false, registered: true, selected: false},
        solid_locker_3L: {hidden: false, registered: true, selected: false},
        solid_locker_3R: {hidden: false, registered: true, selected: false},
        solid_locker_5L: {hidden: false, registered: true, selected: false},
        solid_locker_5R: {hidden: false, registered: true, selected: false},
        solid_rail: {hidden: false, registered: true, selected: false},
      }
    },

    {
      type: 'Base',
      models: {
        hidden: false,
        registered: true,
        options: ['Общепромышленное', 'Антистатическое'],
        selected: 'Общепромышленное',
      },
      angular: { hidden: false, registered: true, options: ['Нет', 'Да'], selected: 'Нет' },
      size: {
        hidden: false,
        width: { hidden: false, options: [1200, 1500, 1800], selected: 1500 },
        deep: { hidden: false, options: [500, 700, 900], selected: 700 },
      },
      frame: {
        hidden: false,
        baseFrame: { hidden: false, registered: true, selected: false },
        separatingFrame: { hidden: false, registered: true, selected: false },
      },
      shelf: {
        hidden: false,
        baseShelf: { hidden: false, registered: true, isActive: false, options: [300, 400], selected: 300 },
        additionalShelf: { hidden: false, registered: true, isActive: false, options: [300, 400], selected: 300 },
        bottomShelf: { hidden: false, registered: true, isActive: false, options: [300, 400], selected: 300 },
      },
      light: {
        hidden: false,
        mountKit: {
          hidden: false,
          registered: true,
          options: ['No', 'Base', 'Advanced'],
          selected: 'No',
        },
        lightKit: {
          hidden: false,
          registered: true,
          options: ['Без освещения', 'Светодиодное'],
          selected: 'Без освещения'
        },
        additionalLightKit: {
          hidden: false,
          registered: true,
          options: ['Без освещения', 'Светодиодное'],
          selected: 'Без освещения'
        },
      },
      additionalEquipment: {
        hidden: false,
        leftPerforatedPlate: {hidden: false, registered: true, selected: false},
        rightPerforatedPlate: {hidden: false, registered: true, selected: false},
        fullPerforatedPlate: {hidden: false, registered: true, selected: false},
        fullHighPerforatedPlate: {hidden: false, registered: true, selected: false},
        leftPlank: {hidden: false, registered: true, selected: false},
        rightPlank: {hidden: false, registered: true, selected: false},
        fullPlank: {hidden: false, registered: true, selected: false},
        leftWiringPanel: {hidden: false, registered: true, selected: false},
        rightWiringPanel: {hidden: false, registered: true, selected: false},
        fullWiringPanel: {hidden: false, registered: true, selected: false},
      },
      accessories: {
        hidden: false,
        toolbarFront: {hidden: false, registered: true, selected: false},
        toolbarBack: {hidden: true, registered: true, selected: false},
        blueprintAdapterFront: {hidden: false, registered: true, selected: false},
        blueprintAdapterBack: {hidden: true, registered: true, selected: false},
        monitorAdapterFront: {hidden: false, registered: true, selected: false},
        monitorAdapterBack: {hidden: true, registered: true, selected: false},
        computerAdapterFront: {hidden: false, registered: true, selected: false},
        computerAdapterBack: {hidden: true, registered: true, selected: false},
        lockerDoubleFront: {hidden: false, registered: true, selected: false},
        lockerDoubleBack: {hidden: true, registered: true, selected: false},
        lockerTripleFront: {hidden: false, registered: true, selected: false},
        lockerTripleBack: {hidden: true, registered: true, selected: false},
        groundingNode: {hidden: false, registered: true, selected: false},
        groundingKit: {hidden: false, registered: true, selected: false},
      }
    },
    {
      type: 'Advanced',
      models: {
        hidden: false,
        registered: true,
        options: ['Общепромышленное', 'Антистатическое'],
        selected: 'Общепромышленное',
      },
      angular: {
        hidden: false,
        registered: true,
        options: ['Нет', 'Да'],
        selected: 'Нет',
      },
      size: {
        hidden: false,
        width: { hidden: false, registered: true, options: [1200, 1500, 1800], selected: 1500 },
        deep: { hidden: true, registered: true, options: [700, 900], selected: 700 },
      },
      frame: {
        hidden: false,
        baseFrame: { hidden: false, registered: true, selected: false },
        separatingFrame: { hidden: false, registered: true, selected: false },
      },
      shelf: {
        hidden: false,
        baseShelf: { hidden: false, registered: true, isActive: false, options: [300, 400], selected: 300 },
        additionalShelf: { hidden: false, registered: true, isActive: false, options: [300, 400], selected: 300 },
        bottomShelf: { hidden: true, registered: true, isActive: false, options: [300], selected: 300 },
      },
      light: {
        hidden: false,
        mountKit: {
          hidden: false,
          registered: true,
          options: ['No', 'Base', 'Advanced'],
          selected: 'No',
          required: 'frame.baseFrame.selected'
        },
        lightKit: {
          hidden: false,
          registered: true,
          options: ['Без освещения', 'Светодиодное'],
          selected: 'Без освещения'
        },
        additionalLightKit: {
          hidden: false,
          options: ['Без освещения', 'Светодиодное'],
          selected: 'Без освещения',
        },
      },
      additionalEquipment: {
        hidden: false,
        leftPerforatedPlate: {hidden: false, registered: true, selected: false},
        rightPerforatedPlate: {hidden: false, registered: true, selected: false},
        fullPerforatedPlate: {hidden: false, registered: true, selected: false},
        fullHighPerforatedPlate: {hidden: false, registered: true, selected: false},
        leftPlank: {hidden: false, registered: true, selected: false},
        rightPlank: {hidden: false, registered: true, selected: false},
        fullPlank: {hidden: false, registered: true, selected: false},
        leftWiringPanel: {hidden: false, registered: true, selected: false},
        rightWiringPanel: {hidden: false, registered: true, selected: false},
        fullWiringPanel: {hidden: false, registered: true, selected: false},
      },
      accessories: {
        hidden: false,
        toolbarFront: {hidden: false, registered: true, selected: false},
        toolbarBack: {hidden: true, registered: true, selected: false},
        blueprintAdapterFront: {hidden: false, registered: true, selected: false},
        blueprintAdapterBack: {hidden: true, registered: true, selected: false},
        monitorAdapterFront: {hidden: false, registered: true, selected: false},
        monitorAdapterBack: {hidden: true, registered: true, selected: false},
        computerAdapterFront: {hidden: false, registered: true, selected: false},
        computerAdapterBack: {hidden: true, registered: true, selected: false},
        lockerDoubleFront: {hidden: false, registered: true, selected: false},
        lockerDoubleBack: {hidden: true, registered: true, selected: false},
        lockerTripleFront: {hidden: false, registered: true, selected: false},
        lockerTripleBack: {hidden: true, registered: true, selected: false},
        groundingNode: {hidden: false, registered: true, selected: false},
        groundingKit: {hidden: false, registered: true, selected: false},
      }
    },
    {
      type: 'Dual',
      models: {
        hidden: false,
        registered: true,
        options: ['Общепромышленное', 'Антистатическое'],
        selected: 'Общепромышленное',
      },
      angular: {
        hidden: true,
        registered: true,
        options: ['Нет', 'Да'],
        selected: 'Нет',
      },
      size: {
        hidden: false,
        width: { hidden: false, registered: true, options: [1200, 1500, 1800], selected: 1500 },
        deep: { hidden: false, registered: true, options: [700], selected: 700 },
      },
      frame: {
        hidden: true,
        baseFrame: { hidden: false, registered: false, selected: true },
        separatingFrame: { hidden: false, registered: false, selected: false },
      },
      shelf: {
        hidden: false,
        baseShelf: { hidden: false, registered: true, isActive: false, options: [300, 400], selected: 300 },
        additionalShelf: { hidden: false, registered: true, isActive: false, options: [300, 400], selected: 300 },
        bottomShelf: { hidden: false, registered: true, isActive: false, options: [300], selected: 300 },
      },
      light: {
        hidden: false,
        mountKit: {hidden: false, registered: true, options: ['No', 'Dual'], selected: 'No',},
        lightKit: {hidden: false, registered: true, options: ['Без освещения', 'Светодиодное'], selected: 'Без освещения'},
        additionalLightKit: {hidden: false, registered: true, options: ['Без освещения', 'Светодиодное'], selected: 'Без освещения' },
      },
      additionalEquipment: {
        hidden: false,
        leftPerforatedPlate: {hidden: true, registered: true, selected: false},
        rightPerforatedPlate: {hidden: true, registered: true, selected: false},
        fullPerforatedPlate: {hidden: false, registered: true, selected: false},
        fullHighPerforatedPlate: {hidden: true, registered: true, selected: false},
        leftPlank: {hidden: true, registered: true, selected: false},
        rightPlank: {hidden: true, registered: true, selected: false},
        fullPlank: {hidden: false, registered: true, selected: false},
        leftWiringPanel: {hidden: true, registered: true, selected: false},
        rightWiringPanel: {hidden: true, registered: true, selected: false},
        fullWiringPanel: {hidden: false, registered: true, selected: false},
      },
      accessories: {
        hidden: false,
        toolbarFront: {hidden: false, registered: true, selected: false},
        toolbarBack: {hidden: false, registered: true, selected: false},
        blueprintAdapterFront: {hidden: false, registered: true, selected: false},
        blueprintAdapterBack: {hidden: false, registered: true, selected: false},
        monitorAdapterFront: {hidden: false, registered: true, selected: false},
        monitorAdapterBack: {hidden: false, registered: true, selected: false},
        computerAdapterFront: {hidden: false, registered: true, selected: false},
        computerAdapterBack: {hidden: false, registered: true, selected: false},
        lockerDoubleFront: {hidden: false, registered: true, selected: false},
        lockerDoubleBack: {hidden: false, registered: true, selected: false},
        lockerTripleFront: {hidden: false, registered: true, selected: false},
        lockerTripleBack: {hidden: false, registered: true, selected: false},
        groundingNode: {hidden: false, registered: true, selected: false},
        groundingKit: {hidden: false, registered: true, selected: false},
      }
    },
    {
      type: 'Simple',
      models: {
        hidden: false,
        registered: true,
        options: ['Общепромышленное', 'Антистатическое'],
        selected: 'Общепромышленное',
      },
      angular: {
        hidden: true,
        registered: true,
        options: ['Нет'],
        selected: 'Нет',
      },
      size: {
        hidden: false,
        width: { hidden: false, registered: true, options: [1200, 1500, 1800], selected: 1500 },
        deep: { hidden: false, options: [500, 700, 900], selected: 700 },
      },
      frame: {
        hidden: true,
        baseFrame: { hidden: false, registered: true, selected: false },
        separatingFrame: { hidden: false, registered: true, selected: false },
      },
      shelf: {
        hidden: false,
        baseShelf: { hidden: true, registered: true, isActive: false, options: [300, 400], selected: 300 },
        additionalShelf: { hidden: true, registered: true, isActive: false, options: [300, 400], selected: 300 },
        bottomShelf: { hidden: false, registered: true, isActive: false, options: [300], selected: 300 },
      },
      light: {
        hidden: true,
        mountKit: {hidden: false, registered: true, options: ['No', 'Base', 'Advanced'], selected: 'No',},
        lightKit: {hidden: false, registered: true, options: ['Без освещения', 'Светодиодное'], selected: 'Без освещения'},
        additionalLightKit: {hidden: false, registered: true, options: ['Без освещения', 'Светодиодное'], selected: 'Без освещения' },
      },
      additionalEquipment: {
        hidden: true,
        leftPerforatedPlate: {hidden: false, registered: true, selected: false},
        rightPerforatedPlate: {hidden: false, registered: true, selected: false},
        fullPerforatedPlate: {hidden: false, registered: true, selected: false},
        fullHighPerforatedPlate: {hidden: false, registered: true, selected: false},
        leftPlank: {hidden: false, registered: true, selected: false},
        rightPlank: {hidden: false, registered: true, selected: false},
        fullPlank: {hidden: false, registered: true, selected: false},
        leftWiringPanel: {hidden: false, registered: true, selected: false},
        rightWiringPanel: {hidden: false, registered: true, selected: false},
        fullWiringPanel: {hidden: false, registered: true, selected: false},
      },
      accessories: {
        hidden: false,
        toolbarFront: {hidden: true, registered: true, selected: false},
        toolbarBack: {hidden: true, registered: true, selected: false},
        blueprintAdapterFront: {hidden: true, registered: true, selected: false},
        blueprintAdapterBack: {hidden: true, registered: true, selected: false},
        monitorAdapterFront: {hidden: true, registered: true, selected: false},
        monitorAdapterBack: {hidden: true, registered: true, selected: false},
        computerAdapterFront: {hidden: false, registered: true, selected: false},
        computerAdapterBack: {hidden: true, registered: true, selected: false},
        lockerDoubleFront: {hidden: false, registered: true, selected: false},
        lockerDoubleBack: {hidden: true, registered: true, selected: false},
        lockerTripleFront: {hidden: true, registered: true, selected: false},
        lockerTripleBack: {hidden: true, registered: true, selected: false},
        groundingNode: {hidden: true, registered: true, selected: false},
        groundingKit: {hidden: true, registered: true, selected: false},
      }
    },
    {
      type: 'Modern',
      models: {
        hidden: false,
        registered: true,
        options: ['Общепромышленное', 'Антистатическое'],
        selected: 'Общепромышленное',
      },
      angular: {
        hidden: true,
        registered: true,
        options: ['Нет'],
        selected: 'Нет',
      },
      size: {
        hidden: false,
        width: { hidden: false, registered: true, options: [1200, 1500, 1800], selected: 1500 },
        deep: { hidden: true, registered: true, options: [700], selected: 700 },
      },
      frame: {
        hidden: true,
        baseFrame: { hidden: false, registered: false, selected: true },
        separatingFrame: { hidden: false, registered: false, selected: false },
      },
      shelf: {
        hidden: false,
        baseShelf: { hidden: true, registered: true, isActive: false, options: [300, 400], selected: 300 },
        additionalShelf: { hidden: false, registered: true, isActive: false, options: [300, 400], selected: 300 },
        bottomShelf: { hidden: true, registered: true, isActive: false, options: [300], selected: 300 },
      },
      light: {
        hidden: true,
        mountKit: {hidden: false, registered: true, options: ['No', 'Base', 'Advanced'], selected: 'Advanced'},
        lightKit: {hidden: false, registered: true, options: ['Без освещения', 'Светодиодное'], selected: 'Без освещения'},
        additionalLightKit: {hidden: false, options: ['Без освещения', 'Светодиодное'], selected: 'Без освещения'},
      },
      additionalEquipment: {
        hidden: false,
        leftPerforatedPlate: {hidden: true, registered: true, selected: false},
        rightPerforatedPlate: {hidden: true, registered: true, selected: false},
        fullPerforatedPlate: {hidden: true, registered: true, selected: false},
        fullHighPerforatedPlate: {hidden: true, registered: true, selected: false},
        leftPlank: {hidden: true, registered: true, selected: false},
        rightPlank: {hidden: true, registered: true, selected: false},
        fullPlank: {hidden: false, registered: true, selected: false},
        leftWiringPanel: {hidden: true, registered: true, selected: false},
        rightWiringPanel: {hidden: true, registered: true, selected: false},
        fullWiringPanel: {hidden: false, registered: true, selected: false},
      },
      accessories: {
        hidden: false,
        toolbarFront: {hidden: false, registered: true, selected: false},
        toolbarBack: {hidden: true, registered: true, selected: false},
        blueprintAdapterFront: {hidden: false, registered: true, selected: false},
        blueprintAdapterBack: {hidden: true, registered: true, selected: false},
        monitorAdapterFront: {hidden: false, registered: true, selected: false},
        monitorAdapterBack: {hidden: true, registered: true, selected: false},
        computerAdapterFront: {hidden: false, registered: true, selected: false},
        computerAdapterBack: {hidden: true, registered: true, selected: false},
        lockerDoubleFront: {hidden: false, registered: true, selected: false},
        lockerDoubleBack: {hidden: true, registered: true, selected: false},
        lockerTripleFront: {hidden: false, registered: true, selected: false},
        lockerTripleBack: {hidden: true, registered: true, selected: false},
        groundingNode: {hidden: true, registered: true, selected: false},
        groundingKit: {hidden: true, registered: true, selected: false},
      }
    },
  ];
  const [currentType, setCurrentType] = useState(initialState[0]);
  const onChangeType = (type) => {
    const typeIsFound = initialState.some(el => el.type === type);
    if (!typeIsFound) return false;
    setCurrentType(initialState.find(el => el.type === type));
  }
  const onChangeData = (data) => {
    const dataCopy = {...data};
    const {
      type,
      size: {width},
      frame: {baseFrame, separatingFrame},
      shelf: {baseShelf, additionalShelf},
      light: {mountKit, additionalLightKit, lightKit},
      additionalEquipment: {leftPerforatedPlate, rightPerforatedPlate, fullPerforatedPlate, fullHighPerforatedPlate, leftPlank, rightPlank, fullPlank, leftWiringPanel, rightWiringPanel, fullWiringPanel},
      accessories: {
        toolbarFront,
        toolbarBack,
        blueprintAdapterFront,
        blueprintAdapterBack,
        monitorAdapterFront,
        monitorAdapterBack,
        computerAdapterFront,
        computerAdapterBack,
        lockerDoubleFront,
        lockerDoubleBack,
        lockerTripleFront,
        lockerTripleBack,
        groundingNode,
        groundingKit,
        solid_locker_1L,
        solid_locker_1R,
        solid_locker_2L,
        solid_locker_2R,
        solid_locker_3L,
        solid_locker_3R,
        solid_locker_5L,
        solid_locker_5R,
        solid_rail,
      }
    } = dataCopy;
    // Отключение baseShelf при деактивации baseFrame
    if (!baseFrame.selected && baseShelf.isActive && currentType.frame.baseFrame.selected && currentType.shelf.baseShelf.isActive) {
      baseShelf.isActive = false;
    }
    // Включение baseFrame при активации baseShelf
    if (!baseFrame.selected && baseShelf.isActive && !currentType.frame.baseFrame.selected && !currentType.shelf.baseShelf.isActive) {
      baseFrame.selected = true;
    }
    // Отключение additionalShelf при деактивации baseFrame
    if (!baseFrame.selected && additionalShelf.isActive && currentType.frame.baseFrame.selected && currentType.shelf.additionalShelf.isActive) {
      baseFrame.selected = false;
      additionalShelf.isActive = false;
    }
    // Включение baseFrame при активации additionalFrame
    if (!baseFrame.selected && additionalShelf.isActive && !currentType.frame.baseFrame.selected && !currentType.shelf.additionalShelf.isActive) {
      baseFrame.selected = true;
      additionalShelf.isActive = true;
    }
    if (!baseFrame.selected) {
      separatingFrame.selected = false;
      mountKit.selected = mountKit.options[0];
      blueprintAdapterBack.selected = false;
      blueprintAdapterFront.selected = false;
      monitorAdapterBack.selected = false;
      monitorAdapterFront.selected = false;
      fullPerforatedPlate.selected = false;
      fullHighPerforatedPlate.selected = false;
      fullPlank.selected = false;
      fullWiringPanel.selected = false;
      if (solid_rail) { solid_rail.selected = false }
    }
    if (!separatingFrame.selected) {
      leftPerforatedPlate.selected = false;
      leftPlank.selected = false;
      leftWiringPanel.selected = false;
      rightPlank.selected = false;
      rightPerforatedPlate.selected = false;
      rightWiringPanel.selected = false;
    }
    if (separatingFrame.selected) {
      fullHighPerforatedPlate.selected = false;
      fullPerforatedPlate.selected = false;
      fullPlank.selected = false;
      fullWiringPanel.selected = false;
    }
    if (!baseShelf.isActive) {
      additionalLightKit.selected = additionalLightKit.options[0];
    }
    if (mountKit.selected === 'No') {
      toolbarFront.selected = false;
      toolbarBack.selected = false;
      lightKit.selected = lightKit.options[0];
    }
    if (fullHighPerforatedPlate.selected && fullPerforatedPlate.selected && currentType.additionalEquipment.fullPerforatedPlate.selected) {
      fullPerforatedPlate.selected = false;
    }
    if (fullHighPerforatedPlate.selected && fullPerforatedPlate.selected && currentType.additionalEquipment.fullHighPerforatedPlate.selected) {
      fullHighPerforatedPlate.selected = false;
    }
    if (lockerDoubleFront.selected && lockerTripleFront.selected && currentType.accessories.lockerDoubleFront.selected) {
      lockerDoubleFront.selected = false;
    }
    if (lockerDoubleFront.selected && lockerTripleFront.selected && currentType.accessories.lockerTripleFront.selected) {
      lockerTripleFront.selected = false;
    }
    if (lockerDoubleBack.selected && lockerTripleBack.selected && currentType.accessories.lockerDoubleBack.selected) {
      lockerDoubleBack.selected = false;
    }
    if (lockerDoubleBack.selected && lockerTripleBack.selected && currentType.accessories.lockerTripleBack.selected) {
      lockerTripleBack.selected = false;
    }

    // Костыль отключения левых шкафов при выборе 1200 глубины Solid стола.
    if (
        type === 'Solid' &&
        currentType.size.width.selected !== 1200 &&
        width.selected === 1200 &&
        isAnySelected([
          solid_locker_1L,
          solid_locker_2L,
          solid_locker_3L,
          solid_locker_5L
        ])) {
      solid_locker_1L.selected = false;
      solid_locker_2L.selected = false;
      solid_locker_3L.selected = false;
      solid_locker_5L.selected = false;
    }
    // Костыль Radiocheckbox для Solid шкафов.
    if (type === 'Solid') {
      const newLeftLockers = [
        solid_locker_1L,
        solid_locker_2L,
        solid_locker_3L,
        solid_locker_5L,
      ];
      const oldLeftLockers = [
        currentType.accessories.solid_locker_1L,
        currentType.accessories.solid_locker_2L,
        currentType.accessories.solid_locker_3L,
        currentType.accessories.solid_locker_5L,
      ];
      const newRightLockers = [
        solid_locker_1R,
        solid_locker_2R,
        solid_locker_3R,
        solid_locker_5R,
      ];
      const oldRightLockers = [
        currentType.accessories.solid_locker_1R,
        currentType.accessories.solid_locker_2R,
        currentType.accessories.solid_locker_3R,
        currentType.accessories.solid_locker_5R,
      ];

      const checkArr = (item, index, arr) => item.selected !== arr[index].selected && item.selected === true;

      const leftOpposite = newLeftLockers.findIndex((el, i) => checkArr(el, i, oldLeftLockers))
      if (leftOpposite !== -1) {
        newLeftLockers.forEach((el, i) => el.selected = i === leftOpposite)
      }
      const rightOpposite = newRightLockers.findIndex((el, i) => checkArr(el, i, oldRightLockers))
      if (rightOpposite !== -1) {
        newRightLockers.forEach((el, i) => el.selected = i === rightOpposite)
      }
    }
    setCurrentType(dataCopy);
  }
  const getItemsArray = (data) => {
    const {type, size, models, angular, frame, shelf, light, additionalEquipment, accessories} = {...data};
    const getWidth = (sizeData) => {
      return ({width: sizeData.width.selected, deep: sizeData.deep.selected});
    }
    const {width, deep} = getWidth(size);
    const {baseFrame, separatingFrame} = frame;
    const {baseShelf, additionalShelf, bottomShelf} = shelf;
    const {leftPerforatedPlate, rightPerforatedPlate, fullPerforatedPlate, fullHighPerforatedPlate, leftPlank, rightPlank, fullPlank, leftWiringPanel, rightWiringPanel, fullWiringPanel} = additionalEquipment;
    const {toolbarFront, toolbarBack, blueprintAdapterFront, blueprintAdapterBack, monitorAdapterFront, monitorAdapterBack, computerAdapterFront, computerAdapterBack, lockerDoubleFront, lockerDoubleBack, lockerTripleFront, lockerTripleBack, groundingNode, groundingKit} = accessories;
    const getPerforatedPanelName = (type) => {
      switch (type) {
        case 'Dual': return 'Панель перфорированная Dual';
        default: return 'Панель перфорированная узкая'
      }
    }
    const getWiringPanelName = (type) => {
      switch (type) {
        case 'Dual': return 'Панель электромонтажная Dual';
        default: return 'Панель электромонтажная'
      }
    }
    const getFullPlankName = (type) => {
      switch (type) {
        case 'Dual': return 'Рельс для крепления ячеек комплектации Dual';
        default: return 'Рельс для крепления ячеек комплектации'
      }
    }
    return [
      {item: {name: `Стол рабочий (${type})`, size: `${width}x${deep}`}, when: true},
      {item: {name: `Угловой стол (${type})`, size: `1200x500`}, when: angular.selected === 'Да' && angular.registered},
      {
        item: {name: `Антистатический материал`, size: `-`},
        when: models.selected === 'Антистатическое' && models.registered
      },
      {
        item: {name: `Комплект стоек к рабочему столу(задняя стойка)`, size: `Для столов ${width}`},
        when: baseFrame.selected && baseFrame.registered
      },
      {
        item: {name: `Средняя стойка`, size: `для столов ${width}`},
        when: separatingFrame.selected && separatingFrame.registered
      },
      {
        item: {name: `Комплект крепления освещения - Base`, size: `для столов ${width}`},
        when: light.mountKit.selected === 'Base',
      },
      {
        item: {name: `Комплект крепления освещения - Advanced`, size: `для столов ${width}`},
        when: light.mountKit.selected === 'Advanced',
      },
      {
        item: {name: `Освещение рабочей поверхности - Светодиодное`, size: `для столов ${width}`},
        when: light.lightKit.selected === 'Светодиодное',
      },
      {
        item: {name: `Освещение под основную полку - Светодиодное`, size: `для столов ${width}`},
        when: light.additionalLightKit.selected === 'Светодиодное',
      },
      {
        item: {name: `Основная полка`, size: `${width}x${baseShelf.selected}`},
        when: baseShelf.isActive && baseShelf.registered
      },
      {
        item: {name: `Дополнительная полка`, size: `${width}x${additionalShelf.selected}`},
        when: additionalShelf.isActive && additionalShelf.registered
      },
      {
        item: {name: `Нижняя полка`, size: `${width}x${bottomShelf.selected}`},
        when: bottomShelf.isActive && bottomShelf.registered
      },
      {
        item: {name: `Панель перфорированная высокая`, size: `-`},
        when: fullHighPerforatedPlate.selected && fullHighPerforatedPlate.registered
      },
      {
        item: {name: getPerforatedPanelName(type), size: `${width - 10}x325 мм`},
        when: fullPerforatedPlate.selected && fullPerforatedPlate.registered
      },
      {item: {name: getFullPlankName(type), size: `${width}x95`}, when: fullPlank.selected && fullPlank.registered},
      {
        item: {name: getWiringPanelName(type), size: `Для столов ${width}`},
        when: fullWiringPanel.selected && fullWiringPanel.registered
      },
      {
        item: {name: `Панель электромонтажная «E» - левая`, size: `Для столов ${width}`},
        when: leftWiringPanel.selected && leftWiringPanel.registered
      },
      {
        item: {name: `Панель электромонтажная «E» - правая`, size: `Для столов ${width}`},
        when: rightWiringPanel.selected && rightWiringPanel.registered
      },
      {
        item: {name: `Рельс для крепления ячеек комплектации - левый-верхний`, size: `${(width - 80) / 2}x95`},
        when: leftPlank.selected && leftPlank.registered
      },
      {
        item: {name: `Рельс для крепления ячеек комплектации - правый-верхний`, size: `${(width - 80) / 2}x95`},
        when: rightPlank.selected && rightPlank.registered
      },
      {
        item: {name: `Панель перфорированная стальная - левая`, size: `${(width + 20) / 2}x505`},
        when: leftPerforatedPlate.selected && leftPerforatedPlate.registered
      },
      {
        item: {name: `Панель перфорированная стальная - правая`, size: `${(width + 20) / 2}x505`},
        when: rightPerforatedPlate.selected && rightPerforatedPlate.registered
      },
      {
        item: {name: `Объединительный узел заземления`, size: `-`},
        when: groundingNode.selected && groundingNode.registered
      },
      {item: {name: `Колодка заземления`, size: `-`}, when: groundingKit.selected && groundingKit.registered},
      {
        item: {name: `Инструментальная планка`, size: `${width}`},
        when: toolbarFront.selected && toolbarFront.registered
      },
      {item: {name: `Инструментальная планка`, size: `${width}`}, when: toolbarBack.selected && toolbarBack.registered},
      {
        item: {name: `Подвесная тумба на 2 ящика`, size: `-`},
        when: lockerDoubleFront.selected && lockerDoubleFront.registered
      },
      {
        item: {name: `Подвесная тумба на 2 ящика`, size: `-`},
        when: lockerDoubleBack.selected && lockerDoubleBack.registered
      },
      {
        item: {name: `Подвесная тумба на 3 ящика`, size: `-`},
        when: lockerTripleFront.selected && lockerTripleFront.registered
      },
      {
        item: {name: `Подвесная тумба на 3 ящика`, size: `-`},
        when: lockerTripleBack.selected && lockerTripleBack.registered
      },
      {
        item: {name: `Держатель монитора`, size: `-`},
        when: monitorAdapterFront.selected && monitorAdapterFront.registered
      },
      {
        item: {name: `Держатель монитора`, size: `-`},
        when: monitorAdapterBack.selected && monitorAdapterBack.registered
      },
      {
        item: {name: `Держатель чертежей`, size: `-`},
        when: blueprintAdapterFront.selected && blueprintAdapterFront.registered
      },
      {
        item: {name: `Держатель чертежей`, size: `-`},
        when: blueprintAdapterBack.selected && blueprintAdapterBack.registered
      },
      {
        item: {name: `Подставка под системный блок`, size: `-`},
        when: computerAdapterFront.selected && computerAdapterFront.registered
      },
      {
        item: {name: `Подставка под системный блок`, size: `-`},
        when: computerAdapterBack.selected && computerAdapterBack.registered
      },
      ...(type === 'Solid' ? [
        {
          item: {name: `Рельс`, size: `${width}`},
          when: accessories.solid_rail.selected && accessories.solid_rail.registered
        },
        {
          item: {name: `Подвесная тумба на 1 ящик (Левая)`, size: `-`},
          when: accessories.solid_locker_1L.selected && accessories.solid_locker_1L.registered
        },
        {
          item: {name: `Подвесная тумба на 1 ящик (Правая)`, size: `-`},
          when: accessories.solid_locker_1R.selected && accessories.solid_locker_1R.registered
        },
        {
          item: {name: `Подвесная тумба на 2 ящика (Левая)`, size: `-`},
          when: accessories.solid_locker_2L.selected && accessories.solid_locker_2L.registered
        },
        {
          item: {name: `Подвесная тумба на 2 ящика (Правая)`, size: `-`},
          when: accessories.solid_locker_2R.selected && accessories.solid_locker_2R.registered
        },
        {
          item: {name: `Подвесная тумба на 3 ящика (Левая)`, size: `-`},
          when: accessories.solid_locker_3L.selected && accessories.solid_locker_3L.registered
        },
        {
          item: {name: `Подвесная тумба на 3 ящика (Правая)`, size: `-`},
          when: accessories.solid_locker_3R.selected && accessories.solid_locker_3R.registered
        },
        {
          item: {name: `Подвесная тумба на 5 ящиков (Левая)`, size: `-`},
          when: accessories.solid_locker_5L.selected && accessories.solid_locker_5L.registered
        },
        {
          item: {name: `Подвесная тумба на 5 ящиков (Правая)`, size: `-`},
          when: accessories.solid_locker_5R.selected && accessories.solid_locker_5R.registered
        },
      ] : []),
    ];
  }
  const formattedItemsArray = getItemsArray(currentType).filter(el => el.when).map(el => el.item);

  return (
    <div className="App">
      <div className='App__content'>
        <div className={'App__typesList'}>
          <ProductTypesSection current={currentType.type} typesArray={initialState.map(el => el.type)} onChange={(type) => onChangeType(type)}/>
        </div>
        <div className='App__constructor'>
          <div className='App__optionsSection'>
            <OptionsSection data={currentType} onChangeData={onChangeData} />
          </div>
          <div className='App__imageSection'>
            <div className='App__tableImage'>
              <TableImage data={currentType} />
            </div>
          </div>
        </div>
        <div className='App__con-form'>
          <CardSendMail itemsArray={formattedItemsArray} clearFunc={() => onChangeType(currentType.type)} />
        </div>
        <div className='App__con-estimate'>
          <CardEstimate data={formattedItemsArray} />
        </div>
      </div>
    </div>
  );
}

export { App };
