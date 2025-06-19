import React from "react"
import InputWrapper from "./InputWrapper";

const FormInput = (props: any, ref: any) => {
    const { className, isDisabled, joinleft, joinright } = props
    return <InputWrapper {...props}>


        {joinleft || joinright ? <div className="join relative">
            {joinleft && joinleft}


            <input
                {...props}
                ref={ref}
                className={`input input-bordered w-full ${className} `} disabled={isDisabled} />

            {joinright ? joinright : false}

        </div> : <input
            {...props}
            ref={ref}
            className={`input input-bordered w-full ${className} `} disabled={isDisabled} />}


    </InputWrapper>
}

export default React.memo(React.forwardRef(FormInput));