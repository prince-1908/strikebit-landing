import React from 'react'
import Image from 'next/image'

export const Main = () => {
    return (
        <div className='grow relative px-4'>
            {/* <div className='w-[442.49px] h-[442.49px] gradient-circle rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[-5]'></div> */}
            <Image 
                src="/gradient-ball.svg"
                alt=''
                height={900}
                width={900}
                className='absolute top-1/2 left-1/2 translate-x-[-43.75%] translate-y-[-53%] z-[-5]'
            />

            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-128%] flex justify-center items-center flex-col gap-8'>
                <h1 className='text-7xl tracking-[45px] ml-[15px]'>STRIKEBIT</h1>
                <p className='font-semibold'>Reinventing interactions with Crypto Options</p>
            </div>

            <div className='absolute flex gap-4 left-4 bottom-4'>
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
