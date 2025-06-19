import React from "react"
import MaskedInput from 'react-text-mask'
import InputWrapper from "./InputWrapper";

const FormInputMasked = (props: any, ref: any) => {
    const { className, isDisabled, } = props

    return <InputWrapper {...props}>
        <MaskedInput
            {...props}
            ref={ref}
            guide={false}
            className={`input input-bordered  w-full ${className}`} disabled={isDisabled} />
        {props.bottom}
    </InputWrapper>
}

export default React.memo(React.forwardRef(FormInputMasked));