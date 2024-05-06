import clsx from 'clsx';
import { defaultDelayToTriggerBack } from '@src/shareds/constants/config';
import { enumButtonType } from '@src/shareds/constants/enum';
import { useEffect, useState } from 'react';

interface IProps {
    label: string | JSX.Element;
    className?: string;
    type?: enumButtonType;
    isTriggerBack?: boolean;
    delayToTriggerBack?: number;
    onTriggerBack?: () => void;
    onClick?: () => void;
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
    let triggerBackTimer: NodeJS.Timeout | null = null;

    useEffect(() => {
        triggerBackTimer = setTimeout(() => {
            if (isTriggerBack && typeof onTriggerBack != 'undefined') {
                onTriggerBack();
            }
        }, delayToTriggerBack);
        
        return () =>
            clearTimeout(triggerBackTimer as NodeJS.Timeout);
    }, []);

    const handleOnClick = () => {
        if (typeof onClick !== 'undefined') {
            if (isTriggerBack) {
                clearTimeout(triggerBackTimer as NodeJS.Timeout);
            }
            onClick();
        }
    };

    const buttonClassNameDefault = 'border border-slate-300 px-2 py-1 rounded-sm bg-white hover:bg-slate-100';
    const buttonClassName = buttonClassCustomized
        ? clsx(buttonClassNameDefault, buttonClassCustomized)
        : buttonClassNameDefault;
    return (
        <button
            type={type}
            onClick={handleOnClick}
            className={buttonClassName}
        >
            {label}
        </button>
    );
}
