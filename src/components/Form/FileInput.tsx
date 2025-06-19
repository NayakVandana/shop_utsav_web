


import React from "react"
import InputWrapper from "./InputWrapper";

const FileInput = (props: any, ref: any) => {
    const { className, isDisabled } = props
    return <InputWrapper {...props}>
        <input type="file" className={`file-input input-bordered  file-input-primary w-full ${className}`} disabled={isDisabled}  {...props} ref={ref}  />
    </InputWrapper>
}

export default React.forwardRef(FileInput);
