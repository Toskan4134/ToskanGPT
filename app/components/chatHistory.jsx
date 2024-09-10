'use client'

import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './chatMessage';
import { ChatHeader } from './chatHeader';
import { ChatEmpty } from './chatEmpty';

export function ChatHistory({ chatId = -1 , onNewChatButton}) {
    const [currentData, setCurrentData] = useState(null);
    const [isNewChat, setIsNewChat] = useState(true)
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
                let data = conversations.find((chat) => chat.id === chatId);
                setCurrentData(data.conversation);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
                setIsNewChat(false)
            }
        };

        fetchData();
    }, [chatId]);

    // Desplázate automáticamente al final del contenedor cuando currentData se actualice
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [currentData]);

    const renderMainContent = () => {
        if (isNewChat) {
            return <ChatEmpty onNewChatButton={onNewChatButton} />;
        }
        if (isLoading) {
            return <ChatMessage message="Cargando..." />;
        }

        if (error) {
            return <ChatMessage message={`Error: ${error}`} />;
        }

        return (
            <div className=' w-full flex flex-col justify-end gap-7'>
                {currentData?.map((element, k) => (
                    <ChatMessage key={k} message={element.content} role={element.role} />
                ))}
            </div>
        );
    };

    return (
        <div ref={chatContainerRef} className="h-full flex justify-between pb-9 flex-col overflow-auto">
            <ChatHeader />
            {renderMainContent()}
        </div>
    );
}
