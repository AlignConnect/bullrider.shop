"use client"
import { Poppins } from 'next/font/google';
import { useGlobalContext } from "@/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "../../forcheckout/component/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import dynamic from 'next/dynamic';

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const FormLoader = dynamic(() => import('../commonUse/loader/FormLoader'), {
    loading: () => <p>loader</p>
});


const Formdata = () => {
    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, loading } = useGlobalContext();

    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(false);

        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error))
            const formdata = new FormData();

            formdata.append("name", getCustomData.name);
            formdata.append("phone", getCustomData.phone);
            formdata.append("address", getCustomData.address);
            formdata.append("post", "bullrider.shop");
            formdata.append("ip", check ? check : "");
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked);

            formdata.append("blog_url", process.env.NEXT_APP_URL ?? "bullrider.shop");

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            try {
                setLoading(true)
                const form = await fetch(`https://bullrider.shop/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json()
                // console.log('data: ', data);

                const blogWebId = data.blogWebId ?? null
                if (data.ok) {
                    setLoading(false);
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    return window.location.href = `/thankyou?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false);
                return window.location.href = `/thankyou?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false);
                return window.location.href = "/thankyou";
            }
        } catch (error) {
            setLoading(false);
            return alert(error);
        }

    }

    return (<div className="bg-[#2a2a2a]  p-2" id="buynow">

        {
            loading && <FormLoader />
        }


        <h1 className="text-2xl sm:text-3xl text-center  text-white font-extrabold px-2 py-2 md:pt-5">
            {/* <div className="fontNoto max-w-xl mx-auto">
                कॉल पर विशेषज्ञ से मुफ्त सलाह के लिए फॉर्म भरें!
            </div> */}
        </h1>

        <div className={`pb-4 text-black ${poppin.className}`} id='formcallhide'>
            <div className="form_shaddow max-w-2xl md:mx-auto p-3 md:p-6 bg-[#2a2a2a] border border-solid border-white rounded-xl my-7">
                <div className="py-4 ">
                    <div className="text-center">
                        <h1 className=" text-4xl text-white font-bold border-b mb-5 inline-block border-white"> Contact Us </h1>
                    </div>
                    <div className='fontPoppins text-center text-white sm:text-xl text-sm'>Inquiry here for more information</div>
                    <form className="space-y-2 py-6">

                        {CustomerDataValue?.map((data, key) => {
                            return <div className="flex flex-col" key={key}>
                                <label className="font-semibold fontNoto text-white text-sm py-1">{data.label}</label>
                                <div className="relative">
                                    <input {...data.inputValue} className={`rounded-xl  fontNoto pt-3 pb-2 px-3 border border-solid border-black w-full focus:outline-none focus:ring-1 focus:ring-gray-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                    {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                </div>
                            </div>
                        })}

                        <div className="flex justify-center items-center pt-4 ">
                            <button onClick={handleFormSubmit} type="button" className="rounded-xl bg-yellow-600 text-xl font-bold p-3 pt-3 md:w-72 w-full  hover:bg-red-500 transition-colors text-white">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Formdata;
