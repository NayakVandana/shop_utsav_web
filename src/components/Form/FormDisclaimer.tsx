import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';




const FormDisclaimer = ({ heading, headerMessage, lists, footerMessage }) => {


    return (
        <div className='border border-orange-500 border-dashed rounded p-4'>
            <h3 className="font-semibold text-lg text-[#DB4437] flex items-center">
                <span><ExclamationTriangleIcon width={25} /></span>
                <span className='ml-3'>{heading}</span>
            </h3>
            <p className="pb-2 pt-4 text-[#DB4437]">{headerMessage}</p>
            <ul className="list-disc pl-5 text-[#DB4437]">
                {lists.map((item, index) => (
                    <li key={index}>{item.text}</li>
                ))}
            </ul>
            <p className=" pt-2 text-[#DB4437]">
                {footerMessage}
            </p>
        </div>
    );
};

export default FormDisclaimer;