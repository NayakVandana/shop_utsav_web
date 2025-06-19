import React from "react"
import MaskedInput from 'react-text-mask'
import InputWrapper from "./InputWrapper";

const FormInputGST = (props: any, ref: any) => {
    const { className, isDisabled, } = props
    return (
        <InputWrapper {...props}>
            <MaskedInput
                mask={[/\d/, /\d/, /[A-Za-z]/, /[A-Za-z]/, /[A-Za-z]/, /[p|P|c|C|h|H|f|F|a|A|t|T|b|B|l|L|j|J|g|G|k|K]/, /[A-Za-z]/, /\d/, /\d/, /\d/, /\d/, /[A-Za-z]/, /[A-Za-z1-9]/, /[0-9A-Za-z]/, /[A-Za-z0-9]/]}
                {...props}
                ref={ref}
                guide={false}
                className={`input input-bordered  w-full ${className}`} disabled={isDisabled} />
        </InputWrapper>
    )
}

export default React.memo(React.forwardRef(FormInputGST));