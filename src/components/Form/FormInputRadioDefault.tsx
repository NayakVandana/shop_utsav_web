import React from 'react';
import PropTypes from 'prop-types';
import FormError from './FormError';
import { Check } from 'react-feather';

const FormInputRadioDefault = ({
    handleSelect,
    label,
    defaultValue,
    redioList = [],
    error,
    name,
    classname = '',
    isRequired = false,
    activeValue = '',
    isColumn = false, // New prop to enforce column layout
}) => {
    const handleRadioSelect = (value) => {
        handleSelect(value);
    };

    return (
        <div className="w-full mb-5">
            {label && (
                <div className="label-text mb-2">
                    {label}
                    {isRequired && <span className="text-red-500 ml-1">*</span>}
                </div>
            )}

            {/* Responsive or Column Layout */}
            <div
                className={`grid gap-3 ${
                    isColumn ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
                }`}
            >
                {redioList.map((item) => (
                    <label
                        key={item.value}
                        className={`
                            flex items-center gap-3 p-3 cursor-pointer rounded-md border 
                            transition-all duration-200
                            ${
                                activeValue === item.value
                                    ? 'border-primary-400 text-primary-400 bg-primary-50'
                                    : 'border-neutral-200 text-neutral-600 hover:border-primary-200'
                            }
                            ${classname}
                            ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                    >
                        <input
                            type="radio"
                            name={name}
                            id={item.value}
                            value={item.value}
                            checked={activeValue === item.value}
                            onChange={() => handleRadioSelect(item.value)}
                            className="hidden"
                            disabled={item.disabled}
                            aria-labelledby={`${item.value}-label`}
                        />

                        {/* Custom Radio Indicator */}
                        <div className="flex-shrink-0">
                            <div
                                className={`
                                    w-5 h-5 rounded-full border-2 flex items-center justify-center
                                    ${
                                        activeValue === item.value
                                            ? 'border-primary-400 bg-primary-50'
                                            : 'border-neutral-300'
                                    }
                                `}
                            >
                                {activeValue === item.value && (
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary-400" />
                                )}
                            </div>
                        </div>

                        <span id={`${item.value}-label`} className="flex-1 text-neutral-700">
                            {item.label}
                        </span>

                        {activeValue === item.value && (
                            <Check size={18} className="text-primary-400 flex-shrink-0" />
                        )}
                    </label>
                ))}
            </div>

            {error && <FormError error={error} className="mt-2" />}
        </div>
    );
};

FormInputRadioDefault.propTypes = {
    handleSelect: PropTypes.func.isRequired,
    label: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    redioList: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            disabled: PropTypes.bool,
        })
    ).isRequired,
    error: PropTypes.string,
    name: PropTypes.string.isRequired,
    classname: PropTypes.string,
    isRequired: PropTypes.bool,
    isColumn: PropTypes.bool, // New prop for enforcing column layout
};

export default FormInputRadioDefault;
