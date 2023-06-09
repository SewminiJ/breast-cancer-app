import axios from "axios";
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react";

export const Index = () => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;
        window.open(url, "_blank");
      };
      
    return(
        <>
            <div 
                className="bg-[#FE006B] h-60 w-60 fixed top-48 left-60 rounded-full blur-[250px] -z-10"
            />
            <div 
                className="bg-[#FE006B] h-60 w-60 fixed top-48 right-60 rounded-full blur-[250px] -z-10"
            />
            <div
                className="width-full max-w-[1200px] md:h-screen m-auto p-4 flex items-center justify-between flex-col md:flex-row"
            >
                <div className="mt-16 md:mt-0">
                    <div
                        className="hidden rounded-full border-[1px] border-[#B4B4B4] bg-white/0.25 md:flex items-center md:justify-between p-4 w-60 mb-8 bg-white/40"
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
                            className="text-[#1678F2] text-bold text-4xl md:text-6xl mb-4"
                        >One Step Solution</h1>
                        <h1
                            className="text-3xl md:text-6xl text-bold"
                        >For your breast <br className="hidden md:block" />be aware.</h1>
                    </div>
                    <div className="mb-8">
                        <p
                            className="text-[#818181] text-sm md:text-lg"
                        >
                            Using your Biopsy data we Predict the Probability of <br />getting caught with a Breast Cancer.
                        </p>
                    </div>
                    <div>
                        <div 
                            className="rounded-full flex bg-white items-center justify-between p-1 px-3 md:px-3"    
                        >
                            <input 
                                type="text" 
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="text-[#4F4E4E] text-opacity-80 text-sm md:text-md cursor-pointer" placeholder="Search Here..." />
                            <button type="submit" onClick={handleSearch}>
                                <Image 
                                    src={"/images/search.png"} 
                                    alt={"woman-checking-breast"} 
                                    width={40} 
                                    height={40}
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image 
                    className="mt-4 md:mt-0 w-full md:w-3/4"
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