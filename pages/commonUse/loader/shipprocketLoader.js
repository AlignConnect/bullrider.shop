import { ImSpinner3 } from "react-icons/im";

const ShipProcketLoader = () => {
    return (

        <section className='z-10 h-[100vh] w-[100vw] flex items-center justify-center fixed top-0 left-0 bg-black bg-opacity-75'>

            <div className="text-center bg-white p-3 rounded-xl">


                <div className="py-4 w-full animation-rotate-data"><ImSpinner3 className="text-5xl mx-auto text-red-600" /></div>


               
            </div>

        </section>

    )
}

export default ShipProcketLoader;