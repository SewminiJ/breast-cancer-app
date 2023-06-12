import Image from "next/image"
import Link from "next/link"

export const AboutModule = () => {
    const awarnessData = [
        {
            "text": "Educate yourself: Learn about breast cancer, its risk factors, and symptoms. Understand the importance of early detection and the available screening methods."
        },
        {
            "text": "Perform self-examinations: Regularly perform breast self-examinations to become familiar with how your breasts normally look and feel. Report any changes, such as lumps, nipple discharge, or skin abnormalities, to your healthcare provider."
        },
        {
            "text": "Clinical breast examination (CBE): Schedule regular clinical breast examinations with your healthcare provider. They will examine your breasts and surrounding areas for any abnormalities."
        },
        {
            "text": "Mammograms: Consult with your doctor about when to start mammograms, which are X-ray images of the breasts used to screen for breast cancer in asymptomatic individuals. Guidelines may vary depending on your age and risk factors."
        },
        {
            "text": "Understand risk factors: Learn about the risk factors associated with breast cancer, such as age, family history, genetic mutations (e.g., BRCA1 and BRCA2), hormonal factors, obesity, alcohol consumption, and certain medications. Assess your own risk profile and discuss it with your healthcare provider."
        },
        {
            "text": "Lead a healthy lifestyle: Engage in regular physical activity, maintain a healthy weight, and consume a balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Limit alcohol intake and avoid smoking."
        },
        {
            "text": "Stay vigilant: Be proactive about your breast health. If you notice any changes or have concerns, consult your healthcare provider promptly. Trust your instincts and advocate for further evaluation if necessary."
        },
        {
            "text": "Support breast cancer organizations: Consider participating in or supporting breast cancer awareness campaigns and events organized by reputable organizations. They often provide valuable resources, information, and support for those affected by breast cancer."
        }
    ]
    
    return (
        <>
            <div
                className="bg-[#FE006B] h-60 w-60 fixed top-48 left-60 rounded-full blur-[250px] -z-10"
            />
            <Image
                className="fixed bottom-0 right-0 -z-10"
                src={"/images/bottom-right.png"}
                alt={"heart"}
                width={300}
                height={300}
            />
            <div
                className="width-full max-w-[1600px]  m-auto p-4 flex items-center justify-between"
            >
                <div
                    className="items-center flex-col justify-center hidden lg:flex"
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
                <div>
                    <h1 className="text-xl lg:text-3xl uppercase text-bold tracking-wider text-[#FF8C8C] mb-8 mt-16">how to aware from <br />
                        <span className="text-6xl lg:text-8xl ml-14 mr-10 mt-8 drop-shadow-md shadow-black">breast</span>
                        <span>cancer?</span>
                    </h1>
                    <div className="mb-4 lg:mb-16">
                        {
                            awarnessData.map((item, index) => (
                                <p className="mb-4 text-md lg:text-xl text-[#343434] text-semibold" key={index}>{index + 1}{" . "}{item.text}</p>
                            ))
                        }
                    </div>
                    <Link
                        href={"/checking"}
                        className="lg:ml-14 text-[#FD5858] text-bold rounded-full bg-white border-[#FF5454] border-[2px] mt-8 px-16 py-2 hover:bg-slate-50 hover:border-[2px] hover:border-[#FF5454]"
                    >Learn More</Link>
                </div>
            </div>
        </>
    )
}