'use client';
import React, { memo } from 'react';
import { useApiLoadingStore } from './ApiLoadingStore';

const _Loader = ({ isLoading, laodingText }: any) => {
    return (isLoading ? <div className="overlay" style={{ zIndex: 10000000 }}>
        <div className="overlay__inner">
            <div className="overlay__content">
                <div className='bg-base-100 p-4 rounded-xl flex-col flex justify-center items-center'>
                    <span className="loading loading-spinner text-primary loading-lg m-3"></span>
                    <span className='font-semibold text-sm'> {laodingText ? laodingText : "Please wait..."}</span>
                </div>
            </div>
        </div>
    </div> : false
    );
};
const Loader = memo(_Loader);

const ApiLoading = () => {
    const { isLoading, laodingText } = useApiLoadingStore();
    return <Loader isLoading={isLoading} laodingText={laodingText} />
}

export default ApiLoading;

