import clsx from 'clsx';
import { defaultDelayToTriggerBack } from '@src/shareds/constants/config';
import { enumButtonType } from '@src/shareds/constants/enum';
import { useEffect } from 'react';

interface IProps {
    label: string | JSX.Element;
    className?: string;
    type?: enumButtonType;
    isTriggerBack?: boolean;
    delayToTriggerBack?: number;
    onTriggerBack?: () => void;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
    label,
    className: buttonClassCustomized,
    type = enumButtonType.button,
    isTriggerBack,
    delayToTriggerBack = defaultDelayToTriggerBack,
    onTriggerBack,
    onClick,
}: IProps) {
    useEffect(() => {
        if (isTriggerBack && typeof onTriggerBack != 'undefined') {
            setTimeout(() => {
                onTriggerBack();
            }, delayToTriggerBack);
        }
    }, [isTriggerBack, delayToTriggerBack, onTriggerBack]);

    const buttonClassNameDefault = 'border border-slate-300 px-2 py-1 rounded-sm bg-white hover:bg-slate-100';
    const buttonClassName = buttonClassCustomized
        ? clsx(buttonClassNameDefault, buttonClassCustomized)
        : buttonClassNameDefault;
    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClassName}
        >
            {label}
        </button>
    );
}
