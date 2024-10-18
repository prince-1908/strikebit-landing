import React from 'react'
import Image from 'next/image'

export const Roadmap = () => {
    return (
        <div className='h-screen flex justify-center items-center px-24 py-48' id='roadmap'>
            <div className='w-full h-full flex flex-col gap-16'>
                <h1 className='text-7xl font-semibold'>Roadmap</h1>

                <div className='grow grid grid-cols-5'>
                    <div className="bg-gray p-7 flex flex-col justify-between">
                        <h3 className='gradient-text-1 font-semibold text-2xl'>Q1 2021</h3>
                        <div className='grid gap-4'>
                            <p>OKex Chain Launch</p>
                            <p>Decentralized Lending</p>
                            <p>Cross-chain Asset Issuance</p>
                        </div>
                    </div>
                    <div className='grid place-items-center'>
                        <Image
                            src='/road-1.svg'
                            alt='-->'
                            height={100}
                            width={100}
                            className='w-full'
                        />
                    </div>
                    <div className="bg-gray p-7 flex flex-col justify-between">
                        <h3 className='gradient-text-2 font-semibold text-2xl'>Q2 2021</h3>
                        <div>
                            <p>OKex Chain Launch</p>
                        </div>
                    </div>
                    <div className='grid place-items-center'>
                        <Image
                            src='/road-2.svg'
                            alt='-->'
                            height={100}
                            width={100}
                            className='w-full'
                        />
                    </div>
                    <div className="bg-gray p-7 flex flex-col justify-between">
                        <h3 className='gradient-text-1 font-semibold text-2xl'>Q3 2021</h3>
                        <div>
                            <p>Decentralized Margin Trading</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
