import {FormSection} from "../FormSection/FormSection";
import {UiCheckboxWrapped} from "../UI-CheckboxWrapped/UI-CheckboxWrapped";
import React from "react";
import './FS-Support.scss';

export const FSSupport = ({state, error, setError, onChange}) => {
    const { tableSupport } = state;

    const changeSupportData = (target, value) => {
        onChange({...tableSupport, [target]: {...tableSupport[target], selected: value}})
    }

    const supportItems = [
        [
            {target: 'solid_support_0L', title: 'Н - Опора (Левая)'},
            {target: 'solid_support_1L', title: 'Тумба D (Левая)'},
            {target: 'solid_support_2L', title: 'Тумба D1 (Левая)'},
            {target: 'solid_support_3L', title: 'Тумба D3 (Левая)'},
            {target: 'solid_support_5L', title: 'Тумба D5 (Левая)'},
            {target: 'solid_support_0R', title: 'Н - Опора (Правая)'},
            {target: 'solid_support_1R', title: 'Тумба D (Правая)'},
            {target: 'solid_support_2R', title: 'Тумба D1 (Правая)'},
            {target: 'solid_support_3R', title: 'Тумба D3 (Правая)'},
            {target: 'solid_support_5R', title: 'Тумба D5 (Правая)'},
        ],
        [
            {target: 'solid_support_0L', title: 'Н - Опора (Левая)'},
            {target: 'solid_support_1L', title: 'Тумба D (Левая)'},
            {target: 'solid_support_2L', title: 'Тумба D1 (Левая)'},
            {target: 'solid_support_3L', title: 'Тумба D3 (Левая)'},
            {target: 'solid_support_5L', title: 'Тумба D5 (Левая)'},
        ],
        [
            {target: 'solid_support_0R', title: 'Н - Опора (Правая)'},
            {target: 'solid_support_1R', title: 'Тумба D (Правая)'},
            {target: 'solid_support_2R', title: 'Тумба D1 (Правая)'},
            {target: 'solid_support_3R', title: 'Тумба D3 (Правая)'},
            {target: 'solid_support_5R', title: 'Тумба D5 (Правая)'},
        ]
    ];

    return (
        <div className='FsSupport'>
            <FormSection title='Варианты опор:'>
                <div className='FsSupport__body'>
                    <div>
                        {supportItems[1].filter(el=>!tableSupport[el.target].hidden).map(el =>
                            <UiCheckboxWrapped
                                key={el.target}
                                target={`tableSupport.${el.target}`}
                                errors={error}
                                checked={tableSupport[el.target].selected}
                                onChange={(value) => changeSupportData(el.target, value.target.checked)}
                                checkDisabledFunc={el.disableFunc}
                                throwErrorFunc={el.errorFunc}
                                checkErrorFunc={el.checkFunc}
                                title={el.title}
                            />
                        )}
                    </div>
                    <div>
                        {supportItems[2].filter(el=>!tableSupport[el.target].hidden).map(el =>
                            <UiCheckboxWrapped
                                key={el.target}
                                target={`tableSupport.${el.target}`}
                                errors={error}
                                checked={tableSupport[el.target].selected}
                                onChange={(value) => changeSupportData(el.target, value.target.checked)}
                                checkDisabledFunc={el.disableFunc}
                                throwErrorFunc={el.errorFunc}
                                checkErrorFunc={el.checkFunc}
                                title={el.title}
                            />
                        )}
                    </div>
                </div>
            </FormSection>
        </div>
    );
};