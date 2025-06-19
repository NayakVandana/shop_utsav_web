import React from 'react'
import FormError from './FormError'
import { Check } from 'react-feather'

const FormInputRadio = ({ handleSelect, label, activeValue, redioList = [], error, hasChildren, classname = '', isShowCheck = false ,isoptional =false  }) => {
    return (
        <>
            <div className="w-full">
                {label ? <div className='label-text mb-2'>{label}   {isoptional ? "(Optional)" : false}</div> : false}
                <div className='flex flex-col sm:flex-row gap-3 '>
                    {redioList.map((item) => (
                        <div className='flex-1 w-full' key={item.value}>
                            <div
                                className={`
                        p-3 
                        flex justify-between items-center 
                        border rounded-md cursor-pointer 
                        truncate
                        ${activeValue === item.value
                                        ? 'border-primary-400 text-primary-400 bg-primary-50'
                                        : 'border-[#E4E4E4] text-secondary-500'
                                    }  
                        ${classname}
                    `}
                                onClick={() => handleSelect(item.value)}
                            >
                                <div className={`items-center flex ${activeValue === item.value ? 'text-primary-400' : ''}`}>
                                    {item.label} 
                                </div>
                                {isShowCheck && (activeValue === item.value) ? (
                                    <div className='border bg-primary-400 p-0.5 rounded-full'>
                                        <Check color='#fff' size={18} />
                                    </div>
                                ) : false}
                            </div>
                        </div>
                    ))}
                </div>
                <FormError error={error} />
            </div>

        </>
    )
}

export default FormInputRadio