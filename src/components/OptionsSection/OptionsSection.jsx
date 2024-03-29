import './OptionsSection.scss';
import React, { createContext, useEffect, useState } from 'react';
import { FsModels } from "../FS-Models/FS-Models";
import { FsAngular } from "../FS-Angular/FS-Angular";
import { FsSize } from "../FS-Size/FS-Size";
import { FsFrame } from "../FS-Frame/FS-Frame";
import { FsShelf } from "../FS-Shelf/FS-Shelf";
import { ErrorMessageBox } from "../ErrorMessageBox/ErrorMessageBox";
import { FsLight } from "../FS-Light/FS-Light";
import { FsEquipment } from "../FS-Equipment/FS-Equipment";
import { FsAccessories } from "../FS-Accessories/FS-Accessories";
import { FsHrWrapper } from '../FS-HrWrapper/FS-HrWrapper';
import {FSSupport} from "../FS-Support/FS-Support";
import {FSTabletop} from "../FS-Tabletop/FS-Tabletop";
import {FSPackagingRL} from "../FS-PackagingRL/FS-PackagingRL";

const OptionsSection = ({data, onChangeData}) => {
  const [error, _setError] = useState([]);
  const [timerId, setTimerId] = useState(null);
  useEffect(() => {
    if (error.length > 0) {
      clearTimeout(timerId);
      setTimerId(setTimeout(() => {_setError(error.slice(1))}, 1500))
    }
  }, [error])
  const setError = (err) => {
    _setError([...error, err]);
  }

  const changeMod = (newModelData) => {
    onChangeData({...data, models: newModelData})
  }
  const changeAngular = (newAngularData) => {
    onChangeData({...data, angular: newAngularData});
  }
  const changeSize = (newSizeData) => {
    onChangeData({...data, size: newSizeData});
  }
  const changeFrame = (newFrameData) => {
    onChangeData({...data, frame: newFrameData});
  }
  const changeShelf = (newShelfData) => {
    onChangeData({...data, shelf: newShelfData});
  }
  const changeTabletop = (newTabletopData) => {
    onChangeData({...data, tabletop: newTabletopData});
  }
  const changeSide = (newSideData) => {
    onChangeData({...data, side: newSideData});
  }
  const changeLight = (newLightData) => {
    onChangeData({...data, light: newLightData});
  }
  const changeSupport = (newSupportData) => {
    onChangeData({...data, tableSupport: newSupportData});
  }
  const changeEquipment = (newEquipmentData) => {
    onChangeData({...data, additionalEquipment: newEquipmentData});
  }
  const changeAccessories = (newAccessoriesData) => {
    onChangeData({...data, accessories: newAccessoriesData});
  }

  const changeByType = type => newData => {
    onChangeData({...data, [type]: newData});
  }

  return (
    <div className='OptionsSection'>
      <FsHrWrapper border boldBorder>
        { !data.models.hidden && <FsModels state={data} error={error} setError={setError} onChange={changeMod}/> }
        { !data.angular.hidden && <FsAngular state={data} error={error} setError={setError} onChange={changeAngular}/> }
        { !data.size.hidden && <FsSize state={data} error={error} setError={setError} onChange={changeSize}/> }
      </FsHrWrapper>

      <FsHrWrapper border boldBorder>
        { !data.frame.hidden && <FsFrame state={data} error={error} setError={setError} onChange={changeFrame}/> }
        { !data.shelf.hidden && <FsShelf state={data} error={error} setError={setError} onChange={changeShelf}/> }
      </FsHrWrapper>

      <FsHrWrapper border boldBorder>
        { !data.light.hidden && <FsLight state={data} error={error} setError={setError} onChange={changeLight}/> }
      </FsHrWrapper>

      {data.type === 'Упаковочный' && (
          <FsHrWrapper border boldBorder>
            { !data?.packaging?.hidden && <FSPackagingRL state={data} error={error} setError={setError} onChange={changeByType('packaging')}/> }
          </FsHrWrapper>
      )}

      {data.type === 'Solid' && (
          <FsHrWrapper border boldBorder>
            { !data.tableSupport.hidden && <FSSupport state={data} error={error} setError={setError} onChange={changeSupport}/> }
          </FsHrWrapper>
      )}

      <FsHrWrapper border invisibleBorder>
        { !data.additionalEquipment.hidden && <FsEquipment state={data} error={error} setError={setError} onChange={changeEquipment}/> }
        { !data.accessories.hidden && <FsAccessories state={data} error={error} setError={setError} onChange={changeAccessories}/> }
      </FsHrWrapper>
      { error.length >= 0 && <ErrorMessageBox errorsArray={error} changeMessageArray={setError}/> }
    </div>
  );
};

export { OptionsSection };