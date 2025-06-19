import React from "react"
import MaskedInput from 'react-text-mask'
import InputWrapper from "./InputWrapper";
import FormInput from "./FormInput";

const FormInputITIN = (props: any, ref: any) => {
    const { className, isDisabled, } = props
    return (

            <FormInput
                // mask={[/[A-Za-z]/, /[A-Za-z]/, /[A-Za-z]/, /[p|P|c|C|h|H|f|F|a|A|t|T|b|B|l|L|j|J|g|G|k|K]/, /[A-Za-z]/, /\d/, /\d/, /\d/, /\d/, /[A-Za-z]/]}
                {...props}
                ref={ref}
                guide={false}
                className={`input input-bordered  w-full ${className}`} disabled={isDisabled} />

    )
}

export default React.memo(React.forwardRef(FormInputITIN));