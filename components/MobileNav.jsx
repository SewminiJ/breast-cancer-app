import { useState, useEffect } from "react"
import  ReactDom  from "react-dom"
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const MobileNav = (props) => {
    const {setOpen} = props

    const [_document, set_document] = useState(null)

    const { currentUser, logout } = useAuth()
    const route = useRouter();

   useEffect(() => {
        set_document(document)
    }, [])

    if(!_document) return null
    return ReactDom.createPortal(
        <div className="fixed inset-0 bg-white text-slate-900 flex flex-col text-lg sm:text-xl z-10 lg  :hidden">
            <div className="h-[60px] flex items-center justify-between shadow-md border-slate-900 p-4">
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
                <CloseIcon onClick={() => setOpen(false)} className="fa-solid fa-xmark duration-300 hover:rotate-90 cursor-pointer text-lg sm:text-3xl" />
            </div>
            {/* <div onClick={() => {
                setOpen(false)
            }} className="p-4 flex flex-col gap-3">
                <h2 className="select-none duration-300 hover:pl-2 cursor-pointer">Logout</h2>
            </div> */}
            <div>
                <div className="p-2">
                {currentUser ? (
                            <div
                                className="flex items-center w-full justify-end"
                                onClick={() => {
                                    logout()
                                    setOpen(false)
                                    route.push('signIn')
                            }}>
                                 <button
                                    className="w-[100px] h-10 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA]  rounded-md capitalize p-3 font-normal text-white flex items-center justify-center text-sm my-1 mx-2">
                                        Sign Out
                                    </button>
                            </div>
                        ) : (
                            <div className='text-bold flex items-center w-full justify-center' >
                                <Link
                                    className="w-full h-10 rounded-md capitalize p-3 font-normal text-blue-500 flex items-center justify-center text-sm hover:bg-slate-100 duration-300 my-1 mx-2"
                                    onClick={() => setOpen(false)}
                                    href={'/signIn'}
                                >Login</Link>
                                <Link
                                    className="w-full h-10 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA]  rounded-md capitalize p-3 font-normal text-white flex items-center justify-center text-sm my-1 mx-2"
                                    onClick={() => setOpen(false)}
                                    href={"/signUp"}>
                                    Register
                                </Link>
                            </div>
                        )}
                </div>
            </div>
            <div>
                <ul className='flex items-center flex-col justify-between w-full'>
                    <li className='text-semibold text-md h-10 hover:bg-slate-100 w-full flex items-center justify-center cursor-pointer'>
                        <Link href={'/'} onClick={() => setOpen(false)}
                            
                        >Home</Link>
                    </li>
                    <li className='text-semibold text-md h-10 hover:bg-slate-100 w-full flex items-center justify-center cursor-pointer'>
                        <Link href={'/about'} onClick={() => setOpen(false)}
                            
                        >About</Link>
                    </li>
                    <li className='text-semibold text-md h-10 hover:bg-slate-100 w-full flex items-center justify-center cursor-pointer'>
                        <Link href={'/check'} onClick={() => setOpen(false)}
                            
                        >Check Me</Link>
                    </li>
                </ul>
            </div>
        </div>,
        _document.getElementById('portal')

    )
}