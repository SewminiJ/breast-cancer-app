import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
    return(
        <div className="flex items-center justify-between w-full px-4 py-2 bg-tranparent h-[60px] z-60 fixed bg-white/80 shadow-md">
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
            <div className='mr-8 w-full flex justify-center'>
                <ul className='flex items-center justify-between w-96'>
                    <li className='text-semibold text-lg'>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className='text-semibold text-lg'>
                        <Link href={'about'}>About</Link>
                    </li>
                    <li className='text-semibold text-lg'>
                        <Link href={'/check'}>Check Me</Link>
                    </li>
                </ul>
            </div>
            <div className='w-1/3 flex items-center justify-between'>
                <h1>language dropdown</h1>
                <div className='text-bold flex items-center'>
                    <Link
                        className='text-[#1455FD] mr-4' 
                        href={'/signIn'}
                    >Login</Link>
                    <Link
                        className="w-full h-10 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA]  rounded-md capitalize p-3 font-semibold text-white flex items-center justify-center" 
                        href={"/signUp"}>
                        Register
                    </Link> 
                </div>
            </div>
        </div>
    )
}