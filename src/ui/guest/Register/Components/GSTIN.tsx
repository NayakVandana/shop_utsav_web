import FormInputGST from "@/components/Form/FormInputGST";
import { validGSTIN } from "@/components/Form/FormValidation";
import { useCheckIsRegistered } from "@/utils/store";
import { useEffect } from "react";

const GSTIN = ({ formData, errors, handleChange, setErrors }) => {

    const checkGstIsRegistered = useCheckIsRegistered((state: any) => state.checkGstIsRegistered)


    const checkGstRegistered = (gst) => {
        if (validGSTIN(gst)) {
            checkGstIsRegistered({ gst }, {
                success: () => { },
                error: () => { }
            })
        } else {
            errors.gst = 'Enter Valid GSTIN Number';
            setErrors({
                ...errors
            })

        }

    }

    useEffect(() => {
        if (formData.gst && formData.gst.length === 15) {
            checkGstRegistered(formData.gst)
        }
    }, [formData.gst])

    return <FormInputGST
        id={'gst'}
        name={'gst'}
        title="GSTIN"
        placeholder={"Enter GSTIN Number"}
        type="text"
        value={formData.gst}
        error={errors.gst}
        maxLength={15}
        helpertext={"Kindly provide the GSTIN number of your business or company as it appears on GST documents."}
        onChange={handleChange}
    />
}

export default GSTIN