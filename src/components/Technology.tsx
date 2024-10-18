import React from 'react'
import Image from 'next/image'

export const Technology = () => {
    return (
        <div className='h-screen flex justify-center items-center p-64' id='technology'>
            <div className='h-full w-full flex justify-between'>
                <div className='w-1/2 flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-7xl font-semibold'>Technology</h1>
                    <p>StrikeBit leverages the most advanced blockchains to enhance and empower our onchain services.</p>
                </div>
                <div>
                    <Image
                        src="/technology.svg"
                        alt=''
                        height={1000}
                        width={1000}
                        className='w-full h-full'
                    />
                </div>
            </div>
        </div>
    )
}
