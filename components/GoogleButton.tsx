import Image from "next/image"

export const GoogleButton = () => {
    return(
        <div
            className="bg-white p-2 w-20 flex items-center justify-center rounded-md border-[#BFC1BF] border-2 cursor-pointer"
        >
            <Image 
                src={"/images/google.png"} 
                alt={"google-button"} 
                width={25} 
                height={25}
            />
        </div>
    )
}