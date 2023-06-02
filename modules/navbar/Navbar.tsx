import { FormButton } from '@/components/FormButton'
import { useAuth } from '@/context/AuthContext'
import { sign } from 'crypto'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const Navbar = () => {
    const { currentUser, logout } = useAuth()
    const [accessible, setAccessible] = useState(false)
    const route = useRouter();
    return (
        <div className="flex items-center justify-between w-full px-4 py- bg-transparent h-[60px] z-60 fixed bg-white/80 shadow-md z-40">
            <div className='flex cursor-pointer w-1/3'>
                <Image
                    className='mr-4'
                    src={"/images/logo1.png"}
                    alt={"google-button"}
                    width={40}
                    height={40}
                />
                <Image
                    src={"/images/logo2.png"}
                    alt={"google-button"}
                    width={120}
                    height={40}
                />
            </div>

            {currentUser ? <div>hi</div> : <div>bye</div>}
            <div className='mr-8 w-full flex justify-center select-none'>
                <ul className='flex items-center justify-between w-96'>
                    <li className={`text-semibold text-lg ${route.pathname === '/' ? 'active' : ''}`}>
                        <Link href={'/'} >Home</Link>
                    </li>
                    <li className={`text-semibold text-lg ${route.pathname === '/about' ? 'active' : ''}`}>
                        <Link href={'about'}>About</Link>
                    </li>
                    <li className={`text-semibold text-lg ${route.pathname === '/check' ? 'active' : ''}`}>
                        <Link href={'/check'}>Check Me</Link>
                    </li>
                </ul>
            </div>
            <div className='w-1/3 flex items-center justify-between'>
                <div className='w-[100px] flex items-center justify-between p-1 cursor-pointer'>
                    <Image alt='uk' src={'/images/uk.png'} width={40} height={40} className='rounded-md p-2 ' />
                    <h1 className='text-slate-600'>English</h1>
                </div>

                {currentUser ? (
                    <div onClick={() => {
                        logout()
                        route.push('signIn')
                    }}>
                        <FormButton buttonType='Sign Out' variant="contained" />
                    </div>
                ) : (
                    <div className='text-bold flex items-center'>
                        <Link
                            className={`text-[#1455FD] mr-4 ${route.pathname === '/signIn' ? 'active' : ''}`}
                            href={'/signIn'}
                        >Login</Link>
                        <Link
                            className="w-full h-10 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA]  rounded-md capitalize p-3 font-semibold text-white flex items-center justify-center"
                            href={"/signUp"}>
                            Register
                        </Link>
                    </div>
                )}
            </div>
            <style jsx>{`
                .active {
                text-decoration: underline;
                text-decoration-color: #000000;
                text-underline-offset: 2px;
                }
                
            `}</style>
        </div>
    )
}