'use client';
import React, { useState } from 'react';
import { SideMenu } from './components/sideMenu';
import { ChatInput } from './components/chatInput';
import { ChatHistory } from './components/chatHistory';
import { Popup } from './components/popup';

export default function Chat() {
    const [chatId, setChatId] = useState(0);
    const [inputText, setInputText] = useState('');
    const [popupProps, setPopupProps] = useState({
        title: 'title',
        description: 'desc',
        btn1: { text: 'btn1', type: 'primary', onClickFunction: () => {} },
        btn2: { text: 'btn2', type: 'secondary', onClickFunction: () => {} },
        active: false,
    });
    const handleChatChange = (newChatId) => {
        setChatId(newChatId);
    };

    return (
        <main className='flex text-text-primary'>
            <Popup {...popupProps} onSetPopupProps={setPopupProps} />
            <SideMenu
                onChatChange={handleChatChange}
                selectedChatId={chatId}
                onSetPopupProps={setPopupProps}
            />
            <div
                className={`flex flex-col h-screen w-full bg-main-surface-primary left-0`}
            >
                <ChatHistory chatId={chatId} onNewChatButton={setInputText} />
                <ChatInput text={inputText} />
            </div>
        </main>
    );
}
