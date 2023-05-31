import Image from "next/image"

export const Index = () => {
    return(
        <>
            <div 
                className="bg-[#FE006B] h-60 w-60 absolute top-48 left-60 rounded-full blur-[250px] z-10"
            />
            <div 
                className="bg-[#FE006B] h-60 w-60 absolute top-48 right-60 rounded-full blur-[250px] z-10"
            />
            <div
                className="width-full max-w-[1200px] h-screen m-auto p-4 flex items-center justify-between"
            >
                <div className="z-20">
                    <div
                        className="rounded-full border-[1px] border-[#B4B4B4] bg-white/0.25 flex items-center justify-between p-4 w-60 mb-8 bg-white/40"
                    >
                        <h1
                            className="text-[#2D2D2D] text-lg text-bold"
                        >Check Your Pair</h1>
                        <Image 
                        src={"/images/heart.png"} 
                        alt={"heart"} 
                        width={40} 
                        height={40}
                    />
                    </div>
                    <div
                        className="mb-8"
                    >
                        <h1
                            className="text-[#1678F2] text-bold text-6xl mb-4"
                        >One Step Solution</h1>
                        <h1
                            className="text-6xl text-bold"
                        >For your breast <br />be aware.</h1>
                    </div>
                    <div className="mb-8">
                        <p
                            className="text-[#818181] text-lg"
                        >
                            Using your Biopsy data we Predict the Probability of <br />getting caught with a Breast Cancer.
                        </p>
                    </div>
                    <div>
                        <div
                            className="rounded-full flex bg-white items-center justify-between p-3"    
                        >
                            <p className="text-[#4F4E4E] text-opacity-80 text-md">Search Here...</p>
                            <Image 
                                src={"/images/search.png"} 
                                alt={"woman-checking-breast"} 
                                width={40} 
                                height={40}
                            />
                        </div>
                    </div>
                </div>
                <div className="z-20">
                    <Image 
                        src={"/images/woman1.png"} 
                        alt={"woman-checking-breast"} 
                        width={300} 
                        height={400}
                    />
                </div>
            </div>
        </>
    )
}