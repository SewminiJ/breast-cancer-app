import { Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export const AboutModule = () => {
    return(
        <>
            <div 
                className="bg-[#FE006B] h-60 w-60 fixed top-48 left-60 rounded-full blur-[250px] z-10"
            />
            <Image 
                className="fixed bottom-0 right-0 z-10"
                src={"/images/bottom-right.png"} 
                alt={"heart"} 
                width={300} 
                height={300}
            />
            <div
                className="width-full max-w-[1600px] h-screen m-auto p-4 flex items-center justify-between z-20"
            >
                <div
                    className="flex items-center flex-col justify-center"
                >
                    <Image 
                        src={"/images/woman3.png"} 
                        alt={"woman"} 
                        width={1200} 
                        height={1200}
                    />
                    <div
                        className="flex items-center justify-center flex-col -mt-[80px]"
                    >
                        <div
                            className="text-bold"
                        >
                            <Link
                                className="text-[#1e44ff] text-xl"
                                href={"/contact"}>
                                    Contact Us
                                </Link> <span className="text-[#353535]">for more info</span>
                        </div>
                        <div
                            className="flex items-center justify-between w-60 mt-1"
                        >
                            <Link href={"/"}>
                                <Image 
                                    src={"/images/facebook.png"} 
                                    alt={"facebook"} 
                                    width={40} 
                                    height={40}
                                />
                            </Link>
                            <Link href={"/"}>
                                <Image 
                                    src={"/images/twitter.png"} 
                                    alt={"twitter"} 
                                    width={40} 
                                    height={40}
                                />
                            </Link>
                            <Link href={"/"}>
                                <Image 
                                    src={"/images/github.png"} 
                                    alt={"github"} 
                                    width={40} 
                                    height={40}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="z-40">
                    <h1 className="text-3xl uppercase text-bold tracking-wider text-[#FF8C8C] mb-8">how to aware from <br /> <span className="text-8xl ml-14 mr-10 mt-8 drop-shadow-md shadow-black">breast</span> <span>cancer?</span></h1>
                    <div className="mb-16">
                        <p className="mb-4 text-xl text-[#343434] text-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer </p>
                        <p className="mb-4 text-xl text-[#343434] text-semibold">Vitae justo. Sit amet cursus sit amet dictum sit amet justo. Tortor vitae purus faucibus ornare. Morbi leo urna molestie at. </p>
                        <p className="mb-4 text-xl text-[#343434] text-semibold">Dignissim convallis aenean et tortor at risus. Et netus et malesuada fames. Dui id ornare arcu odio ut sem nulla pharetra diam. Ut sem viverra aliquet eget sit amet. Quis blandit turpis cursus in hac habitasse.  </p>
                        <p className="mb-4 text-xl text-[#343434] text-semibold">Porttitor leo a diam sollicitudin tempor id. Nisi porta lorem mollis aliquam ut porttitor leo.  </p>
                    </div>
                    <Link
                        href={"/checking"}
                        className="ml-14 text-[#FD5858] text-bold rounded-full bg-white border-[#FF5454] border-[2px] mt-8 px-16 py-2 hover:bg-slate-50 hover:border-[2px] hover:border-[#FF5454]"
                    >Learn More</Link>
                </div>
            </div>
        </>
    )
}