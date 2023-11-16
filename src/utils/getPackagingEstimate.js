export const getPackagingEstimate = (data) => {
    const {type, size, models, angular, frame, shelf, light, additionalEquipment, accessories, tableSupport} = {...data};
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
        {
            item: {name: `Стол рабочий серии Base (${type})`, size: `${width}x${deep}`},
            when: true
        },
        {
            item: {name: `Комплект стоек к рабочему столу`, size: `Для столов ${width}`},
            when: baseFrame.selected && baseFrame.registered
        },
        {
            item: {name: `Разделительная рама`, size: `для столов ${width}`},
            when: separatingFrame.selected && separatingFrame.registered
        },
        {
            item: {name: `Комплект крепления верхнего освещения`, size: `для столов ${width}`},
            when: light.mountKit.selected === 'Base',
        },
        {
            item: {name: `Комплект крепления бокового освещения (слева)`, size: `-`},
            when: data.packaging.mountKitLeft.selected,
        },
        {
            item: {name: `Освещение рабочей поверхности`, size: `для столов ${width}`},
            when: light.lightKit.selected === 'Светодиодное',
        },
        {
            item: {name: `Дополнительное освещение под полку`, size: `-`},
            when: light.additionalLightKit.selected === 'Светодиодное',
        },
        {
            item: {name: `Светильник боковой (Левый)`, size: `-`},
            when: data.packaging.lampLeft.selected,
        },
        {
            item: {name: `Верхняя полка для оборудования`, size: `${width}x${baseShelf.selected}`},
            when: baseShelf.isActive && baseShelf.registered
        },
        {
            item: {name: `Дополнительная верхняя полка`, size: `${width}x${additionalShelf.selected}`},
            when: additionalShelf.isActive && additionalShelf.registered
        },
        {
            item: {name: `Нижняя полка`, size: `${width}x${bottomShelf.selected}`},
            when: bottomShelf.isActive && bottomShelf.registered
        },
        {
            item: {name: `Рулонный держатель (нижний)`, size: `${width} мм`},
            when: data.accessories.rollHolderBottom.selected,
        },
        {
            item: {name: "Перфорированный экран (во всю длину)", size: `${width - 10}x325 мм`},
            when: fullPerforatedPlate.selected && fullPerforatedPlate.registered
        },
        {
            item: {name: "Планка для крепления лотков", size: `${width}x95`},
            when: fullPlank.selected && fullPlank.registered
        },
        {
            item: {name: `Перфорированный экран (половинчатый левый)`, size: `${width / 2}x505`},
            when: leftPerforatedPlate.selected && leftPerforatedPlate.registered
        },
        {
            item: {name: `Перфорированный экран (половинчатый правый)`, size: `${width / 2}x505`},
            when: rightPerforatedPlate.selected && rightPerforatedPlate.registered
        },
        {
            item: {name: `Подвесная тумба на 2 ящика`, size: `-`},
            when: lockerDoubleFront.selected && lockerDoubleFront.registered
        },
        {
            item: {name: `Подвесная тумба на 3 ящика`, size: `-`},
            when: lockerTripleFront.selected && lockerTripleFront.registered
        },
        {
            item: {name: `Боковая полка к столешнице (левая)`, size: `${deep} мм`},
            when: data.packaging.leftTabletop.selected,
        },
        {
            item: {name: `Боковая полка к столешнице (правая)`, size: `${deep} мм`},
            when: data.packaging.rightTabletop.selected,
        },
        {
            item: {name: `Боковая приставка к столешнице (левая)`, size: `${deep} мм`},
            when: data.packaging.leftShelf.selected,
        },
        {
            item: {name: `Боковая приставка к столешнице (правая)`, size: `${deep} мм`},
            when: data.packaging.rightShelf.selected,
        },
        {
            item: {name: `Рулонный держатель (половинчатый левый)`, size: `-`},
            when: data.additionalEquipment.rollHolderBaseLeft.selected,
        },
        {
            item: {name: `Рулонный держатель (половинчатый правый)`, size: `-`},
            when: data.additionalEquipment.rollHolderBaseRight.selected,
        },
        {
            item: {name: `Боковой рулонный держатель (правый)`, size: `-`},
            when: data.packaging.rollHolderRight.selected,
        },
        {
            item: {name: `Рулонный держатель (Верхний)`, size: `${width} мм`},
            when: data.additionalEquipment.rollHolderBaseFull.selected,
        },
        {
            item: {name: `Боковой рулонный держатель вертикальный (левый)`, size: `-`},
            when: data.packaging.rollHolderLeft.selected,
        },
        {
            item: {name: `Боковой бортик столешницы (Левый)`, size: `${deep} мм`},
            when: data.accessories.sidePlatformLeft.selected,
        },
        {
            item: {name: `Боковой бортик столешницы (Правый)`, size: `${deep} мм`},
            when: data.accessories.sidePlatformRight.selected,
        },
        {
            item: {name: `Бортик столешницы (Задний)`, size: `${width} мм`},
            when: data.accessories.sidePlatformRight.selected,
        },

        {
            item: {name: `Бортик верхней полки`, size: `-`},
            when: data.accessories.sideShelfBase.selected,
        },
        {
            item: {name: `Бортик дополнительной полки`, size: `-`},
            when: data.accessories.sideShelfAdditional.selected,
        },
    ];
}