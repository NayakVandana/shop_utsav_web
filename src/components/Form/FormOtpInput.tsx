import React, { useState } from 'react';
import OTPInput from "react-otp-input";
import FormError from './FormError';

export const FormOtpInput = (props: any) => {
    const { icon, isoptional, iconColor, rightIconTsx, helpertext, isRequired, error, rightIcon, bg, isDisabled, id, leftIconTsx, isReadOnly, title } = props

    return (<>
        <label className="form-control ">
            <div className="">
                <span className="label-text">{title}
                    {isoptional ? "(Optional)" : false}
                </span>
            </div>
            <div className="mt-2">
                <OTPInput
                    numInputs={4}
                    inputType="text"
                    containerStyle={'justify-between'}
                    skipDefaultStyles={true}
                    inputStyle={"input input-bordered  w-12 text-center text-xl"}
                    renderSeparator={<span className='mx-2'></span>}
                    renderInput={(props) => <input {...props} />}
                    {...props}
                />
                <div className=" text-sm text-center text-red-400 w-full">
                    {error}
                </div>
            </div>
        </label>
    </>
    );
}