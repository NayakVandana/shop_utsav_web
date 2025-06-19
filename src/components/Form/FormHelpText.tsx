import React from "react"
const FormHelperText = ({ helpertextstart,helpertext,className,outerClassName }: any) => {
    return <span className={`text-sm text-secondary-900   mt-1.5 bg-primary-50  px-3 py-3 rounded-lg  ${outerClassName} `}>
          {helpertextstart ?    <span  className={className} >
                        {helpertextstart}
                    </span> : false }
        {helpertext}</span>
}
export default FormHelperText




