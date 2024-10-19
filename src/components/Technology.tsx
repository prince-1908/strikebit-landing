import React from 'react'
import Image from 'next/image'

export const Technology = () => {
    return (
        <div className='xl:h-screen flex justify-center items-center p-4 sm:p-16 md:p-32 xl:p-64 my-32 xl:my-0' id='technology'>
            <div className='h-full w-full gap-8 lg:gap-0 flex flex-col lg:flex-row justify-between'>
                <div className='w-full xl:w-1/2  flex flex-col justify-center items-start gap-8 lg:gap-4'>
                    <h1 className='text-5xl xl:text-7xl w-full text-center lg:text-left font-semibold'>Technology</h1>
                    <p className='text-center lg:text-left'>StrikeBit leverages the most advanced blockchains to enhance and empower our onchain services.</p>
                </div>

                <div className='grid grid-cols-4 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-4'>
                    <Image
                        src="/sui-logo.svg"
                        alt=''
                        height={100}
                        width={100}
                        className='w-full h-full'
                    />
                    <Image
                        src="/tg-logo.svg"
                        alt=''
                        height={100}
                        width={100}
                        className=' w-full h-full'
                    />
                    <Image
                        src="/sei-logo.svg"
                        alt=''
                        height={100}
                        width={100}
                        className=' w-full h-full'
                    />
                    <Image
                        src="/solana-logo.svg"
                        alt=''
                        height={100}
                        width={100}
                        className=' w-full h-full'
                    />
                </div>
            </div>
        </div>
    )
}
