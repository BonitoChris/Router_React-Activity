import React from 'react';

export function Contact() {
    return (
        <div class='contact-container flex flex-col text-center'>
            <h1 className='text-2xl m-11'>Contact Us</h1>
            <div class='flex flex-row justify-center'>
                <div className='font-sans container sm text-lg m-11 w-64 p-3 rounded-lg text-zinc-700 font-medium drop-shadow-lg bg-slate-100'>
                    <h3>Address</h3>
                    <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='font-sans container sm text-lg m-11 w-64 p-3 rounded-lg text-zinc-700 font-medium drop-shadow-lg bg-slate-100'>
                    <h3>Mobile Number</h3>
                    <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='font-sans container sm text-lg m-11 w-64 p-3 rounded-lg text-zinc-700 font-medium drop-shadow-lg bg-slate-100'>
                    <h3>Telephone Number</h3>
                    <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}