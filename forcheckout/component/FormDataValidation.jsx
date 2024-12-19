import Joi from "joi"

export const CustomerDataValue = [
    {
        icon: null,
        label: "नाम लिखिए",
        inputValue: {
            type: "text",
            name: "name",
            placeholder: " नाम लिखिए"
        }
    },
    {
        label: "फोन नंबर लिखिए",
        icon: "+91",
        inputValue: {
            type: "text",
            name: "phone",
            maxLength: 10,
            minLength: 10,
            placeholder: "फोन नंबर लिखिए"
        }
    },
    // {
    //     label: "Address",
    //     icon: "+91",
    //     inputValue: {
    //         type: "text",
    //         name: "address",
    //     }
    // },
]

export class CustomerDataValidator {

    constructor() { }

    static JoiValidator = (formdata) => {
        const schema = Joi.object({
            name: Joi.string().trim().required(),
            phone: Joi.string().regex(/^[6-9]\d{9}$/).required().messages({ 'string.regex': 'Please Fill Correct Value' }),
            address: Joi.string().optional().allow('')
        })

        const { error, value } = schema.validate(formdata, {
            allowUnknown: false,
            abortEarly: true,
            stripUnknown: false
        })

        if (error) {
            throw error.message
        }
        return value
    }
}
