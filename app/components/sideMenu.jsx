'use client';
import React, { useState } from 'react';
import { SideMenuButton } from './sideMenuButton';
import moment from 'moment';
import 'moment/locale/es';
import { capitalize } from '../utils';
import { Icon } from './icon';

moment.locale('es');

export function SideMenu({ onChatChange, selectedChatId, onSetPopupProps }) {
    const [showMenu, setShowMenu] = useState(false);
    const chatList = require('../test/testChats.json');

    function getPreviousMonths() {
        const currentYear = moment().year();
        const previousMonths = [];

        for (let i = 1; i <= 4; i++) {
            const previousMonth = moment().subtract(i, 'months');
            const monthName = previousMonth.format('MMMM');

            if (previousMonth.year() !== currentYear) {
                previousMonths.push(`${monthName} ${previousMonth.year()}`);
            } else {
                previousMonths.push(monthName);
            }
        }

        return previousMonths;
    }

    function getCategory(creationDate) {
        const today = moment();
        const date = moment(creationDate, 'DD/MM/YYYY');
        const currentYear = today.year();

        if (today.isSame(date, 'day')) {
            return 'hoy';
        } else if (today.subtract(1, 'day').isSame(date, 'day')) {
            return 'ayer';
        }

        today.add(1, 'day');

        const startOf7Days = today.clone().subtract(7, 'days').startOf('day');
        const endOf7Days = today.clone().endOf('day');
        if (date.isBetween(startOf7Days, endOf7Days, 'day', '[]')) {
            return '7 días previos';
        }

        const startOf30Days = today.clone().subtract(30, 'days').startOf('day');
        const endOf30Days = today.clone().endOf('day');
        if (date.isBetween(startOf30Days, endOf30Days, 'day', '[]')) {
            return '30 días previos';
        }

        const previousMonths = getPreviousMonths();
        const dateFormatted = date.format(
            currentYear === date.year() ? 'MMMM' : 'MMMM YYYY'
        );

        if (previousMonths.includes(dateFormatted)) {
            return dateFormatted;
        }

        return 'anterior';
    }

    function categorizeChats(chatList) {
        const categories = {
            hoy: [],
            ayer: [],
            '7 días previos': [],
            '30 días previos': [],
        };

        const previousMonths = getPreviousMonths();
        previousMonths.forEach((month) => {
            categories[month] = [];
        });

        categories['anterior'] = [];

        chatList.forEach((chat) => {
            const category = getCategory(chat.creationDate);
            if (category in categories) {
                categories[category].push(chat);
            } else {
                categories['anterior'].push(chat);
            }
        });

        const filteredCategories = {};
        for (const [category, chats] of Object.entries(categories)) {
            if (chats.length > 0) {
                filteredCategories[category] = chats;
            }
        }

        const sortedCategories = {};

        for (const [category, chats] of Object.entries(filteredCategories)) {
            if (category !== 'anterior') {
                sortedCategories[category] = chats;
            }
        }

        if (filteredCategories['anterior'].length > 0) {
            sortedCategories['anterior'] = filteredCategories['anterior'];
        }

        return sortedCategories;
    }

    const categories = categorizeChats(chatList);

    return (
        <div>
            <div
                className={`w-full h-full z-20 absolute bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ${
                    showMenu
                        ? 'opacity-1 md:opacity-0 md:pointer-events-none'
                        : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setShowMenu(false)}
            ></div>

            <div
                className={`flex flex-col h-screen sidebar bg-white dark:bg-sidebar-surface-primary text-white max-w-64 w-full md:w-64 flex-shrink-0 ${
                    showMenu ? 'ml-0' : '-ml-64'
                } absolute md:relative top-0 bottom-0 -ml-64 md:ml-0 z-40 transition-left duration-300 ease-in-out`}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <button
                    className={`toggle-btn md:hidden absolute top-0 ${
                        showMenu ? '-right-10' : '-right-10'
                    } top-2.5 z-50 bg-transparent text-white p-2`}
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <Icon type={showMenu ? 'cross' : 'menu'} />
                </button>
                <div className='h-full overflow-y-auto relative'>
                    <div className='py-5 flex sticky top-0 z-20 bg-zinc-900'>
                        <SideMenuButton
                            name='Nuevo Chat'
                            chatId={null}
                            onChatClick={onChatChange}
                            type={'newChat'}
                        />
                    </div>
                    {Object.entries(categories).map(([category, chats], i) => (
                        <div key={category}>
                            <h3
                                className={`w-[90%] text-xs flex justify-between max-w-3xl mx-auto p-2 text-zinc-300 font-semibold ${
                                    i !== 0 ? 'mt-5' : ''
                                }`}
                            >
                                {capitalize(category)}
                            </h3>
                            <div className='flex gap-1 flex-col'>
                                {chats.map((element, key) => (
                                    <SideMenuButton
                                        key={key}
                                        name={element.name}
                                        chatId={element.id}
                                        onChatClick={onChatChange}
                                        isSelected={
                                            selectedChatId === element.id
                                        }
                                        type={'chat'}
                                        onSetPopupProps={onSetPopupProps}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className='text-center text-xl p-3.5'>ToskanGPT</h1>
                </div>
            </div>
        </div>
    );
}
