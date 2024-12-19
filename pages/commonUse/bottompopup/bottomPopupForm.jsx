import { useEffect, useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { useRouter, useSearchParams } from 'next/navigation';
import Link from "next/link";


const BottomPopupForm = () => {
    const [seconds, setSeconds] = useState(3600); // 1 hour in seconds


    const router = useRouter();
    const searchParams = useSearchParams();


    const exoclick_tracking = searchParams.get('bullriderorders');
    // console.log('exoclick_tracking: ', exoclick_tracking);


    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount

    }, []); // Empty dependency array means this effect will run once after the initial render

    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');

    return (
        <div className='w-full bg-[#262525] py-1' onClick={() => window.location.href = "#buynow"}>
            <p className='text-center text-[1.2rem] m-0'>डिस्काउंट का अंत: <span className='text-[#e1c231]'>{`${hours}:${minutes}:${remainingSeconds}`}</span></p>
            <div className='flex justify-center items-center gap-2 text-white'>
                <BsArrowRightCircleFill className='arrow-3 commonArrow' />
                <Link href={{ pathname: "/checkouts/", query: { "bullriderorders": exoclick_tracking } }}
                    className='text-center decoration-none border-0 rounded-lg pt-1 block  px-3 font-bold bg-[red]'>
                    पैक 37% छूट के साथ
                </Link>
                <BsArrowLeftCircleFill className='arrow-4 commonArrow' />
            </div>
        </div>
    )
}
export default BottomPopupForm;