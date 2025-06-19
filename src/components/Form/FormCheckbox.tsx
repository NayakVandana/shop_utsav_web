import React from "react";
import FormError from "./FormError";
import FormHelperText from "./FormHelpText";

const FormCheckbox = (props: any, ref: any) => {
    const { title, helpertext, error,subTitle, isBottomModalLink ,marginBottom } = props
    return (
        <div className={"form-control " + ( marginBottom ? marginBottom : "mb-4")}>
              <div className={"flex   " + ( isBottomModalLink? " flex-col" : "")}>


                <label className="cursor-pointer label justify-normal items-start">
                    <input
                        {...props}
                        ref={ref}
                        type="checkbox"
                        className="checkbox checkbox-primary rounded"
                    />
                    <span className="ml-2 inline-block">{title}</span>
                </label>
                <span className={"my-auto " + ( isBottomModalLink? " ml-8" : "")}>{subTitle}</span>
            </div>
            {error && <FormError error={error} />}

            {helpertext && <FormHelperText helpertext={helpertext} />}
        </div>
    )
}



export default React.memo(React.forwardRef(FormCheckbox));