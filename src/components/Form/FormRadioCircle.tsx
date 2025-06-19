import React from 'react'
import { Check } from 'react-feather'

const FormRadioCircle = ({ isActive }) => {


    return (
        <>
            {isActive ? <div className='border bg-primary-400 p-0.5 rounded-full' >
                <Check color='#fff' size={18} />
            </div> : false}
        </>
    )
}

export default FormRadioCircle