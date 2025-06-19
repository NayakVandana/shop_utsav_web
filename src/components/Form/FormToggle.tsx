import React from "react"
import FormHelperText from "./FormHelpText";

const FormToggle = (props: any) => {
    const { helpertext, title, value, onChange, className, rightTitle, placed, notes } = props
    return (
        <React.Fragment>
            <label className="form-control mb-5">
                <div className={`flex justify-between ${placed} `} >
                    {title ? <div className={className} >
                        {title}
                    </div> : false}
                    <input
                        {...props}
                        className="toggle toggle-md toggle-primary"
                        checked={value}
                        onChange={onChange}
                        type='checkbox'
                    />
                    {rightTitle ? <div className="flex flex-col" >
                        <div className={className} >
                            {rightTitle}
                        </div>
                        <div className="ml-2" >
                            {notes}
                        </div>
                    </div>
                        : false}
                </div>
                {helpertext && <FormHelperText helpertext={helpertext} />}
            </label>
        </React.Fragment >)
}

export default React.memo(FormToggle);

