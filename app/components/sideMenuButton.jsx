'use client';

import React, { useRef, useState } from 'react';
import { Icon } from './customIcon';
export function SideMenuButton({
    name,
    chatId,
    onChatClick,
    isSelected,
    type,
    onSetPopupProps,
}) {
    const [isEditable, setIsEditable] = useState(false);

    const [inputValue, setInputValue] = useState(name);

    const [isHovering, setIsHovering] = useState(false);

    const inputRef = useRef(null);

    const popupConfig = {
        title: '¿Eliminar Chat?',
        description: `Esto eliminará el chat <span class="font-bold">${inputValue}</span>`,
        btn1: {
            text: 'Eliminar',
            type: 'primary',
            onClickFunction: () => console.log('Eliminar'),
        },
        btn2: {
            text: 'Cancelar',
            type: 'secondary',
            onClickFunction: 'closePopup',
        },
        active: true,
    };

    const renderButtons = () => {
        const newChatButton = (
            <button className={`z-10`}>
                <Icon type='newChat' />
            </button>
        );

        const chatButtons = (
            <div className='z-10 flex gap-1'>
                <button
                    className={
                        (isHovering || isSelected) && !isEditable
                            ? ''
                            : 'hidden'
                    }
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsEditable(true);
                        inputRef.current.focus();
                        inputRef.current.setSelectionRange(
                            inputValue.length,
                            inputValue.length
                        );
                    }}
                >
                    <Icon type='pencil' />
                </button>
                <button
                    className={
                        (isHovering || isSelected) && !isEditable
                            ? ''
                            : 'hidden'
                    }
                    data-dialog-target='animated-dialog'
                    onClick={(e) => {
                        e.stopPropagation();
                        onSetPopupProps(popupConfig);
                    }}
                >
                    <Icon type='bin' />
                </button>
            </div>
        );

        const buttons = {
            newChat: newChatButton,
            chat: chatButtons,
            default: null,
        };

        return type ? buttons[type] : buttons.default;
    };

    return (
        <div
            className={`max-w-3xl mx-auto p-2 ${
                isSelected ? 'bg-zinc-800 ' : 'bg-zinc-900'
            } w-[90%] relative rounded-lg cursor-pointer text-sm hover:bg-zinc-800 flex justify-between gap-1 transition-all`}
            onClick={() => {
                if (!isEditable) onChatClick(chatId);
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div
                className={`${
                    (isHovering || isSelected) && !isEditable ? 'w-20' : 'w-8'
                } ${
                    isHovering || isSelected ? 'from-zinc-800' : 'from-zinc-900'
                } rounded-r-lg absolute bottom-0 right-0 top-0 bg-gradient-to-l to-transparent from-60%`}
            ></div>
            <input
                type='text'
                value={inputValue}
                title={inputValue}
                className={`overflow-hidden whitespace-nowrap bg-transparent focus:outline-none border-y-[1px] border-transparent ${
                    isEditable ? 'focus:border-b-white z-10' : 'cursor-pointer'
                } w-full`}
                readOnly={!isEditable}
                ref={inputRef}
                onBlur={() => setIsEditable(false)}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setIsEditable(false);
                    }
                }}
            />
            {renderButtons()}
        </div>
    );
}
