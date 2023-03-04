import './FS-Size.scss';
import React from 'react';
import { FormItemContainer } from "../FormItemContainer/FormItemContainer";
import { OptionsButton } from "../OptionsButton/OptionsButton";
import { FormSection } from "../FormSection/FormSection";
import { WithError } from "../WithError/WithError";
import { UISelectButtonWrapped } from "../UI-SelectButtonWrapped/UI-SelectButtonWrapped";

const FsSize = ({state, error, setError, onChange}) => {
  const { size } = state;
  const { width, deep } = size;
  const changeSizeData = (target, value) => {
    onChange({...size, [target]: {...size[target], selected: value}})
  }
  return (
    <div className='FsSize'>
      <FormSection title='Размер стола:' hr>
        <div className='FsSize__body'>
          {!width.hidden &&
            <FormItemContainer title='Ширина (мм):'>
              <UISelectButtonWrapped
                values={width.options}
                current={width.selected}
                onChange={(value) => changeSizeData('width', value)}
                disabled={[]}
                errors={error}
                target='size.width'
              />
            </FormItemContainer>
          }
          { !deep.hidden &&
            <FormItemContainer title='Глубина (мм):'>
              <UISelectButtonWrapped
                values={deep.options}
                current={deep.selected}
                onChange={(value) => changeSizeData('deep', value)}
                disabled={[]}
                errors={error}
                target='size.deep'
              />
            </FormItemContainer>
          }
        </div>
      </FormSection>
    </div>
    // <FormSection title='Размер стола:'>
    //   { !width.hidden &&
    //     <WithError targetName='size.width' errorArr={error}>
    //       <FormItemContainer title='Ширина стола (мм):'>
    //         <OptionsButton
    //           values={width.options}
    //           current={width.selected}
    //           onChange={(value)=>changeSizeData('width', value)}
    //         />
    //       </FormItemContainer>
    //     </WithError>
    //   }
    //   { !deep.hidden &&
    //     <WithError targetName='size.deep' errorArr={error}>
    //       <FormItemContainer title='Глубина стола (мм):'>
    //         <OptionsButton
    //           values={deep.options}
    //           current={deep.selected}
    //           onChange={(value)=>changeSizeData('deep', value)}
    //         />
    // {/*      </FormItemContainer>*/}
    // {/*    </WithError>*/}
    // {/*  }*/}
    // {/*</FormSection>*/}
  );
};

export { FsSize };