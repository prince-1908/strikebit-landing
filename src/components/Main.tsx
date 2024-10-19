import React from 'react'
import Image from 'next/image'

export const Main = () => {
    return (
        <div className='grow relative px-4'>
            <Image 
                src="/gradient-ball.svg"
                alt=''
                height={900}
                width={900}
                className='absolute top-1/2 left-1/2 translate-x-[-43.75%] translate-y-[-53%] z-[-5]'
            />

            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-128%] flex justify-center items-center flex-col gap-8'>
                <h1 className='text-3xl md:text-5xl lg:text-7xl tracking-[20px] sm:tracking-[45px] ml-[25px] lg:ml-[15px]'>STRIKEBIT</h1>
                <p className='text-sm sm:text-base font-semibold'>Reinventing interactions with Crypto Options</p>
            </div>

            <div className='absolute w-full sm:w-auto grid grid-cols-2 sm:flex gap-4 left-0 bottom-32 sm:left-4 sm:bottom-4'>
                <div className='flex justify-center items-center gap-1'>
                    <Image
                        src="/telegram.svg"
                        alt='telegram'
                        height={18}
                        width={18}
                    />
                    <p>Telegram</p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                    <Image
                        src="/twitter.svg"
                        alt='twitter'
                        height={18}
                        width={18}
                    />
                    <p>Twitter</p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                    <Image
                        src="/medium.svg"
                        alt='medium'
                        height={18}
                        width={18}
                    />
                    <p>Medium</p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                    <Image
                        src="/discord.svg"
                        alt='discord'
                        height={18}
                        width={18}
                    />
                    <p>Discord</p>
                </div>
            </div>
        </div>
    )
}
