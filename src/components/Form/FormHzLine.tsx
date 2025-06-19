import React from 'react'

const FormHzLine = ({ text, smallText = '' }) => {
    return (
        <div className="flex relative">
        
            <div className="relative flex justify-start">
                <span className="pr-3  inline-flex flex-col items-start">
                    {text && (
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                            {text}
                        </span>
                    )}
                    {smallText && (
                        <span className="font-semibold text-secondary-900">
                            {smallText}
                        </span>
                    )}
                </span>
            </div>
        </div>
    )
}

export default FormHzLine
