import React from 'react'
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'react-feather';

const BackButton = (props) => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className={`
                group relative inline-flex items-center justify-center
                px-3 py-2 sm:px-4 sm:py-2.5 
                bg-gradient-to-r from-primary-50 to-indigo-50 
                hover:from-primary-100 hover:to-indigo-100
                border border-primary-200 hover:border-primary-300
                rounded-lg sm:rounded-xl
                text-primary-700 hover:text-primary-800
                font-medium text-sm sm:text-base
                shadow-sm hover:shadow-md
                transition-all duration-300 ease-in-out
                transform hover:-translate-y-0.5 active:translate-y-0
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                min-w-[2.5rem] sm:min-w-[7rem]
                ${props.className || ''}
            `}
            aria-label="Go back"
        >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-purple-500/0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Icon and text content */}
            <div className="relative flex items-center justify-center gap-1 sm:gap-2">
                <ChevronLeft
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1"
                />
                <span className="hidden sm:inline font-semibold">Back</span>
            </div>

            {/* Ripple effect on click */}
            <div className="absolute inset-0 rounded-lg sm:rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-primary-400 opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
            </div>
        </button>
    );
};

export default BackButton;
