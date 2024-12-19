// 'use client'

// import { createContext, useContext, useState } from 'react'


// const GlobalContext = createContext()

// export const GlobalContextProvider = ({ children }) => {

//     const [envUrl, setEnvUrl] = useState();
//     const [AllProductData, setAllProductData] = useState([]);
//     const [ActiveProduct, setActiveProduct] = useState({
//         name: "",
//         phone: "",
//         email: "",
//         pincode: "",
//         city: "",
//         state: "",
//         address: "",
//         online:true
//     });
//     const [chng, setchng] = useState({
//         name: "",
//         phone: "",
//         email: "",
//         pincode: "",
//         city: "",
//         state: "",
//         address: "",
//     });


//     //this is function for call

//     const FetchAllProductData = async (APP_API_URL, get_next_key, get_next_url) => {

//         const url = process.env.NEXT_APP_API_URL + 'product/fetch_with_api_key?api_key=' + get_next_key

//         const res = await fetch(url, {
//             headers: {
//                 web_site_url: get_next_url
//             }
//         })

//         if (!res.ok) {
//             throw new Error("Interal Server Error Please Try out After some Time")
//         }


//         const fetchedData = await res.json();
//         return setAllProductData(fetchedData.product)
//     }






//     return (
//         <GlobalContext.Provider value={{
//             envUrl,
//             setEnvUrl,
//             chng,
//             setchng,
//             ActiveProduct,
//             setActiveProduct,
//             FetchAllProductData,
//             AllProductData,
//             setAllProductData
//         }}>
//             {children}
//         </GlobalContext.Provider>
//     )

// }

// export const useGlobalContext = () => useContext(GlobalContext)



'use client'

import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react'




const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [envUrl, setEnvUrl] = useState();
    const [AllProductData, setAllProductData] = useState([]);
    const [ActiveProduct, setActiveProduct] = useState({
        name: "",
        phone: "",
        email: "",
        pincode: "",
        city: "",
        state: "",
        address: "",
        online: true
    });

    const [chng, setchng] = useState({
        name: "",
        phone: "",
        email: "",
        pincode: "",
        city: "",
        state: "",
        address: ""
    });



    const [CustomerData, setCustomerData] = useState({
        name: "",
        phone: '',
        address: ''
    })

    const [callDetail, setCallDetail] = useState({
        callStatus: false,
        phoneNumber: 9099611212
    })

    const [loading, setLoading] = useState(false)

    const [checkoutDetail, setCheckoutDetail] = useState({ checkoutChecked: false, checkoutUrl: '/checkouts' })

    const FetchWebCheckout = async (get_next_key, get_next_url) => {
        try {
            const result = await axios.get(`${process.env.NEXT_APP_API_URL}website/fetch_with_api_key?api_key=${get_next_key}`, { headers: { "web_site_url": get_next_url } })



            if (result.status === 200) {
                setCheckoutDetail({ ...checkoutDetail, checkoutChecked: result.data.website[0].checkout_toggle ? true : false })
                return
            }
            return
        } catch (err) {
            return
        }
    }

    useMemo(() => {
        return setCheckoutDetail({ ...checkoutDetail, checkoutUrl: checkoutDetail.checkoutChecked ? 'https://www.arayurveda.com/products/horse-fire-tablets' : "/checkout" })
    }, [checkoutDetail.checkoutChecked, checkoutDetail.checkoutUrl])


    const [sc, setSc] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setSc(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    //this is function for call

    const FetchAllProductData = async (APP_API_URL, get_next_key, get_next_url) => {

        const url = process.env.NEXT_APP_API_URL + 'product/fetch_with_api_key?api_key=' + get_next_key
        const res = await fetch(url, {
            headers: {
                web_site_url: get_next_url
            }
        })
        if (!res.ok) {
            throw new Error("Interal Server Error Please Try out After some Time")
        }
        const fetchedData = await res.json();
        return setAllProductData(fetchedData.product.reverse())
    }

    const GetCallSetting = async (get_next_key) => {


        try {
            const Result = await fetch(`https://api.brahmikalp.com/api/call-setting/api_key?api_key=${get_next_key}`,
                { method: "GET", redirect: "follow", })
                .then((response) => response.json())
                .then((result) => result)
                .catch((error) => error);



            if (Result.massage = "success") {


                setCallDetail({ callStatus: Result.all_call[0].call_status ? true : false, phoneNumber: Result.all_call[0].phonenumber })
                return
            }
            return
        } catch (err) {
            return
        }
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };


    const [seconds, setSeconds] = useState(3600); // 1 hour in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount

    }, []); // Empty dependency array means this effect will run once after the initial render

    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const remainingSeconds = seconds % 60;


    return (
        <GlobalContext.Provider value={{
            envUrl,
            setEnvUrl,
            chng,
            setchng,
            ActiveProduct,
            setActiveProduct,
            FetchAllProductData,
            AllProductData,
            setAllProductData,
            CustomerData,
            setCustomerData,
            GetCallSetting,
            checkoutDetail,
            setCheckoutDetail,
            FetchWebCheckout,
            callDetail,
            setCallDetail,
            loading,
            setLoading,
            sc,
            hours,
            minutes,
            remainingSeconds,
            isPopupOpen,
            openPopup,
            closePopup
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => useContext(GlobalContext);