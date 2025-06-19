import React from 'react'

const InterestRate = () => {
    return (
        <span className='join-item input border-slate-300 bg-base-200 w-52  items-center flex'>per 30 days</span>
    )
}

const CurrencyIcon = () => {
    return (
        <span className='join-item input border-slate-300 bg-base-200 px-6  items-center flex'> ₹ </span>
    )
}

export { InterestRate, CurrencyIcon }