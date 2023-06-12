import { FormButton } from "@/components/FormButton"
import { Button } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/router"

export const ResultsModule = () => {

    const router = useRouter();
    const { prediction } = router.query;
    const date = 10
    const month = "September"
    const year = 2027
    return(
        <>
            <div 
                className="bg-[#FE006B] h-60 w-60 fixed top-48 left-60 rounded-full blur-[250px] -z-10"
            />
            <div 
                className="bg-[#FE006B] h-60 w-60 fixed bottom-48 right-60 rounded-full blur-[250px] -z-10"
            />

            <Image 
                className="fixed bottom-0 left-0 -z-10"
                src={"/images/bottom-left.png"} 
                alt={"heart"} 
                width={300} 
                height={300}
            />
            <Image 
                className="fixed bottom-0 right-0 -z-10"
                src={"/images/bottom-right.png"} 
                alt={"heart"} 
                width={300} 
                height={300}
            />

            <div
                className="width-full m-auto p-4 flex flex-col justify-center items-center"
            >
                <Image 
                    className="w-44 md:w-96"
                    src={"/images/unhappy.png"}
                    alt={"unhappy"}
                    width={300}
                    height={300}
                />
                <div className="text-center">
                <div>
                    <h1>Results</h1>
                    <p>Predicted Value: {prediction}</p>
                    </div>
                    <h1
                        className="text-[#343434] text-2xl text-bold mb-2 mt-16"
                    >There will be :</h1>
                    <h1
                        className="text-[#ff8c8c] text-8xl md:text-[150px] text-bold"
                    >prediction value%</h1>
                    <h1
                        className="text-[#343434] text-md md:text-2xl text-bold mb-2 flex justify-center"
                    >Chance of having breast cancer on &nbsp;<p>{date}<sup>th</sup> of </p> &nbsp; <p> {month}, </p> <p>{year}</p></h1>
                </div>

                <Button
                    className="w-full md:w-44 h-10 bg-gradient-to-r from-[#3A8EF6] to-[#6F3AFA] rounded-md p-3 font-normal flex items-center justify-center text-md">
                    <p className="text-white w-full md:w-44 capitalize">Print Results</p>
                </Button>
            </div>
        </>
        
    )
}