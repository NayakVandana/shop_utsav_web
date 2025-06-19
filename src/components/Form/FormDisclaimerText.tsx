import React from "react"
const FormDisclaimerText = ({ helpertextstart,helpertext,className,outerClassName }: any) => {
    return <span className={`text-sm text-red-600  bg-red-50  px-3 py-3 rounded-lg  ${outerClassName} `}>
          {helpertextstart ?    <span  className={className} >
                        {helpertextstart}
                    </span> : false }
        {helpertext}</span>
}
export default FormDisclaimerText




