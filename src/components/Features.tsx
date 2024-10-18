import React from 'react'
import Image from 'next/image'

export const Features = () => {
    return (
        <div id='features'>
            <div className="h-screen flex justify-center items-center">
                <div className='w-full h-full flex'>
                    <div className='flex flex-col justify-center items-start gap-4 w-1/2 pl-32 px-8'>
                        <h1 className='font-semibold text-5xl'>
                            StrikeBit: <span className='gradient-text-1 '>Pulse</span>
                        </h1>
                        <p>Pulse is a community-driven Telegram bot designed to engage options traders with daily challenges, real-time analytics, and educational tools. The bot offers users interactive features such as options strategy tips, market sentiment polls, and a leaderboard system that rewards participation with tokens.</p>
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
            <div className="h-screen flex justify-center items-center">
                <div className='w-full h-full flex'>
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
                            className='w-[200%] h-[200%] absolute rotate-12 -left-40 bottom-[-700px]'
                        />
                    </div>

                    <div className='flex flex-col justify-center items-start gap-4 w-1/2 pr-32 px-8'>
                        <h1 className='font-semibold text-5xl'>
                            StrikeBit: <span className='gradient-text-1 '>Vates</span>
                        </h1>
                        <p>Vates is a decentralized prediction market platform designed to harness the collective wisdom of its community, allowing users to forecast outcomes on financial markets, geopolitical events, sports, and moreVates also introduces a gamified experience, providing leaderboards and reward systems for top predictors, fostering a competitive yet collaborative community of forecasters. </p>
                    </div>
                </div>
            </div>
            <div className="h-screen flex justify-center items-center">
                <div className='w-full h-full flex'>
                    <div className='flex flex-col justify-center items-start gap-4 w-1/2 pl-32 px-8'>
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
                            className='w-[125%] h-[125%] absolute right-[-175px] top-[-400px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
