'use client';

import { Icon } from './customIcon';

export function ChatHeader() {
    return (
        <div className='sticky top-0 mb-1.5 flex items-center z-10 h-14 p-2 font-semibold bg-zinc-800 justify-center md:justify-start'>
            <div className='flex items-center gap-2'>
                <div className='group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-zinc-700'>
                    <div>
                        Modelo <span className='text-zinc-300'>Version</span>
                    </div>
                    <Icon type='downArrow' />
                </div>
            </div>
        </div>
    );
}
