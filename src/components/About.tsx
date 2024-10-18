import React from 'react'
import { Button } from '@mui/material'

export const About = () => {
    return (
        <div className='h-screen flex justify-center items-center px-32 py-[152px]' id='about'>
            <div className='flex w-full h-full'>
                <div className='w-1/2 bg-blue flex flex-col justify-center px-16 items-start gap-8'>
                    <p className='text-7xl font-semibold'>About</p>
                    <p>Aqua Protocoal is a DeFI powerhouse built on OKex Chain. An innovative and integrative platform that offers a suite of DeFi products and services. </p>
                    <Button
                        sx={{
                            color: "#1214fd",
                            borderRadius: "0",
                            bgcolor: "white",
                            padding: "10px 20px",
                        }}
                        className='font-semibold'
                    >
                        Read Deck
                    </Button>
                </div>

                <div className='grow relative radiant-node-bg'>
                    <div className='flex justify-center items-center h-full tracking-widest font-semibold text-4xl'>RADIANT NODE</div>
                </div>
            </div>
        </div>
    )
}
