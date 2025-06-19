

import React from "react";
import Datepicker from "react-tailwindcss-datepicker";
import InputWrapper from "./InputWrapper";
import moment from "moment";



const FormDatePicker = (props: any) => {
    const { icon, isoptional, iconColor, rightIconTsx, helpertext, isRequired, error, rightIcon, bg, isDisabled, id, leftIconTsx, isReadOnly, title, isRange, useRange, minDate, handleDateChange, value, className, popoverDirection, disabled = false, noMaxDate = false ,noMinLimit = false  } = props
    let today = new Date();
    let threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(today.getFullYear() - 3);

    const onChange = (date) => {
        // Format the date using Moment.js
        let formattedStartDate = moment(date.startDate).format("YYYY-MM-DD");
        let formattedEndDate = moment(date.endDate).format("YYYY-MM-DD");

  
        
        if (!date.startDate) {
            formattedStartDate = "";
            formattedEndDate = "";
        }


        if (handleDateChange) {
            handleDateChange({ startDate: formattedStartDate, endDate: formattedEndDate });
        }
    };

    return (<InputWrapper {...props}>
        <Datepicker
            inputClassName={` input input-bordered  w-full   ${className} `}
            placeholder={isRange ? "Select Date" : "DD-MMM-YYYY"}
            asSingle={!isRange}
            useRange={useRange}
            value={value}
            onChange={onChange}
            maxDate={noMaxDate ? null : new Date()}
            displayFormat={isRange ? "DD MMM YY" : 'DD MMM YYYY'}
            // minDate={minDate || threeYearsAgo}
            minDate={noMinLimit? null :  minDate || threeYearsAgo}
            showShortcuts={isRange}
            popoverDirection={popoverDirection}
            dateLooking={'middle'}
            disabled={disabled}
            primaryColor="green"
        />
    </InputWrapper>)
}

export default React.memo(FormDatePicker);
