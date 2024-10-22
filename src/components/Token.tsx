import React from 'react'
import Image from 'next/image'

export const Token = () => {
    return (
        <div className='xl:h-screen flex justify-center items-center px-4 sm:px-12 md:px-16 py-0 xl:py-16 xl:px-32' id='token'>
            <div className='h-full w-full flex flex-col gap-8 lg:gap-4'>
                <h1 className='text-5xl xl:text-7xl font-semibold'>Strike Token</h1>
                <div className='grow flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-12'>
                    <Image
                        src="/token-graph.svg"
                        alt=''
                        height={100}
                        width={100}
                        className='w-full lg:w-2/3 xl:w-3/4'
                    />

                    <div className='grow flex flex-row lg:flex-col gap-4 xl:gap-8'>
                        <div className='w-1/2 lg:w-full lg:h-1/2 p-4 xl:p-8 flex flex-col justify-between items-start light-gradient gap-12 lg:gap-0'>
                            <h2 className='text-2xl xl:text-5xl font-semibold'>
                                Premium<br />Features
                            </h2>
                            <button className='white-btn'>
                                Learn more
                            </button>
                        </div>
                        <div className='w-1/2 lg:w-full lg:h-1/2 p-4 xl:p-8 flex flex-col justify-between items-start light-gradient gap-12 lg:gap-0'>
                            <h2 className='text-2xl xl:text-5xl font-semibold'>
                                Rewards
                            </h2>
                            <button className='white-btn'>
                                Purchase Node
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
