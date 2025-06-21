import FormInputMasked from "@/components/Form/FormInputMasked"
import { usePincodeStore } from "@/utils/store";
import { useState } from "react";

const Pincode = ({ formData, errors, handleChange, setErrors }) => {

    const [pincode, setPincode] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const getPincode = usePincodeStore((state: any) => state.getPincode)


    // check pincode 
    const checkPincode = (pincode) => {
        if (pincode.length === 6) {
            getPincode({ pincode }, {
                success: (data) => {
                    handleChange({ target: { name: 'district', value: data.district_name } });
                    handleChange({ target: { name: 'state', value: data.state_name } });
                    handleChange({ target: { name: 'isPincodeVerified', value: true } });
                    setState(data.state_name);
                    setDistrict(data.district_name);
                    errors.pincode = ""
                    setErrors({
                        ...errors
                    });
                },
                error: () => {
                    errors.pincode = 'Enter Valid Pincode';
                    setErrors({
                        ...errors
                    });
                }
            })
        } else {
            errors.pincode = 'Enter Valid Pincode Number';
            setErrors({
                ...errors
            })

        }
    }

    const onChangePincode = (e: any) => {
        const text = e.target.value;
        console.log(text);
        setPincode(text);
        setDistrict('');
        setState('')
        handleChange({ target: { name: 'pincode', value: text } });
        if (text.length === 6) {
            checkPincode(text);
        }
    }
    return <> <FormInputMasked
        id={'Pincode'}
        name={'pincode'}
        title="Pincode"
        placeholder={"Pincode"}
        mask={[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
        value={formData.pincode}
        error={errors.pincode}
        maxLength={6}
        helpertext={"Please enter your pincode"}
        onChange={onChangePincode}
        bottom={state && <div className="mt-3 font-semibold border-solid p-2 border border-primary-200 bg-primary-100 rounded-lg">
            {district}, {state}
        </div>}
    />

    </>
}

export default Pincode;