import { FormButton } from '@/components/FormButton'
import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {MobileNav} from '../../components/MobileNav';


export const Navbar = () => {
    const { currentUser, logout } = useAuth()
    const route = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between w-full px-4 py-1 bg-white h-[60px] z-60 fixed shadow-md z-100">
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
                <div className='hidden mr-8 w-full lg:flex justify-center select-none'>
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
                <div className='block lg:hidden'>
                    <MenuIcon className='cursor-pointer' onClick={() => setOpen(true)}/>
                    {open && <MobileNav setOpen={setOpen} />}
                </div>
                <div className='hidden lg:block'>
                    <div className='w-1/3 flex items-center justify-between'>
                        <div className='w-[100px] flex items-center justify-between p-1 cursor-pointer mr-8'>
                            <Image alt='uk' src={'/images/uk.png'} width={40} height={40} className='rounded-md p-2 ' />
                            <h1 className='text-slate-600'>English</h1>
                        </div>

                        {currentUser ? (
                            <div onClick={() => {
                                logout()
                                route.push('signIn')
                            }}>
                                 <button
                                    className="w-[100px] h-10 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA]  rounded-md capitalize p-3 font-normal text-white flex items-center justify-center text-md">
                                        Sign Out
                                    </button>
                            </div>
                        ) : (
                            <div className='text-bold flex items-center'>
                                <Link
                                    className={`text-[#1455FD] mr-4 ${route.pathname === '/signIn' ? 'active' : ''}`}
                                    href={'/signIn'}
                                >Login</Link>
                                <Link
                                    className="w-full h-10 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA]  rounded-md capitalize p-3 font-normal text-white flex items-center justify-center text-md"
                                    href={"/signUp"}>
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <style jsx>{`
                    .active {
                    text-decoration: underline;
                    text-decoration-color: #3A8EF6;
                    text-underline-offset: 4px;
                    }
                    
                `}</style>
            </div>
        </>
    )
}