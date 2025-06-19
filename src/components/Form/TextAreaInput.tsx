import React from "react"
import FormError from "./FormError";
import FormHelperText from "./FormHelpText";
import InputWrapper from "./InputWrapper";

const TextAreaInput = (props: any) => {
    const { className = '', isDisabled, } = props
    return (<InputWrapper {...props}>
        <textarea
            {...props}
            className={`textarea textarea-bordered  w-full textarea-lg font-medium  ${className}`} disabled={isDisabled} />
    </InputWrapper>)
}

export default React.memo(TextAreaInput);
