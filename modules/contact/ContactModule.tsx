import Image from "next/image"
import Link from "next/link"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const ContactModule = () => {
    return(
        <>
            <div 
                className="bg-[#FE006B] h-60 w-60 absolute top-48 left-60 rounded-full blur-[250px] z-10"
            />
            <div 
                className="bg-[#FE006B] h-60 w-60 absolute bottom-48 right-60 rounded-full blur-[250px] z-10"
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
                        className="flex items-start justify-between"
                    >
                        <div
                            className="w-1/4 flex items-center flex-col"
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
                                className="flex items-center justify-between w-40 mt-8 text-start"
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
                                        src={"/images/github.png"} 
                                        alt={"github"} 
                                        width={30} 
                                        height={30}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div
                            className="w-3/4"
                        >
                            <ul
                                className="flex items-start w-full justify-center text-[#4F555A]"
                            >
                                <div className="w-72">
                                    <li>
                                        <h1 className="text-[#1678F2] text-bold text-lg mb-6">Product</h1>
                                    </li>
                                    <li>
                                        <p className="mb-3 text-semibold">Features</p>
                                        <p className="mb-3 text-semibold">Updates</p>
                                    </li>
                                </div>
                                <div className="w-72">
                                    <li>
                                        <h1 className="text-[#1678F2] text-bold text-lg mb-6">Company</h1>
                                    </li>
                                    <li>
                                        <p className="mb-3 text-semibold">About</p>
                                        <p className="mb-3 text-semibold">Check Me</p>
                                        <p className="mb-3 text-semibold">Contact Us</p>
                                    </li>
                                </div>
                                <div className="w-72">
                                    <li>
                                        <h1 className="text-[#1678F2] text-bold text-lg mb-6">Support</h1>
                                    </li>
                                    <li>
                                        <p className="mb-3 text-semibold">Getting Started</p>
                                        <p className="mb-3 text-semibold">Help Center</p>
                                        <p className="mb-3 text-semibold">Chat Support</p>
                                    </li>
                                </div>
                                <div className="w-72">
                                    <li>
                                        <h1 className="text-[#1678F2] text-bold text-lg mb-6">Contact US</h1>
                                    </li>
                                    <li>
                                        <p className="mb-3 text-semibold"><MailOutlineIcon className="text-[#1678F2] mr-2"/> contact@healthyme.com</p>
                                        <p className="mb-3 text-semibold"><LocalPhoneOutlinedIcon className="text-[#1678F2] mr-2"/>(414) 687 - 5892</p>
                                        <p className="mb-3 text-semibold"><LocationOnOutlinedIcon className="text-[#1678F2] mr-2"/>Address</p>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <footer
                        className="flex items-center justify-between text-[#6F6C90] text-md w-full"
                    >
                        <div>
                            <p>Copyright @ 2023</p>
                        </div>
                        <div>
                            <p>
                                All Rights Reserved 
                                |
                                <span className="text-[#FF79C1]">
                                    <Link href={"/"}> Terms and Conditions </Link>
                                </span>
                                |
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