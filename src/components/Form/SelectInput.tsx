import React from "react"
import FormError from "./FormError";
import FormHelperText from "./FormHelpText";
import InputWrapper from "./InputWrapper";

const SelectInput = (props: any) => {
    return <InputWrapper {...props}>
        <select className={`select select-bordered  w-full  ${props.className} `} {...props} >
            {props.children}
        </select>
    </InputWrapper>
}

export default React.memo(SelectInput);



