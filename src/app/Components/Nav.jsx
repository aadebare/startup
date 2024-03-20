import Link from 'next/link'
import React from 'react'

export default function Navbar(){
    return (
        <nav>
            <ul className='flex bg-slate-900 text-white justify-between p-8'>
                <li>
                <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/signup'>Sign up</Link>
                </li>
                <li>
                    <Link href='/login'>Log in </Link>
                </li>
            </ul>
        </nav>
    )
}