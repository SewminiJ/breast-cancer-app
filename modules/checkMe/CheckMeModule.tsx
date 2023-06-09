import { DropdownField } from "../../components/DropdownField"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form";

export const CheckMeModule = () => {
    const { control } = useForm();
    return (
        <>
            <h1>hello</h1>
            <div 
                className="bg-[#FE006B] h-60 w-60 fixed top-48 left-60 rounded-full blur-[250px] -z-10"
            />
            <div 
                className="bg-[#FE006B] h-60 w-60 fixed bottom-48 right-60 rounded-full blur-[250px] -z-10"
            />
            <div
                className="width-full max-w-[1200px] md:h-screen m-auto p-4 flex flex-col justify-between md:pt-[100px] mt-10 md:mt-0"  
            >
                <h1
                    className="text-[#1678F2] text-3xl md:text-5xl text-bold mb-6"
                >Let's Make <span className="text-black text-4xl md:text-6xl">Your Prediction</span></h1>

                <div className="w-full flex items-center flex-col-reverse md:flex-row ">
                    <form className="w-full md:w-7/12 mt-4 md:pt-0">
                        <div className="w-full flex text-bold text-lg items-center mb-8">
                            <h1 className="w-4/5">Select the patient name: </h1>
                            <DropdownField label="Name" control={control} name="first" options={[]}/>
                        </div>
                        <div className="w-full flex text-bold text-lg items-center mb-8">
                            <h1 className="w-4/5">Select the year: </h1>
                            <DropdownField label="Year" control={control} name="first" options={[]}/>
                        </div>
                        <div className="w-full flex text-bold text-lg items-center mb-8">
                            <h1 className="w-4/5">Select the month: </h1>
                            <DropdownField label="Month" control={control} name="first" options={[]}/>
                        </div>
                        <div className="w-full flex text-bold text-lg items-center mb-8">
                            <h1 className="w-4/5">Select the date: </h1>
                            <DropdownField label="Date" control={control} name="first" options={[]}/>
                        </div>
                        <div className="mt-16 flex justify-end md:justify-normal">
                            <Link
                                href={"/result"}
                                className="capitalize tracking-wider text-white text-bold rounded-full bg-[#FD5858] border-[#FF5454] border-[2px] px-16 py-2 hover:bg-white hover:border-[2px] hover:border-[#FF5454] hover:text-[#fd5858] text-sm md:text-lg"
                            >Make your prediction</Link>
                        </div>
                        
                    </form>
                    <div>
                    <Image 
                        className="md:ml-8 w-44 md:w-full"
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