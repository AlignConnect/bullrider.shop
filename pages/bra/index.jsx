"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});

const Content = dynamic(() => import('./components/second_content'), {
    loading: () => <p>content is loading </p>
});


const Bra_footer = dynamic(() => import('./components/bra_footer'), {
    loading: () => <p>footer loading </p>
});

const Form = dynamic(() => import('./components/Formdata'), {
    loading: () => <p>form is loading </p>
});


// const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
//     loading: () => <p>form is loading </p>
// });


const FooterP = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/bra")

    }, [])


    return (
        <section className=" w-full md:max-w-4xl mx-auto main_shaddow">

            <div className="">

                <Header />

                <Content />

                <Form />


                {/* <CustomerReview /> */}

                <Bra_footer />



                <FooterP />

            </div>
        </section>
    )
}

export default page