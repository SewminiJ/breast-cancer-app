import Image from "next/image"

export const CheckingModule = () => {
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
                className="width-full max-w-[1600px] h-screen m-auto p-4 flex flex-col justify-center z-20"    
            >
                <h1
                    className="text-[#1678F2] text-5xl text-bold mb-4 mt-16"
                >Breast Cancer <span className="text-black text-6xl">Checking</span></h1>

                <div className="z-20 w-full flex items-center justify-around flex-wrap">
                    <div className="w-[380px] shadow-lg m-16">
                        <div
                            className="flex w-full justify-between items-center p-4 bg-white"
                        >
                            <Image 
                                src={"/images/breast.png"} 
                                alt={"breast"} 
                                width={100}     
                                height={100}
                            />
                            <h1 className="text-2xl ml-4">Self Breast Checking</h1>
                        </div>
                        <div className="bg-gradient-to-b from-[#FFBEBE] to-white p-4 text-center">
                            <p className="text-[#343434] text-lg max-h-54">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed 
                                do eiusmod tempor incididunt
                            </p>
                        </div>
                    </div>
                    <div className="w-[380px] shadow-lg rounded-3xl m-16">
                        <div
                            className="flex w-full justify-between items-center p-4 bg-white"
                        >
                            <Image 
                                src={"/images/stethoscope.png"} 
                                alt={"breast"} 
                                width={100} 
                                height={100}
                            />
                            <h1 className="text-2xl ml-12">Clincal Breast Checking</h1>
                        </div>
                        <div className="bg-gradient-to-b from-[#FFBEBE] to-white p-4 text-center">
                            <p className="text-[#343434] text-lg max-h-54">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed 
                                do eiusmod tempor incididunt
                            </p>
                        </div>
                    </div>
                    <div className="w-[380px] shadow-lg rounded-3xl m-16">
                        <div
                            className="flex w-full justify-between items-center p-4 bg-white"
                        >
                            <Image 
                                src={"/images/research.png"} 
                                alt={"breast"} 
                                width={100} 
                                height={100}
                            />
                            <h1 className="text-2xl mr-10">Mammogram</h1>
                        </div>
                        <div className="bg-gradient-to-b from-[#FFBEBE] to-white p-4 text-center">
                            <p className="text-[#343434] text-lg max-h-54">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed 
                                do eiusmod tempor incididunt
                            </p>
                        </div>
                    </div>
                    <div className="w-[380px] shadow-lg rounded-3xl m-16">
                        <div
                            className="flex w-full justify-between items-center p-4 bg-white"
                        >
                            <Image 
                                src={"/images/biopsy.png"} 
                                alt={"breast"} 
                                width={100} 
                                height={100}
                            />
                            <h1 className="text-2xl mr-20">Biopsy</h1>
                        </div>
                        <div className="bg-gradient-to-b from-[#FFBEBE] to-white p-4 text-center">
                            <p className="text-[#343434] text-lg max-h-54">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed 
                                do eiusmod tempor incididunt
                            </p>
                        </div>
                    </div>
                    <div className="w-[380px] shadow-lg rounded-3xl m-16">
                        <div
                            className="flex w-full justify-between items-center p-4 bg-white"
                        >
                            <Image 
                                src={"/images/radiation.png"} 
                                alt={"breast"} 
                                width={100} 
                                height={100}
                            />
                            <h1 className="text-2xl mr-14">Treatments</h1>
                        </div>
                        <div className="bg-gradient-to-b from-[#FFBEBE] to-white p-4 text-center">
                            <p className="text-[#343434] text-lg max-h-54">
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed 
                                do eiusmod tempor incididunt
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}