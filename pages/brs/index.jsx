"use client"
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';

const Header = dynamic(() => import("./components/Header"), {
    loading: () => <p>Header is Loading...</p>,
});

const Recommendation = dynamic(() => import("./components/Recommendation"), {
    loading: () => <p>Loading...</p>,
});

const Feel = dynamic(() => import("./components/Feel"), {
    loading: () => <p>Loading...</p>,
});


const Active_Life = dynamic(() => import("./components/Active_Life"), {
    loading: () => <p>Loading...</p>,
});

const Key_benifits = dynamic(() => import("./components/Key_benifits"), {
    loading: () => <p>Loading...</p>,
});

const Use_it = dynamic(() => import("./components/Use_it"), {
    loading: () => <p>Loading...</p>,
});

const Sevan_kare = dynamic(() => import("./components/Sevan_kare"), {
    loading: () => <p>Loading...</p>,
});

const Footer = dynamic(() => import("../commonUse/new_footer/Footer"), {
    loading: () => <p>Loading...</p>,
});




const FooterP = dynamic(() => import('../commonUse/bottompopup/BottomHandler1'), {
    loading: () => <p>loader</p>
});





// for search params

import { useSearchParams, useRouter } from 'next/navigation';





const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH", "bullrider.shop/brs");
      }, []);


    return (
        <section>

            <Header />

            <Recommendation />

            <Feel />

            <Active_Life />

            <Key_benifits />

            <Use_it />

            <Sevan_kare />
            <Footer />

            <FooterP />
        </section>
    )
}

export default page