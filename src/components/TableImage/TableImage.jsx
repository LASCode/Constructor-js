import './TableImage.scss';
import React, { useEffect, useRef, useState } from 'react';
import transparentBackground from '../../assets/transparent-background.png'
import baseTable from '../../assets/B-BaseTable.png'
import advancedTable from '../../assets/B-AdvancedTable.png'
import dualTable from '../../assets/B-DualTable.png'
import simpleTable from '../../assets/B-SimpleTable.png'
import modernTable from '../../assets/B-ModernTable.png'
import antistatic from '../../assets/esd.png'
import angularTable from '../../assets/angular-table-additional.png'
import baseFrame_base from '../../assets/frame_base_base.png'
import baseFrame_double from '../../assets/frame_base_double.png'
import separatingFrame from '../../assets/frame_separating_base.png'
import shelfBase from '../../assets/shelf-base.png';
import shelfAdditional from '../../assets/shelf-additional.png';
import shelfBottom from '../../assets/shelf-bottom.png';
import shelfSimpleBottom from '../../assets/shelf_simple.png';
import shelfModernAdditional from '../../assets/shelf_modern_additional.png';

import shelfDualBase from '../../assets/shelf_dual_base.png';
import shelfDualAdditional1 from '../../assets/shelf_dual_additional-1.png';
import shelfDualAdditional2 from '../../assets/shelf_dual_addtitonal-2.png';
import shelfDualBottom1 from '../../assets/shelf_dual_bottom-1.png';
import shelfDualBottom2 from '../../assets/shelf_dual_bottom-2.png';
import lightKitBase from '../../assets/lightKit_base.png';
import lightKitAdvance from '../../assets/lightKit_advance.png';
import lightKitDual from '../../assets/ligthKit_dual.png';
import lampBase from '../../assets/lamp_base.png';
import lampDouble1 from '../../assets/lamp_double-1.png';
import lampDouble2 from '../../assets/lamp_double-2.png';
import lampAdvancedBase from '../../assets/lamp_advanced_base.png';
import lampAdvancedDouble1 from '../../assets/lamp_advanced_dual-1.png';
import lampAdvancedDouble2 from '../../assets/lamp_advanced_dual-2.png';
import perfoplateBase from '../../assets/perfopanel_narrow.png';
import perfoplateHigh from '../../assets/perfopanel_high.png';
import perfoplateLeft from '../../assets/perfopanel_left.png';
import perfoplateRight from '../../assets/perfopanel_right.png';
import perfoplateDouble from '../../assets/perfopanel_double.png';
import plankFull from '../../assets/plank_full.png';
import plankLeft from '../../assets/plank_left.png';
import plankRight from '../../assets/plank_right.png';
import plankDouble from '../../assets/plank_double.png';
import plankModern from '../../assets/plank_modern.png';
import wiringFull from '../../assets/wiringpanel_full.png';
import wiringLeft from '../../assets/wiringpanel_left.png';
import wiringRight from '../../assets/wiringpanel_right.png';
import wiringDouble from '../../assets/wiringpanel_double.png';
import wiringModern from '../../assets/wiringpanel_modern.png'
import toolbarBase from '../../assets/toolbar_base.png';
import toolbarDual1 from '../../assets/toolbar_dual-1.png';
import toolbarDual2 from '../../assets/toolbar_dual-2.png';
import toolbarModern from '../../assets/toolbar_modern.png';
import lockerBaseDouble from '../../assets/locker_base_double.png';
import lockerBaseTriple from '../../assets/locker_base_triple.png';
import lockerSimpleDouble from '../../assets/locker_simple_double.png';
import lockerAdvancedDouble from '../../assets/locker_advance_double.png';
import lockerAdvancedTriple from '../../assets/locker_advance_triple.png';
import lockerDualDouble1 from '../../assets/locker_dual_double-1.png';
import lockerDualDouble2 from '../../assets/locker_dual_double-2.png';
import lockerDualTriple1 from '../../assets/locker_dual_triple-1.png';
import lockerDualTriple2 from '../../assets/locker_dual_triple-2.png';
import lockerModernDouble from '../../assets/locker_modern_double.png';
import lockerModernTriple from '../../assets/locker_modern_triple.png';
import computerAdapterAdvanced from '../../assets/computerAdapter_advanced.png';
import computerAdapterSimple from '../../assets/computerAdapter_simple.png';
import computerAdapterDual from '../../assets/computerAdapter_dual.png';
import computerAdapterModern from '../../assets/computerAdapter_modern.png';
import monitorAdapterBase from '../../assets/monitorAdapter_base.png';
import monitorAdapterDual1 from '../../assets/monitorAdapter_dual-1.png';
import monitorAdapterDual2 from '../../assets/monitorAdapter_dual-2.png';
import monitorAdapterModern from '../../assets/monitorAdapter_modern.png';
import blueprintAdapterBase from '../../assets/blueprintAdapter_base.png';
import blueprintAdapterDual1 from '../../assets/blueprintAdapter_dual-1.png';
import blueprintAdapterDual2 from '../../assets/blueprintAdapter_dual-2.png';
import blueprintAdapterModern from '../../assets/blueprintAdapter_modern.png';
import { TableSolidImages } from '../../assets/TableSolid'
import {
  CSSTransition,
  Transition,
  TransitionGroup
} from "react-transition-group";
import styled from "styled-components";


