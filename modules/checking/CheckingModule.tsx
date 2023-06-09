import Image from "next/image"
import { CheckingCard } from "./CheckingCard";

export const CheckingModule = () => {

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
                className="width-full max-w-[1200px] h-auto m-auto p-4 flex flex-col justify-center"    
            >
                <h1
                    className="text-[#1678F2] text-5xl text-bold mb-4 mt-16"
                >Breast Cancer <span className="text-black text-6xl">Checking</span></h1>

                <div className="w-full flex items-center justify-evenly flex-wrap">
                    <CheckingCard title={"Self Breast Checking"} description={"Self breast checking is a way for women to check their breasts for any changes that could be a sign of breast cancer. It is important to do a self breast check every month, at the same time of the month, so that you can become familiar with the normal feel of your breasts. If you notice any changes, such as a lump, a change in size or shape, or dimpling of the skin, see your doctor right away"} alt="breast" image={"/images/breast.png"} link={"#"} />
                    <CheckingCard title={"Clicical Breast Checking"} description={"A clinical breast exam is a physical examination of your breasts that is performed by a health care provider. It is often done during your yearly medical check-up. The provider will visually inspect your breasts for any changes in size, shape, or color. They will also feel your breasts for any lumps or other abnormalities"} alt="self-breast-checking" image={"/images/stethoscope.png"} link={"#"} />
                    <CheckingCard title={"Mammogram"} description={"A mammogram is an X-ray of the breast. It is used to detect breast cancer early, when it is most treatable. Mammograms are recommended for women starting at age 45, but may be started earlier for women at higher risk for breast cancer. The mammogram procedure is painless, but it can be uncomfortable for some women. There is a small amount of radiation exposure associated with mammograms, but the benefits of early detection of breast cancer outweigh the risks"} alt="mammogram" image={"/images/research.png"} link={"#"} />
                    <CheckingCard title={"Biospy"} description={"A biopsy is a medical procedure in which a doctor removes a small sample of tissue from the body for examination under a microscope. Biopsies are used to diagnose a variety of conditions, including cancer, infections, and autoimmune diseases"} alt="biospy" image={"/images/biopsy.png"} link={"#"} />
                    <CheckingCard title={"Treatments"} description={"There are many different treatments for breast cancer, and the best treatment for you will depend on the type of breast cancer you have, how far it has spread, and your overall health. Some common treatments for breast cancer include surgery, chemotherapy, radiation therapy, hormone therapy, and targeted therapy"} alt="treatments" image={"/images/radiation.png"} link={"#"} />
                </div>
            </div>
        </>
    )
}