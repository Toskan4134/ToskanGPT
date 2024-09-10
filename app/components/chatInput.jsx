'use client';
import React, { useEffect, useState } from 'react';
import { Icon } from './customIcon';

export function ChatInput({ text }) {
    const [textAreaHeight, setTextAreaHeight] = useState('52px');
    const [inputValue, setInputValue] = useState(text); // Estado para el valor del input

    const handleInputChange = (event) => {
        const textareaLineHeight = 24;
        const minHeight = 52;
        const currentRows = event.target.value.split('\n').length;
        const newHeight = Math.max(
            minHeight,
            minHeight + (currentRows - 1) * textareaLineHeight
        );
        setTextAreaHeight(`${newHeight}px`);
        setInputValue(event.target.value);
    };

    useEffect(() => {
        setInputValue(text);
    }, [text]);

    return (
        <form className='stretch flex flex-row justify-center gap-3 mb-6 px-5'>
            <div className='max-w-3xl overflow-hidden [&:has(textarea:focus)]:border-token-border-xheavy [&:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full flex-grow relative border dark:text-white rounded-2xl bg-main-surface-primary border-border-medium'>
                <textarea
                    value={inputValue}
                    type='text'
                    name='prompt'
                    id='prompt'
                    placeholder='Manda un mensaje'
                    className='bg-transparent focus:outline-none m-0 w-full resize-none focus:ring-0 focus-visible:ring-0 py-[14px] pr-10 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4 max-h-52'
                    style={{ height: textAreaHeight }}
                    onChange={handleInputChange}
                />
                <button
                    className={`absolute bottom-[11px] right-2 rounded-lg border bg-white p-0.5 text-black transition-colors ${
                        inputValue
                            ? ''
                            : 'disabled:text-gray-400 disabled:opacity-10'
                    }`}
                    disabled={!inputValue}
                >
                    <span data-state='closed'>
                        <Icon type='upArrow' />
                    </span>
                </button>
            </div>
        </form>
    );
}
