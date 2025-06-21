import FormInputMasked from "@/components/Form/FormInputMasked"
import { validPhone } from "@/components/Form/FormValidation";
import { useCheckIsRegistered } from "@/utils/store";
import { useEffect } from "react";

const Mobile = ({ formData, errors, handleChange, setErrors }) => {
    const checkMobileIsRegistered: any = useCheckIsRegistered((state: any) => state.checkMobileIsRegistered);
    const mobileIsRegistered: any = useCheckIsRegistered((state: any) => state.mobileIsRegistered);

    const checkPhoneRegistered = (mobile) => {
        if (validPhone(mobile)) {
            checkMobileIsRegistered({ mobile }, {
                success: () => {
                    if (mobileIsRegistered.is_registered === true) {
                        errors.mobile = 'This mobile number is already registered'
                        setErrors({
                            ...errors
                        })
                    }
                },
                error: () => { }
            })
        } else {
            errors.mobile = 'Enter Valid mobile Number';
            setErrors({
                ...errors
            })
        }
    }

    useEffect(() => {
        if (formData.mobile && formData.mobile.length === 10) {
            checkPhoneRegistered(formData.mobile)
        }
    }, [formData.mobile])

    return <FormInputMasked
        title="Mobile Number"
        type="text"
        placeholder="Mobile Number"
        name="mobile"
        value={formData.mobile}
        error={errors?.mobile}
        mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
        onChange={handleChange}
    />
}

export default Mobile