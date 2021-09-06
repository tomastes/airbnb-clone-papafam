import { HeartIcon, StarIcon } from "@heroicons/react/outline"
import Image from "next/image"

const InfoCard = ({img,title,desc,total,star,price,location}) => {
    return (
        <div className="flex py-7 mt-7 dark:bg-gray-900 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition transform duration-300 ease-out first:border-t">
            <div className="relative h-34 w-40 md:h-43 md:w-80 flex-shrink-0">
                <Image className="rounded-2xl" src={img} objectFit="cover"  layout="fill"/>
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex text-gray-600 justify-between">
                    <p className="">{location}</p>
                    <HeartIcon className="cursor-pointer h-7" />
                </div>
                <h4 className="text-xl dark:text-white">{title}</h4>
                <div className='border-b w-10 pt-2'></div>
                <p className="pt-2 dark:text-gray-400 text-sm text-gray-500 flex-grow">{desc}</p>
                <div className="flex justify-between items-end pt-5">
                    <p className='flex dark:text-gray-300 items-center'> <StarIcon className='h-5 text-red-400' />{star}</p>
                    <div>
                        <p className="text-lg dark:text-gray-300 font-semibold lg:text-2xl pb-2">{price}</p>
                        <p className="text-right dark:text-gray-300 font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
