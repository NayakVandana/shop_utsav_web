import React, { Children } from "react"
import FormError from "./FormError";
import FormHelperText from "./FormHelpText";
import MaskedInput from 'react-text-mask'

const InputWrapper = (props: any) => {
    const { isoptional, helpertext, error, title, children, joinleft, joinright, nomargin, needRightIcon, WrapperclassName } = props
    return (<React.Fragment>
        <div className={`w-full form-control ${nomargin ? "" : "mb-5"} `}>
            {title ? <div className="mb-2">
                <span className="label-text  text-sm">{title}{'  '}
                    {isoptional ? "(Optional)" : false}
                </span>
            </div> : false}


            {children}


            {error && <FormError error={error} />}

            {helpertext && <FormHelperText helpertext={helpertext} />}
        </div>
    </React.Fragment >)
}

export default React.memo(InputWrapper);