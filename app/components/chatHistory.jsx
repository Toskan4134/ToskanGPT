'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './chatMessage';
import { ChatHeader } from './chatHeader';
import { ChatEmpty } from './chatEmpty';

export function ChatHistory({ chatId = -1, onNewChatButton }) {
    const [currentData, setCurrentData] = useState(null);
    const [isNewChat, setIsNewChat] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const chatContainerRef = useRef(null);
    const conversations = require('../test/testConversations.json');
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if (!chatId) {
                setIsNewChat(true);
                setIsLoading(false);
                return;
            }
            try {
                // Aquí debería ir la llamada a la API para obtener la conversación
                // const res = await fetch(
                //     'https://tu.api?chatId=' +
                //         chatId
                // );
                // if (!res.ok) {
                //     throw new Error(`HTTP error! status: ${res.status}`);
                // }
                // const data = await res.json();

                // El formato que debería devolver la API debe ser el de ../test/testConversations.json
                const data = conversations.find((chat) => chat.id === chatId); // Obtener la conversación correspondiente al chatId
                setCurrentData(data.conversation); // Establecer la conversación actual
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
                setIsNewChat(false);
            }
        };

        fetchData();
    }, [chatId]);

    // Desplázate automáticamente al final del contenedor cuando currentData se actualice
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [currentData]);

    const renderMainContent = () => {
        if (isNewChat) {
            return <ChatEmpty onNewChatButton={onNewChatButton} />;
        }
        if (isLoading) {
            return <ChatMessage message='Cargando...' />;
        }

        if (error) {
            return <ChatMessage message={`Error: ${error}`} />;
        }

        return (
            <div className=' w-full flex flex-col justify-end gap-7'>
                {currentData?.map((element, k) => (
                    <ChatMessage
                        key={k}
                        message={element.content}
                        role={element.role}
                    />
                ))}
            </div>
        );
    };

    return (
        <div
            ref={chatContainerRef}
            className='h-full flex justify-between pb-9 flex-col overflow-auto'
        >
            <ChatHeader />
            {renderMainContent()}
        </div>
    );
}
