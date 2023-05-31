import Image from 'next/image'

interface CheckingCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    alt: string;
}

export const CheckingCard = ({title, description, image, link, alt}: CheckingCardProps) => {

    function truncateString(str: string, num: number) {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }

    return(
            <div className="w-[460px] shadow-lg m-4">
                <div
                    className="flex w-full justify-between items-center p-4 bg-white"
                >
                    <Image 
                        src={image} 
                        alt={alt} 
                        width={100}     
                        height={100}
                    />
                    <h1 className="text-2xl ml-4">{title}</h1>
                </div>
                <div className="bg-gradient-to-b from-[#FFBEBE] to-white p-4 text-center">
                    <p className="text-[#343434] text-lg max-h-54">
                        {truncateString(`${description}`,  225)}
                    </p>
                </div>
            </div>

    )
}