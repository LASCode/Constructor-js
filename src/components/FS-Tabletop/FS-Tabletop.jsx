import {UiCheckboxWrapped} from "../UI-CheckboxWrapped/UI-CheckboxWrapped";
import React from "react";
import {FormSection} from "../FormSection/FormSection";
import {FormItemContainer} from "../FormItemContainer/FormItemContainer";
import {UISelectButtonWrapped} from "../UI-SelectButtonWrapped/UI-SelectButtonWrapped";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const FSTabletop = ({state, error, setError, onChangeTabletop}) => {
    const { tabletop } = state;
    const { leftTabletop, rightTabletop } = tabletop;
    const changeShelfData = (target, value) => {
        onChangeTabletop({...tabletop, [target]: {...tabletop[target], selected: value}});
    }
    const changeShelfIsActive = (target, value) => {
        onChangeTabletop({...tabletop, [target]: {...tabletop[target], isActive: value}});
    }


    const leftTabletopLabel = <UiCheckboxWrapped
        target='tabletop.leftTabletop'
        checked={leftTabletop?.isActive}
        onChange={e => changeShelfIsActive('leftTabletop', e.target.checked)}
        errors={error}
        title='Левая'
    />
    const rightTabletopLabel = <UiCheckboxWrapped
        target='tabletop.rightTabletop'
        checked={rightTabletop?.isActive}
        onChange={e => changeShelfIsActive('rightTabletop', e.target.checked)}
        errors={error}
        title='Правая'
    />

    return (
        <div className='FsShelf'>
            <FormSection title='Дополнительные столешницы:' >
                <div className='FsShelf__body'>
                    { !leftTabletop.hidden &&
                        <FormItemContainer title={leftTabletopLabel} >
                            <UISelectButtonWrapped
                                values={leftTabletop.options}
                                current={leftTabletop.selected}
                                onChange={(value) => changeShelfData('leftTabletop', value)}
                                disabled={!leftTabletop.isActive?leftTabletop.options:[]}
                                errors={error}
                                target='tabletop.leftTabletop'
                            />
                        </FormItemContainer>
                    }
                    { !rightTabletop.hidden &&
                        <FormItemContainer title={rightTabletopLabel}>
                            <UISelectButtonWrapped
                                values={rightTabletop.options}
                                current={rightTabletop.selected}
                                onChange={(value) => changeShelfData('rightTabletop', value)}
                                disabled={!rightTabletop.isActive?rightTabletop.options:[]}
                                errors={error}
                                target='tabletop.rightTabletop'
                            />
                        </FormItemContainer>
                    }
                </div>
            </FormSection>
        </div>
    );
}