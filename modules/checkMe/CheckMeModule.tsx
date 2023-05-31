import { DropdownField } from "@/components/DropdownField"
import Image from "next/image"
import Link from "next/link"

export const CheckMeModule = () => {
    return(
        <>
            <div 
                className="bg-[#FE006B] h-60 w-60 fixed top-48 left-60 rounded-full blur-[250px] z-10"
            />
            <div 
                className="bg-[#FE006B] h-60 w-60 fixed bottom-48 right-60 rounded-full blur-[250px] z-10"
            />
            <div
                className="width-full max-w-[1200px] h-screen m-auto p-4 flex flex-col z-20 justify-between pt-[100px]"  
            >
                <h1
                    className="text-[#1678F2] text-5xl text-bold mb-6"
                >Let's Make <span className="text-black text-6xl">Your Prediction</span></h1>

                <div className="z-20 w-full flex items-center">
                    <form className="w-7/12">
                        <div className="w-full flex text-bold text-lg items-center mb-8">
                            <h1 className="w-4/5">Select the patient name: </h1>
                            <DropdownField label="Name"/>
                        </div>
                        <div className="w-full flex text-bold text-lg items-center mb-8">
                            <h1 className="w-4/5">Select the year: </h1>
                            <DropdownField label="Year"/>
                        </div>
                        <div className="w-full flex text-bold text-lg items-center mb-8">
                            <h1 className="w-4/5">Select the month: </h1>
                            <DropdownField label="Month"/>
                        </div>
                        <div className="w-full flex text-bold text-lg items-center mb-8">
                            <h1 className="w-4/5">Select the date: </h1>
                            <DropdownField label="Date"/>
                        </div>
                        <div className="mt-16">
                            <Link
                                href={"/checking"}
                                className="capitalize tracking-wider text-white text-bold rounded-full bg-[#FD5858] border-[#FF5454] border-[2px] px-16 py-2 hover:bg-white hover:border-[2px] hover:border-[#FF5454] hover:text-[#fd5858]"
                            >Make your prediction</Link>
                        </div>
                        
                    </form>
                    <div>
                    <Image 
                        className="ml-8"
                        src={"/images/picture1.png"} 
                        alt={"breast"} 
                        width={350} 
                        height={350}
                    />
                    </div>
                </div>
            </div>
        </>
    )
}