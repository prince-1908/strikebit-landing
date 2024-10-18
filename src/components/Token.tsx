import React from 'react'
import Image from 'next/image'

export const Token = () => {
    return (
        <div className='h-screen flex justify-center items-center p-16' id='token'>
            <div className='h-full w-full flex flex-col gap-4'>
                <h1 className='text-7xl font-semibold'>Strike Token</h1>
                <div className='grow flex gap-12'>
                    <Image
                        src="/token-graph.svg"
                        alt=''
                        height={100}
                        width={100}
                        className='w-3/4'
                    />

                    <div className='grow flex flex-col gap-8 pr-2'>
                        <div className='h-1/2 p-8 flex flex-col justify-between items-start light-gradient'>
                            <h2 className='text-5xl font-semibold'>
                                Premium<br />Features
                            </h2>
                            <button className='white-btn'>
                                Learn more
                            </button>
                        </div>
                        <div className='h-1/2 p-8 flex flex-col justify-between items-start light-gradient'>
                            <h2 className='text-5xl font-semibold'>
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
