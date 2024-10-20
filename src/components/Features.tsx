import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Features = () => {
    return (
        <div id='features' className='overflow-x-hidden py-12 md:py-0'>
            <div className="xl:h-screen flex justify-center items-center">
                <div className='w-full h-full flex flex-col sm:flex-row'>
                    <div className='flex flex-col justify-center items-start gap-4 w-full sm:w-1/2 md:pl-16 lg:pl-24 xl:pl-32 px-8'>
                        <h1 className='font-semibold text-5xl'>
                            StrikeBit: <span className='gradient-text-1'>Pulse</span>
                        </h1>
                        <p>Pulse is a community-driven Telegram bot designed to engage options traders with daily challenges, real-time analytics, and educational tools. The bot offers users interactive features such as options strategy tips, market sentiment polls, and a leaderboard system that rewards participation with tokens. Join aur <Link href="https://t.me/+PWmB7O5jhO5mNmVl" target='_blank' className='gradient-text-1'>Telegram group</Link> to experience our Pulse bot</p>
                    </div>
                    <div className='relative grow'>
                        <Image
                            src="/feature1-bg.svg"
                            alt=""
                            height={1000}
                            width={1000}
                            className='w-full h-full absolute z-[-5]'
                        />
                        <Image
                            src="/feature1.svg"
                            alt=""
                            height={1000}
                            width={1000}
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>

            <div className="my-32 xl:my-0 xl:h-screen flex justify-center items-center">
                <div className='w-full h-full flex flex-col-reverse sm:flex-row'>
                    <div className='relative grow'>
                        <Image
                            src="/feature2.svg"
                            alt=""
                            height={1000}
                            width={1000}
                            className='w-full h-full'
                        />
                        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-black to-transparent"></div>
                        <div className="absolute inset-y-0 right-0 w-[70%] bg-gradient-to-l from-black to-transparent"></div>
                        <Image
                            src="/feature2-bg.svg"
                            alt=""
                            height={1000}
                            width={1000}
                            className='w-[200%] h-[200%] absolute rotate-12 -left-24 md:-left-44 xl:-left-40 bottom-[-200px] sm:bottom-[-400px] xl:bottom-[-700px]'
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-4 w-full sm:w-1/2 md:pr-16 lg:pr-24 xl:pr-32 px-8'>
                        <h1 className='font-semibold text-5xl'>
                            StrikeBit: <span className='gradient-text-1 '>Vates</span>
                        </h1>
                        <p>Vates is a decentralized prediction market platform designed to harness the collective wisdom of its community, allowing users to forecast outcomes on financial markets, geopolitical events, sports, and moreVates also introduces a gamified experience, providing leaderboards and reward systems for top predictors, fostering a competitive yet collaborative community of forecasters. </p>
                    </div>
                </div>
            </div>

            <div className="xl:h-screen flex justify-center items-center">
                <div className='w-full h-full flex flex-col sm:flex-row gap-8 sm:gap-0'>
                    <div className='flex flex-col justify-center items-start gap-4 w-full sm:w-1/2 md:pl-16 lg:pl-24 xl:pl-32 px-8'>
                        <h1 className='font-semibold text-5xl'>
                            StrikeBit: <span className='gradient-text-1 '>Scope</span>
                        </h1>
                        <p>Scope is our suite of analytics tools that will pioneer options analysis. With features like free option chain, strategy builder, live P&L analysis, open interest market analysis, and premade strategies, Scope will solve the problems of options analysis in crypto.</p>
                    </div>
                    <div className='relative grow'>
                        <Image
                            src="/feature3.svg"
                            alt=""
                            height={1000}
                            width={1000}
                            className='w-full h-full'
                        />
                        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-black to-transparent"></div>
                        <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-black to-transparent"></div>
                        <Image
                            src="/feature3-bg.svg"
                            alt=""
                            height={1000}
                            width={1000}
                            className='w-[125%] h-[125%] absolute right-[-100px] md:right-[-175px] top-[-100px] sm:top-[-150px] md:top-[-200px] xl:top-[-400px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
