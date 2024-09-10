'use client';

import { CustomButton } from './customButton';

export function ChatEmpty({ onNewChatButton }) {
    return (
        <div
            className={`relative w-full h-full flex content-center justify-center flex-col items-center`}
        >
            <h3 className='text-center text-lg opacity-80'>ToskanGPT</h3>
            <h1 className='text-center text-2xl font-semibold'>
                ¿Cómo te puedo ayudar hoy?
            </h1>
            <div className='absolute bottom-0 flex flex-wrap gap-2 justify-center max-w-3xl text-sm'>
                <CustomButton
                    text={'Design a programming game'}
                    text2={'teach basics in a fun way'}
                    type={'newChat'}
                    onClickFunction={() => {
                        onNewChatButton(
                            'Design a programming game' +
                                ' ' +
                                'teach basics in a fun way'
                        );
                    }}
                />
                <CustomButton
                    text={'Help me debug'}
                    text2={'a linked list problem'}
                    type={'newChat'}
                    onClickFunction={() => {
                        onNewChatButton(
                            'Help me debug' + ' ' + 'a linked list problem'
                        );
                    }}
                />
                <CustomButton
                    text={'Compare business strategies'}
                    text2={'for transitioning from budget to luxury'}
                    type={'newChat'}
                    onClickFunction={() => {
                        onNewChatButton(
                            'Compare business strategies' +
                                ' ' +
                                'for transitioning from budget to luxury'
                        );
                    }}
                />
                <CustomButton
                    text={'Plan a trip'}
                    text2={'to explore the Madagascar wildlife on a budget'}
                    type={'newChat'}
                    onClickFunction={() => {
                        onNewChatButton(
                            'Plan a trip' +
                                ' ' +
                                'to explore the Madagascar wildlife on a budget'
                        );
                    }}
                />
            </div>
        </div>
    );
}
