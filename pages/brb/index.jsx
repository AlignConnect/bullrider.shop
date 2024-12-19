"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>Header loading</p>
});


const Second_content = dynamic(() => import('./components/second_content'), {
    loading: () => <p>content is loading</p>
});


const Form = dynamic(() => import('./components/Formdata'), {
    loading: () => <p>content is loading</p>
});


const Bra_footer = dynamic(() => import('./components/bra_footer'), {
    loading: () => <p>footer loading </p>
});


const FooterP = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


const page = () => {

    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/brb")

    }, [])



    return (
        <section className='w-full md:max-w-2xl mx-auto main_shaddow'>

            <Header />

            <Second_content />

            <Form />

            <Bra_footer />

            <FooterP />

        </section>
    )
}

export default page