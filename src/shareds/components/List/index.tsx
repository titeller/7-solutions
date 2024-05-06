import { TypeItem } from '@src/shareds/components/List/entries';
import Button from '../Button';

interface IProps {
    label: string | JSX.Element;
    items: TypeItem[];
    onTriggerBack: (item: TypeItem) => void;
    onItemClick: (item: TypeItem) => void;
}

export default function List({
    label,
    items,
    onTriggerBack,
    onItemClick,
}: IProps) {
    return (
        <div className="w-full border border-slate-400 rounded-sm">
            <div className="p-1 bg-slate-300 text-center font-bold">{label}</div>
            <div className="flex flex-col gap-2 p-2">
                {items.map((item) =>
                    (
                        <Button
                            className='w-full'
                            key={item.name}
                            label={item.name}
                            isTriggerBack
                            onTriggerBack={() => {
                                onTriggerBack(item);
                            }}
                            onClick={() => {
                                onItemClick(item);
                            }}
                        />
                    ))}
            </div>
        </div>
    );
}
