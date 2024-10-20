import React from 'react'
import Image from 'next/image'

export const Roadmap = () => {
    return (
        <div className='xl:h-screen flex justify-center items-center my-24 xl:my-0 px-4 py-16 sm:p-16 xl:px-24  xl:py-32' id='roadmap'>
            <div className='w-full h-full flex flex-col gap-16'>
                <h1 className='text-5xl xl:text-7xl font-semibold'>Roadmap</h1>
                <div className='grow w-full overflow-x-auto custom-scrollbar'>
                    <div className='w-[82rem] flex flex-nowrap'>
                        <div className="bg-gray p-7 flex-shrink-0 w-80 flex flex-col gap-12">
                            <h3 className='gradient-text-1 font-semibold text-2xl'>2024 Q4</h3>
                            <ul className='list-disc ml-4'>
                                <li>Team Building</li>
                                <li>Deck and MVP launch</li>
                                <li>Building community</li>
                                <li>Strategic Partnerships</li>
                            </ul>
                        </div>
                        <div className='grid place-items-center flex-shrink-0 w-24'>
                            <Image src='/road-1.svg' alt='-->' height={100} width={100} className='w-full' />
                        </div>
                        <div className="bg-gray p-7 flex-shrink-0 w-80 flex flex-col gap-12">
                            <h3 className='gradient-text-2 font-semibold text-2xl'>2025 Q1</h3>
                            <ul className='list-disc ml-4'>
                                <li>Exchange Integration</li>
                                <li>Community Growth</li>
                                <li>Alpha Testing and Launch</li>
                                <li>Public token sale preparation</li>
                                <li>Enhanced security and token smart contract audits.</li>
                            </ul>
                        </div>
                        <div className='grid place-items-center flex-shrink-0 w-24'>
                            <Image src='/road-2.svg' alt='-->' height={100} width={100} className='w-full' />
                        </div>
                        <div className="bg-gray p-7 flex-shrink-0 w-80 flex flex-col gap-12">
                            <h3 className='gradient-text-1 font-semibold text-2xl'>2025 Q2</h3>
                            <ul className='list-disc ml-4'>
                                <li>Public token sale</li>
                                <li>Backtesting Module</li>
                                <li>Copy Trading Module</li>
                                <li>Public Beta testing and limited release</li>
                            </ul>
                        </div>
                        <div className='grid place-items-center flex-shrink-0 w-24'>
                            <Image src='/road-1.svg' alt='-->' height={100} width={100} className='w-full' />
                        </div>
                        <div className="bg-gray p-7 flex-shrink-0 w-80 flex flex-col gap-12">
                            <h3 className='gradient-text-2 font-semibold text-2xl'>2025 Q3</h3>
                            <ul className='list-disc ml-4'>
                                <li>Liquidity management tools</li>
                                <li>Dex Adaptors</li>
                                <li>Platform Scaling</li>
                                <li>Token exchange Listings</li>
                            </ul>
                        </div>
                        <div className='grid place-items-center flex-shrink-0 w-24'>
                            <Image src='/road-2.svg' alt='-->' height={100} width={100} className='w-full' />
                        </div>
                        <div className="bg-gray p-7 flex-shrink-0 w-80 flex flex-col gap-12">
                            <h3 className='gradient-text-1 font-semibold text-2xl'>2025 Q4</h3>
                            <ul className='list-disc ml-4'>
                                <li>Ai - driven risk analysis module</li>
                                <li>Dex Adaptors release</li>
                                <li>Community Expansion</li>
                                <li>Advanced Portfolio management tools</li>
                            </ul>
                        </div>
                        <div className='grid place-items-center flex-shrink-0 w-24'>
                            <Image src='/road-1.svg' alt='-->' height={100} width={100} className='w-full' />
                        </div>
                        <div className="bg-gray p-7 flex-shrink-0 w-80 flex flex-col gap-12">
                            <h3 className='gradient-text-2 font-semibold text-2xl'>2026 Q1</h3>
                            <ul className='list-disc ml-4'>
                                <li>Full platform launch</li>
                                <li>Public API release</li>
                                <li>International expansion and adapting the platform to meet local regulatory requirements</li>
                            </ul>
                        </div>
                        <div className='grid place-items-center flex-shrink-0 w-24'>
                            <Image src='/road-2.svg' alt='-->' height={100} width={100} className='w-full' />
                        </div>
                        <div className="bg-gray p-7 flex-shrink-0 w-80 flex flex-col gap-12">
                            <h3 className='gradient-text-1 font-semibold text-2xl'>2026 Q2</h3>
                            <ul className='list-disc ml-4'>
                                <li>Liquidity Management optimizations</li>
                                <li>Advanced features and educational channels release</li>
                                <li>Exploring features for institutional users</li>
                                <li>Security enhancements</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
