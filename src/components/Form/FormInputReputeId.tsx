import React from "react"
import FormError from "./FormError";
import FormHelperText from "./FormHelpText";
import MaskedInput from 'react-text-mask'
import InputWrapper from "./InputWrapper";

const FormInputReputeId = (props: any, ref: any) => {
    const { className, isDisabled, } = props
    return (
        <InputWrapper {...props}>
            <MaskedInput
                mask={[/\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/]}
                {...props}
                ref={ref}
                guide={false}
                className={`input input-bordered  w-full ${className}`} disabled={isDisabled} />
        </InputWrapper>
    )
}

export default React.memo(React.forwardRef(FormInputReputeId));