'use client';

export function ChatMessage({ role, message }) {
    return (
        <div className='max-w-3xl w-full mx-auto px-10'>
            <div className='font-bold '>
                {role
                    ?.replace('assistant', 'ToskanGPT')
                    .replace('user', 'Usuario')}
            </div>
            <div>{message}</div>
        </div>
    );
}
