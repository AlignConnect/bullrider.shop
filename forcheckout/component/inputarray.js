import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { IoMdBusiness } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const inputDataValue = [

    {
        icon: <IoPerson />,
        label: "Full Name",
        inputValue: {
            type: "text",
            name: "name",
        }
    },
    {
        label: "Phone Number",
        icon: <FaPhone />,
        inputValue: {
            type: "text",
            name: "phone",
            maxLength: 10,
            minLength: 10
        }
    },
    {
        label: "Email",
        icon: <MdEmail />,
        inputValue: {
            name: "email",
            type: "email",
        }
    },
    {
        label: "Pincode",
        icon: <FaLocationDot />,
        inputValue: {
            type: "text",
            name: "pincode",
            maxLength: 6,
            minLength: 6
        }
    },
    {
        label: "City",
        icon: <FaCity />,
        inputValue: {
            type: "text",
            name: "city",
            value: "",
            // readOnly: true
        }
    },
    {
        label: "State",
        icon: <IoMdBusiness />,
        inputValue: {
            type: "text",
            name: "state",
            // readOnly: true
        }
    },
    {
        label: "Address",
        icon: "",
        inputValue: {
            type: "textarea",
            name: "address",
        }
    },



]

export default inputDataValue