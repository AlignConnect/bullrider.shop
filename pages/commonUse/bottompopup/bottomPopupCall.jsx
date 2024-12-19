
import { Oswald } from 'next/font/google';

const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-oswald',
    weight: ['200', '300', '400', '500', '600', '700']
});

const bottomPopupCall = ({callDetail}) => {

    return (
        <div className='w-full'>
            <div className={`text-black ${oswald.className} bg-[#1b1b1b]`} >
                <a href={`tel:+91${callDetail.phoneNumber}`} className="relative inline-block" id='hfkCall' >
                    <img src="/common_images/call-gif.webp" alt="pic" loading='lazy' className='min-w-[360px] max-w-full' />
                    <div className="absolute top-0 left-36 text-[2.5rem] md:text-[2.6rem] font-bold">{callDetail.phoneNumber}</div>
                    <img src="/common_images/callicon.webp" alt="pic" className='callicon faa-ring animated' loading='lazy' />
                </a>
            </div>
        </div>
    )
}
export default bottomPopupCall;