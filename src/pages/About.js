import React from 'react';

export function About() {
    return (
        <div class='contact-container flex flex-col text-center'>
            <h1 className='text-2xl m-11'>About Us</h1>
            <div class='flex flex-row justify-center'>
                <div className='font-sans container sm text-lg m-11 w-64 p-3 rounded-lg text-zinc-700 font-medium drop-shadow-lg bg-slate-100'>
                    <h3>Where can you find us?</h3>
                    <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='font-sans container sm text-lg m-11 w-64 p-3 rounded-lg text-zinc-700 font-medium drop-shadow-lg bg-slate-100'>
                    <h3>Who we are</h3>
                    <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='font-sans container sm text-lg m-11 w-64 p-3 rounded-lg text-zinc-700 font-medium drop-shadow-lg bg-slate-100'>
                    <h3>History</h3>
                    <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}