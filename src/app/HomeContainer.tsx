'use client'
import { useState } from 'react';
import { fruitAndVegetableList, fruitAndVegetableTypeList } from '@src/shareds/constants/config';
import HomeScreen from './HomeScreen';
import { TypeItem } from '@src/shareds/components/List/entries';

const HomeContainer = () => {
    const itemSelectedListDefault: TypeItem[] = [];
    const [itemSelectedList, setItemSelectedList] = useState<TypeItem[]>(itemSelectedListDefault);

    const onItemSelected = (item: TypeItem) : void => {
        setItemSelectedList([...itemSelectedList, item]);
    };

    const onItemSelectedExpired = (item: TypeItem) => {
        setItemSelectedList((state) =>
            state.filter((itemSelected) =>
                itemSelected.name != item.name));
    };

    const onItemSelectedClick = (item: TypeItem) => {
        setItemSelectedList(
            itemSelectedList.filter((itemSelected) =>
                itemSelected.name != item.name));
    };

    const staticData = {
        itemSelectedList,
        fruitAndVegetableList,
        fruitAndVegetableTypeList,
    };

    const actionEvent = {
        onItemSelected,
        onItemSelectedExpired,
        onItemSelectedClick,
    };

    return (
        <HomeScreen
            staticData={staticData}
            actionEvent={actionEvent}
        />
    );
};

export default HomeContainer;
