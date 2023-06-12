import Image from "next/image"
import Link from "next/link"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const ContactModule = () => {
    return(
        <>
            <div 
                className="bg-[#FE006B] h-60 w-60 fixed top-48 left-60 rounded-full blur-[250px] z-10"
            />
            <div 
                className="bg-[#FE006B] h-60 w-60 fixed bottom-48 right-60 rounded-full blur-[250px] z-10"
            />

            <div
                className="width-full h-screen m-auto flex items-center z-20 flex-col justify-between"
            >
                <div className="max-w-[1600px] mt-24">
                    <Image 
                        src={"/images/contact.png"} 
                        alt={"contact"} 
                        width={1400} 
                        height={800}
                    />
                </div>
                <div
                    className="w-full bg-white p-8 z-20 rounded-t-3xl"
                >
                    <div
                        className="flex items-start justify-between flex-col md:flex-row"
                    >
                        <div
                            className="w-full md:w-1/4 flex items-center flex-col"
                        >
                            <div>
                            <Image 
                                src={"/images/logo1.png"} 
                                alt={"logo1"} 
                                width={100} 
                                height={80}
                            />
                            <Image 
                                src={"/images/logo2.png"} 
                                alt={"logo2"} 
                                width={180} 
                                height={80}
                            />
                            </div>
                            <div
                                className="flex items-center justify-between w-40 mt-8 text-start mb-6"
                            >
                                <Link href={"/"}>
                                    <Image 
                                        src={"/images/facebook.png"} 
                                        alt={"facebook"} 
                                        width={30} 
                                        height={30}
                                    />
                                </Link>
                                <Link href={"/"}>
                                    <Image 
                                        src={"/images/twitter.png"} 
                                        alt={"twitter"} 
                                        width={30} 
                                        height={30}
                                    />
                                </Link>
                                <Link href={"/"}>
                                    <Image 
                                        src={"/images/linkedin.png"} 
                                        alt={"linkedin"} 
                                        width={30} 
                                        height={30}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div
                            className="w-full md:w-3/4 text-sm md:text-md flex"
                        >
                            <ul
                                className="flex flex-col md:flex-row items-center md:items-start w-full justify-center text-[#4F555A]"
                            >
                                <div className="w-72">
                                    <li>
                                        <h1 className="text-[#1678F2] text-bold mb-6 text-sm md:text-lg font-bold md:font-medium">Product</h1>
                                    </li>
                                    <li>
                                        <p className="mb-3 text-semibold cursor-pointer hover:text-sky-500 duration-300">Features</p>
                                        <p className="mb-3 text-semibold cursor-pointer hover:text-sky-500 duration-300">Updates</p>
                                    </li>
                                </div>
                                <div className="w-72">
                                    <li>
                                        <h1 className="text-[#1678F2] text-bold mb-6 text-sm md:text-lg font-bold md:font-medium">Company</h1>
                                    </li>
                                    <li>
                                        <Link href={"/about"}><p className="mb-3 text-semibold cursor-pointer hover:text-sky-500 duration-300">About</p></Link>
                                        <Link href={"/check"}><p className="mb-3 text-semibold cursor-pointer hover:text-sky-500 duration-300">Check Me</p></Link>
                                        <Link href={"/contact"}><p className="mb-3 text-semibold cursor-pointer hover:text-sky-500 duration-300">Contact Us</p></Link>
                                    </li>
                                </div>
                                <div className="w-72">
                                    <li>
                                        <h1 className="text-[#1678F2] text-bold mb-6 text-sm md:text-lg font-bold md:font-medium">Support</h1>
                                    </li>
                                    <li>
                                        <p className="mb-3 text-semibold cursor-pointer hover:text-sky-500 duration-300">Getting Started</p>
                                        <p className="mb-3 text-semibold cursor-pointer hover:text-sky-500 duration-300">Help Center</p>
                                        <p className="mb-3 text-semibold cursor-pointer hover:text-sky-500 duration-300">Chat Support</p>
                                    </li>
                                </div>
                                <div className="w-72">
                                    <li>
                                        <h1 className="text-[#1678F2] text-bold mb-6 text-sm md:text-lg font-bold md:font-medium">Contact US</h1>
                                    </li>
                                    <li>
                                        <p className="mb-3 text-semibold cursor-pointer hover:text-sky-500 duration-300"><MailOutlineIcon className="text-[#1678F2] mr-2"/> contact@healthyme.com</p>
                                        <p className="mb-3 text-semibold cursor-pointer hover:text-sky-500 duration-300"><LocalPhoneOutlinedIcon className="text-[#1678F2] mr-2"/>+94 112 369 815</p>
                                        <p className="mb-3 text-semibold cursor-pointer hover:text-sky-500 duration-300"><LocationOnOutlinedIcon className="text-[#1678F2] mr-2"/>225/4 Castle St, Borella, Colombo 10</p>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <footer
                        className="flex flex-col text-sm md:flex-row items-center justify-between text-[#6F6C90] md:text-md w-full"
                    >
                        <div>
                            <p>Copyright, CSDevs@2023</p>
                        </div>
                        <div>
                            <p className="flex flex-col md:flex-row items-center">
                                All Rights Reserved 
                                <span className="hidden md:flex">|</span>
                                <span className="text-[#FF79C1]">
                                    <Link href={"/"}> Terms and Conditions </Link>
                                </span>
                                <span className="hidden md:flex">|</span>
                                <span className="text-[#FF79C1]">
                                    <Link href={"/"}> Privacy Policy</Link>
                                </span>
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}