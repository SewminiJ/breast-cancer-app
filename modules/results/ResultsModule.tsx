import { FormButton } from "@/components/FormButton"
import Image from "next/image"

export const ResultsModule = () => {
    const prediction = 87.74
    const date = 10
    const month = "September"
    const year = 2027
    return(
        <>
            <div 
                className="bg-[#FE006B] h-60 w-60 absolute top-48 left-60 rounded-full blur-[250px] z-10"
            />
            <div 
                className="bg-[#FE006B] h-60 w-60 absolute bottom-48 right-60 rounded-full blur-[250px] z-10"
            />

            <Image 
                className="absolute bottom-0 left-0 z-10"
                src={"/images/bottom-left.png"} 
                alt={"heart"} 
                width={300} 
                height={300}
            />
            <Image 
                className="absolute bottom-0 right-0 z-10"
                src={"/images/bottom-right.png"} 
                alt={"heart"} 
                width={300} 
                height={300}
            />

            <div
                className="width-full max-w-[1600px] h-screen m-auto p-4 flex flex-col justify-center z-20 items-center"
            >
                <Image 
                    src={"/images/unhappy.png"}
                    alt={"unhappy"}
                    width={300}
                    height={300}
                />
                <div className="text-center">
                    <h1
                        className="text-[#343434] text-2xl text-bold mb-2 mt-16"
                    >There will be :</h1>
                    <h1
                        className="text-[#ff8c8c] text-[150px] text-bold"
                    >{prediction}%</h1>
                    <h1
                        className="text-[#343434] text-2xl text-bold mb-2 flex justify-center"
                    >Chance of having breast cancer on &nbsp;<p>{date}<sup>th</sup> of </p> &nbsp; <p> {month}, </p> <p>{year}</p></h1>
                </div>

                <div>
                    <FormButton variant="contained" buttonType="Print Result"/>
                </div>
            </div>
        </>
        
    )
}