const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`;
const StyledPartImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${({src}) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 130%;
  background-position-x: 45%;
  aspect-ratio: 1/1;
  transition: all .5s;
  
  ${({state}) => {
    switch (state) {
      case "entering":
        return ('top: 0; opacity: 1;')
      case "entered":
        return ('top: 0; opacity: 1;')
      case "exiting":
        return ('top: -50%; opacity: 0;')
      case "exited":
        return ('top: -50%; opacity: 0;')
    }
  }}
`;



const TableImage = ({data: {type, models, angular, frame, shelf, light, additionalEquipment, accessories, tableSupport}}) => {
  const [zoomIsActive, setZoomIsActive] = useState(false);
  const modernTableItemsArray = [
    {when: additionalEquipment.fullPlank.selected, img: plankModern},
    {when: additionalEquipment.fullWiringPanel.selected, img: wiringModern},
    {when: accessories.toolbarFront.selected, img: toolbarModern},
    {when: true, img: modernTable},
    {when: accessories.computerAdapterFront.selected, img: computerAdapterModern},
    {when: accessories.lockerDoubleFront.selected, img: lockerModernDouble},
    {when: accessories.lockerTripleFront.selected, img: lockerModernTriple},
    {when: accessories.monitorAdapterFront.selected, img: monitorAdapterModern},
    {when: accessories.blueprintAdapterFront.selected, img: blueprintAdapterModern},
    {when: shelf.additionalShelf.isActive, img: shelfModernAdditional},
    {when: models.selected === 'Антистатическое', img: antistatic, className: 'antistatic-min'},
  ];
  const simpleTableItemsArray = [
    {when: true, img: simpleTable},
    {when: shelf.bottomShelf.isActive, img: shelfSimpleBottom},
    {when: accessories.lockerDoubleFront.selected, img: lockerSimpleDouble},
    {when: accessories.computerAdapterFront.selected, img: computerAdapterSimple},
    {when: models.selected === 'Антистатическое', img: antistatic, className: 'antistatic-min simple'},
  ];
  const dualTableItemsArray = [
    {when: light.lightKit.selected === 'Светодиодное', img: lampDouble2},
    {when: accessories.toolbarBack.selected, img: toolbarDual2},
    {when: light.mountKit.selected === 'Dual', img: lightKitDual},
    {when: accessories.toolbarFront.selected, img: toolbarDual1},
    {when: accessories.lockerDoubleBack.selected, img: lockerDualDouble2},
    {when: accessories.lockerTripleBack.selected, img: lockerDualTriple2},
    {when: true, img: dualTable},
    {when: accessories.monitorAdapterBack.selected, img: monitorAdapterDual2},
    {when: accessories.blueprintAdapterBack.selected, img: blueprintAdapterDual2},
    {when: shelf.bottomShelf.isActive, img: shelfDualBottom1},
    {when: shelf.bottomShelf.isActive, img: shelfDualBottom2},
    {when: accessories.lockerDoubleFront.selected, img: lockerDualDouble1},
    {when: light.additionalLightKit.selected === 'Светодиодное', img: lampAdvancedDouble2},
    {when: accessories.lockerTripleFront.selected, img: lockerDualTriple1},
    {when: accessories.computerAdapterFront.selected, img: computerAdapterDual},
    {when: shelf.additionalShelf.isActive, img: shelfDualAdditional2},
    {when: additionalEquipment.fullPerforatedPlate.selected, img: perfoplateDouble},
    {when: frame.baseFrame.selected, img: baseFrame_double},
    {when: light.lightKit.selected === 'Светодиодное', img: lampDouble1},
    {when: additionalEquipment.fullPlank.selected, img: plankDouble},
    {when: additionalEquipment.fullWiringPanel.selected, img: wiringDouble},
    {when: shelf.baseShelf.isActive, img: shelfDualBase},
    {when: accessories.monitorAdapterFront.selected, img: monitorAdapterDual1},
    {when: accessories.blueprintAdapterFront.selected, img: blueprintAdapterDual1},
    {when: shelf.additionalShelf.isActive, img: shelfDualAdditional1},
    {when: light.additionalLightKit.selected === 'Светодиодное', img: lampAdvancedDouble1},
    {when: models.selected === 'Антистатическое', img: antistatic, className: 'antistatic-min'},
  ];
  const advancedTableItemsArray = [
    {when: frame.baseFrame.selected, img: baseFrame_base},
    {when: frame.separatingFrame.selected, img: separatingFrame},
    {when: shelf.baseShelf.isActive, img: shelfBase},
    {when: shelf.additionalShelf.isActive, img: shelfAdditional},
    {when: light.mountKit.selected === 'Base', img: lightKitBase},
    {when: light.mountKit.selected === 'Advanced', img: lightKitAdvance},
    {when: light.lightKit.selected === 'Светодиодное', img: lampBase},
    {when: additionalEquipment.fullPerforatedPlate.selected, img: perfoplateBase},
    {when: additionalEquipment.fullHighPerforatedPlate.selected, img: perfoplateHigh},
    {when: additionalEquipment.leftPerforatedPlate.selected, img: perfoplateLeft},
    {when: additionalEquipment.rightPerforatedPlate.selected, img: perfoplateRight},
    {when: light.additionalLightKit.selected === 'Светодиодное', img: lampAdvancedBase},
    {when: additionalEquipment.leftPlank.selected, img: plankLeft},
    {when: additionalEquipment.rightPlank.selected, img: plankRight},
    {when: additionalEquipment.fullPlank.selected, img: plankFull},
    {when: additionalEquipment.fullWiringPanel.selected, img: wiringFull},
    {when: additionalEquipment.leftWiringPanel.selected, img: wiringLeft},
    {when: additionalEquipment.rightWiringPanel.selected, img: wiringRight},
    {when: accessories.toolbarFront.selected, img: toolbarBase},
    {when: accessories.lockerDoubleFront.selected, img: lockerAdvancedDouble},
    {when: accessories.lockerTripleFront.selected, img: lockerAdvancedTriple},
    {when: true, img: advancedTable},
    {when: accessories.computerAdapterFront.selected, img: computerAdapterAdvanced},
    {when: accessories.blueprintAdapterFront.selected, img: blueprintAdapterBase},
    {when: accessories.monitorAdapterFront.selected, img: monitorAdapterBase},
    {when: angular.selected === 'Да', img: angularTable},
    {when: models.selected === 'Антистатическое', img: antistatic, className: 'antistatic-min'},
  ];
  const baseTableItemsArray = [
    {when: frame.baseFrame.selected, img: baseFrame_base},
    {when: frame.separatingFrame.selected, img: separatingFrame},
    {when: shelf.baseShelf.isActive, img: shelfBase},
    {when: shelf.additionalShelf.isActive, img: shelfAdditional},
    {when: light.mountKit.selected === 'Base', img: lightKitBase},
    {when: light.mountKit.selected === 'Advanced', img: lightKitAdvance},
    {when: light.lightKit.selected === 'Светодиодное', img: lampBase},
    {when: additionalEquipment.fullPerforatedPlate.selected, img: perfoplateBase},
    {when: additionalEquipment.fullHighPerforatedPlate.selected, img: perfoplateHigh},
    {when: additionalEquipment.leftPerforatedPlate.selected, img: perfoplateLeft},
    {when: additionalEquipment.rightPerforatedPlate.selected, img: perfoplateRight},
    {when: additionalEquipment.leftPlank.selected, img: plankLeft},
    {when: additionalEquipment.rightPlank.selected, img: plankRight},
    {when: additionalEquipment.fullPlank.selected, img: plankFull},
    {when: additionalEquipment.fullWiringPanel.selected, img: wiringFull},
    {when: additionalEquipment.leftWiringPanel.selected, img: wiringLeft},
    {when: additionalEquipment.rightWiringPanel.selected, img: wiringRight},
    {when: accessories.toolbarFront.selected, img: toolbarBase},
    {when: true, img: baseTable},
    {when: shelf.bottomShelf.isActive, img: shelfBottom},
    {when: accessories.lockerDoubleFront.selected, img: lockerBaseDouble},
    {when: accessories.lockerTripleFront.selected, img: lockerBaseTriple},
    {when: accessories.computerAdapterFront.selected, img: computerAdapterAdvanced},
    {when: accessories.blueprintAdapterFront.selected, img: blueprintAdapterBase},
    {when: accessories.monitorAdapterFront.selected, img: monitorAdapterBase},
    {when: light.additionalLightKit.selected === 'Светодиодное', img: lampAdvancedBase},
    {when: angular.selected === 'Да', img: angularTable},
    {when: models.selected === 'Антистатическое', img: antistatic, className: 'antistatic-min'},
  ];
  const solidTableItemsArray = [
    ...(type === 'Solid' ? [
      {when: tableSupport.solid_support_5R.selected, img: TableSolidImages.SUPPORT_5R},
      {when: tableSupport.solid_support_3R.selected, img: TableSolidImages.SUPPORT_3R},
      {when: tableSupport.solid_support_2R.selected, img: TableSolidImages.SUPPORT_2R},
      {when: tableSupport.solid_support_1R.selected, img: TableSolidImages.SUPPORT_1R},
      {when: tableSupport.solid_support_0R.selected, img: TableSolidImages.SUPPORT_0R},
    ] : []),
    {when: accessories.toolbarFront.selected, img: TableSolidImages.TOOLBAR},
    {when: light.mountKit.selected === 'Base', img: TableSolidImages.LIGHTKIT_BASE, className: 'solid-mount-kit-base'},
    {when: light.mountKit.selected === 'Advanced', img: TableSolidImages.LIGHTKIT_ADVANCED},
    {when: frame.baseFrame.selected, img: TableSolidImages.FRAME_BASE},
    {when: frame.separatingFrame.selected, img: TableSolidImages.FRAME_SEPARATING},
    ...(type === 'Solid' ? [
      {when: tableSupport.solid_support_5L.selected, img: TableSolidImages.SUPPORT_5L},
      {when: tableSupport.solid_support_3L.selected, img: TableSolidImages.SUPPORT_3L},
      {when: tableSupport.solid_support_2L.selected, img: TableSolidImages.SUPPORT_2L},
      {when: tableSupport.solid_support_1L.selected, img: TableSolidImages.SUPPORT_1L},
      {when: tableSupport.solid_support_0L.selected, img: TableSolidImages.SUPPORT_0L},
    ] : []),
    {when: true, img: TableSolidImages.BASE},
    {when: additionalEquipment.fullWiringPanel.selected, img: TableSolidImages.WIRINGPANEL_FULL},
    {when: additionalEquipment.leftWiringPanel.selected, img: TableSolidImages.WIRINGPANEL_LEFT},
    {when: additionalEquipment.rightWiringPanel.selected, img: TableSolidImages.WIRINGPANEL_RIGHT},
    {when: additionalEquipment.fullPerforatedPlate.selected, img: TableSolidImages.PERFOPANEL_FULL},
    {when: additionalEquipment.leftPerforatedPlate.selected, img: TableSolidImages.PERFOPANEL_LEFT},
    {when: additionalEquipment.rightPerforatedPlate.selected, img: TableSolidImages.PERFOPANEL_RIGHT},
    {when: light.additionalLightKit.selected === 'Светодиодное', img: TableSolidImages.LAMP_ADDITIONAL, className: 'solid-light-kit-advanced'},
    {when: shelf.baseShelf.isActive, img: TableSolidImages.SHELF_BASE},
    {when: shelf.additionalShelf.isActive, img: TableSolidImages.SHELF_ADDITIONAL},
    {when: additionalEquipment.fullPlank.selected, img: TableSolidImages.PLANK_FULL},
    {when: additionalEquipment.leftPlank.selected, img: TableSolidImages.PLANK_LEFT},
    {when: additionalEquipment.rightPlank.selected, img: TableSolidImages.PLANK_RIGHT},
    {when: light.lightKit.selected === 'Светодиодное', img: TableSolidImages.LAMP_BASE},
    {when: models.selected === 'Антистатическое', img: TableSolidImages.ANTISTATIC, className: 'antistatic-min'},
  ];
  console.log(light.additionalLightKit.selected);

  const getCurrentImageItemsArray = (type) => {
    switch (type) {
      case 'Base': return baseTableItemsArray;
      case 'Dual': return dualTableItemsArray;
      case 'Modern': return modernTableItemsArray;
      case 'Simple': return simpleTableItemsArray;
      case 'Advanced': return advancedTableItemsArray;
      case 'Solid': return solidTableItemsArray;
      default: return [];
    }
  }
  const currentArr = getCurrentImageItemsArray(type);
  const formattedCurrentArr = currentArr.filter(el => el.when);

  return (
    <StyledContainer>
      <TransitionGroup>
        {formattedCurrentArr.map((el, i) =>
            <Transition key={el.img} in={el.when} timeout={500} unmountOnExit appear>
              {(state) => <StyledPartImage src={el.img} state={state} className={el.className} />}
            </Transition>
        )}
      </TransitionGroup>
    </StyledContainer>
  );
};

export { TableImage };