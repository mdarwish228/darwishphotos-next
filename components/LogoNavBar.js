import React from 'react'

function LogoNavbar() {
    return (
        <div className='shadow'>
            <div className='container mx-auto flex justify-between px-2 mb-4'>
                <h1 className='text-6xl font-bold font-tangerine mt-5 hover:text-green-600 tracking-normal'>Darwish Photos</h1>
                <ul className='flex flex-row gap-6 font-inter place-self-center tracking-wide mt-8'>
                    <li className='hover:text-green-600'>About</li>
                    <li className='hover:text-green-600'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default LogoNavbar