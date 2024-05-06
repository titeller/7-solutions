'use client'
import Button from '@src/shareds/components/Button';
import List from '@src/shareds/components/List';
import { enumButtonType } from '@src/shareds/constants/enum';
import { TypeItem } from '@src/shareds/components/List/entries';

interface IProps {
    staticData: {
        itemSelectedList: TypeItem[];
        fruitAndVegetableList: TypeItem[];
        fruitAndVegetableTypeList: string[];
    };
    actionEvent: {
        onItemSelected: (item: TypeItem) => void;
        onItemSelectedExpired: (item: TypeItem) => void;
        onItemSelectedClick: (item: TypeItem) => void;
    };
}

const HomeScreen = ({
    staticData,
    actionEvent,
}: IProps) => {
    const {
        itemSelectedList,
        fruitAndVegetableList,
        fruitAndVegetableTypeList,
    } = staticData;

    const {
        onItemSelected,
        onItemSelectedExpired,
        onItemSelectedClick,
    } = actionEvent;

    return (
        <main className="px-2 py-2 md:flex md:flex-col md:items-center md:py-24">
            <div className="flex flex-col w-full gap-5 md:flex-row md:max-w-3xl md:h-[32rem]">
                <div className="flex flex-wrap gap-2 md:flex-col md:w-full md:max-w-56 md:overflow-y-scroll">
                    {fruitAndVegetableList
                        .filter((fruitAndVegetable) =>
                            itemSelectedList.length === 0
                            || !itemSelectedList.some((itemSelected) =>
                                itemSelected.name === fruitAndVegetable.name))
                        .map((fruitAndVegetable) =>
                            (
                                <Button
                                    key={fruitAndVegetable.name}
                                    label={fruitAndVegetable.name}
                                    type={enumButtonType.button}
                                    onClick={() =>
                                        onItemSelected(fruitAndVegetable)}
                                />
                            ))}
                </div>
                <div className="flex flex-col gap-2 w-full md:flex-row md:grow">
                    {fruitAndVegetableTypeList.map((fruitAndVegetableType) =>
                        (
                            <div
                                key={fruitAndVegetableType}
                                className="flex w-full min-h-40 md:h-full md:min-h-auto md:overflow-y-scroll"
                            >
                                <List
                                    label={fruitAndVegetableType}
                                    items={itemSelectedList.filter((itemSelected) =>
                                        itemSelected.type === fruitAndVegetableType)}
                                    onTriggerBack={(item) => {
                                        onItemSelectedExpired(item);
                                    }}
                                    onItemClick={(item) => {
                                        onItemSelectedClick(item);
                                    }}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </main>
    );
};

export default HomeScreen;
