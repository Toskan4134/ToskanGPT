'use client';

import { CustomButton } from './customButton';

export function Popup({
    title,
    description,
    btn1,
    btn2,
    active,
    onSetPopupProps,
}) {
    function closePopup() {
        onSetPopupProps({ title, description, btn1, btn2, active: false });
    }
    return (
        <div
            className={`${
                active ? 'opacity-1' : 'pointer-events-none opacity-0'
            } p-4 fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300`}
            onClick={closePopup}
        >
            <div
                className='relative w-full max-w-md  rounded-lg bg-zinc-800 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl'
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className='flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900'>
                    {title}
                </div>
                <div
                    className='relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-t-zinc-700 text-blue-gray-500'
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
                <div className='flex flex-col items-center justify-start p-4 shrink-0 text-white gap-3 sm:flex-row-reverse'>
                    <CustomButton
                        text={btn1.text}
                        type={btn1.type}
                        color={btn1.color}
                        onClickFunction={
                            btn1.onClickFunction == 'closePopup'
                                ? closePopup
                                : btn1.onClickFunction
                        }
                    />
                    <CustomButton
                        text={btn2.text}
                        type={btn2.type}
                        color={btn2.color}
                        onClickFunction={
                            btn2.onClickFunction == 'closePopup'
                                ? closePopup
                                : btn2.onClickFunction
                        }
                    />
                </div>
            </div>
        </div>
    );
}
