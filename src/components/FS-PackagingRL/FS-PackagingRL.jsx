import {FormSection} from "../FormSection/FormSection";
import {UiCheckboxWrapped} from "../UI-CheckboxWrapped/UI-CheckboxWrapped";
import React from "react";
import './FS-PackagingRL.scss';

export const FSPackagingRL = ({state, error, setError, onChange}) => {
    const { packaging } = state;

    const changeSupportData = (target, value) => {
        onChange({...packaging, [target]: {...packaging[target], selected: value}})
    }

    const supportItems = [
        [
            {
                target: 'leftShelf',
                title: 'Полка',
            },
            {
                target: 'leftTabletop',
                title: 'Столешница',
                checkFunc: () =>
                    !state.packaging.rollHolderLeft.selected,
                disableFunc: () =>
                    state.packaging.rollHolderLeft.selected,
                errorFunc: () => {
                    switch (true) {
                        case packaging.rollHolderLeft.selected:
                            setError({target: 'packaging.rollHolderLeft', message: 'Сначала уберите рулонный держатель!'}); break;
                    }
                }
            },
            {
                target: 'rollHolderLeft',
                title: 'Рулонный держатель',
                checkFunc: () =>
                    !state.packaging.leftTabletop.selected,
                disableFunc: () =>
                    state.packaging.leftTabletop.selected,
                errorFunc: () => {
                    switch (true) {
                        case state.packaging.leftTabletop.selected:
                            setError({target: 'packaging.leftTabletop', message: 'Сначала уберите столешницу!'}); break;
                    }
                }
            },
            {
                target: 'mountKitLeft',
                title: 'Крепление освещения',
                checkFunc: () => state.frame.baseFrame.selected && !state.packaging.rollHolderLeft.selected,
                disableFunc: () => !state.frame.baseFrame.selected || state.packaging.rollHolderLeft.selected,
                errorFunc: () => {
                    switch (true) {
                        case !state.frame.baseFrame.selected:
                            setError({target: 'frame.baseFrame', message: 'Сначала добавьте заднюю стойку!'}); break;
                        case state.packaging.rollHolderLeft.selected:
                            setError({target: 'packaging.rollHolderLeft', message: 'Сначала уберите рулонный держатель!'}); break;
                    }
                }
            },
            {
                target: 'lampLeft',
                title: 'Освещение',
                checkFunc: () => state.packaging.mountKitLeft.selected,
                disableFunc: () => !state.packaging.mountKitLeft.selected,
                errorFunc: () => {
                    switch (true) {
                        case !state.packaging.mountKitLeft.selected:
                            setError({target: 'packaging.mountKitLeft', message: 'Сначала добавьте крепление освещения!'}); break;
                    }
                }
            },
        ],
        [
            {
                target: 'rightShelf',
                title: 'Полка',
            },
            {
                target: 'rightTabletop',
                title: 'Столешница',
            },
            {
                target: 'rollHolderRight',
                title: 'Рулонный держатель',
            },
        ],
    ];

    return (
        <div className='FsPackagingRL'>
            <FormSection>
                <div className='FsPackagingRL__body'>
                    <div>
                        <span className="FsPackagingRL__title">Левое оснащение</span>
                        {supportItems[0].filter(el=>!packaging[el.target].hidden).map(el =>
                            <UiCheckboxWrapped
                                key={el.target}
                                target={`packaging.${el.target}`}
                                errors={error}
                                checked={packaging[el.target].selected}
                                onChange={(value) => changeSupportData(el.target, value.target.checked)}
                                checkDisabledFunc={el.disableFunc}
                                throwErrorFunc={el.errorFunc}
                                checkErrorFunc={el.checkFunc}
                                title={el.title}
                            />
                        )}
                    </div>
                    <div>
                        <span className="FsPackagingRL__title">Правое оснащение</span>
                        {supportItems[1].filter(el=>!packaging[el.target].hidden).map(el =>
                            <UiCheckboxWrapped
                                key={el.target}
                                target={`packaging.${el.target}`}
                                errors={error}
                                checked={packaging[el.target].selected}
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