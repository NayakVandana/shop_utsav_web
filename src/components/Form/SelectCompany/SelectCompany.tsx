'use client'

import RegisteredBadge from '@/components/common/RegisteredBadge'
import { VerfiyBadge } from '@/ui/common/functions'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import InputWrapper from '../InputWrapper'
import { useSelectCompanyStore } from './selectCompanyStore'

export default function SelectCompany(props) {
    const customerList = useSelectCompanyStore((state: any) => state.customerList)
    const getCustomerList = useSelectCompanyStore((state: any) => state.getCustomerList)
    const getCustomerName = useSelectCompanyStore((state: any) => state.getCustomerName)
    const { type, with_transaction_count = false, onChange, className, placeholder, value, rightTsx, joinright, action_type = "" } = props;



    const getData = () => {
        getCustomerList({
            type,
            with_transaction_count: with_transaction_count,
            action_type: action_type
        })
    }


    useEffect(() => {
        getData()
    }, [])

    const [selected, setSelected] = useState({})
    const [query, setQuery] = useState('')

    useEffect(() => {
        if (value === "") {
            setSelected({})
        }
        // return () => {
        //     setSelected({})
        // }
    }, [value])



    const filteredPeople = query === '' ? customerList : customerList.filter((person) => {
        return person.name.toLowerCase().includes(query.toLowerCase())
    })


    const handleSelect = (data) => {
        setSelected(data);
        onChange({ target: { name: props?.name, value: data?.id } })
    }


    useEffect(() => {

        if (value) {
            const data = customerList.find((person) => person.id === value)
            setSelected(data);
        }
    }, [value ,customerList]);


    return (
        <>
            <InputWrapper {...props}>
                <Combobox value={selected} onChange={handleSelect} className={`w-full`}>
                    <div className="relative">

                        <Combobox.Button className={'w-full flex  items-center '}>
                            <Combobox.Input
                                placeholder={placeholder || 'Choose customer'}
                                className={`w-full ${props.needRightIcon ? '' : ' input  input-bordered '} ${className}`}
                                displayValue={(person) => person.name}
                                onChange={(event) => setQuery(event.target.value)}
                            />


                        </Combobox.Button>
                        {joinright ? <>
                            <span className="absolute right-0 top-1 w-8 bg-white h-10 ">
                                {joinright}
                            </span>
                        </> : false}

                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery('')}
                        >
                            <Combobox.Options className="absolute mt-1 max-h-60  shadow-xl cursor-pointer overflow-auto rounded-md bg-base-100 py-1 text-base  ring-1 ring-black/5 focus:outline-none sm:text-sm z-50 w-full min-w-[400px]  scrollbar  scrollbar-thumb-transparent  hover:scrollbar-thumb-primary-50   scrollbar-track-transparent "
                            >
                                {filteredPeople.length === 0 && query !== '' ? (
                                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                        Nothing found.
                                    </div>
                                ) : (
                                    filteredPeople.map((person, index) => (
                                        <Combobox.Option
                                            // onClick={handleButtonClick}

                                            key={index}
                                            className={({ active, selected }) =>
                                                `relative ${with_transaction_count && !person.transaction_count ? 'cursor-not-allowed bg-gray-100' : 'cursor-pointer'} select-none  py-2 pl-5 pr-4 ${active ? 'bg-gray-200 text-black' : 'text-gray-900'} ${selected ? 'bg-light-primary text-black' : ''}`
                                            }
                                            value={person}
                                            disabled={with_transaction_count && !person.transaction_count}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className={'flex items-center ' + (with_transaction_count && !person.transaction_count ? " opacity-50" : "")}  >

                                                        {with_transaction_count ? <div className='inline-block'>
                                                            <span className=' mr-3 badge px-2  badge-error  tooltip tooltip-secondary' data-tip="Transactions" > {person.transaction_count}</span>
                                                        </div> : false}

                                                        {person.logo_url ?
                                                            <Image className='h-10 w-10 rounded-full' height={50} width={50} src={person.logo_url} alt={person.name} />
                                                            : <span className='h-10 w-10 rounded-full bg-slate-200 ' ></span>}
                                                        <span className='ml-5  truncate mr-3 text-muted' > {person.name}
                                                            {person?.is_verified ? <VerfiyBadge className={'w-5 h-5 ml-2'} /> : false}
                                                        </span>
                                                        <RegisteredBadge
                                                            is_registered={person.is_registered}
                                                            is_individual={person.is_individual}
                                                        />


                                                    </div>

                                                    {selected ? (
                                                        <span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3`}
                                                        // onClick={handleButtonClick}
                                                        >
                                                            {/* <CheckBadgeIcon width={10} /> */}
                                                            {/* <CheckCircle width={15} /> */}
                                                            {/* <CheckIcon className="h-5 w-5" /> */}
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Combobox.Option>
                                    ))
                                )}
                            </Combobox.Options>
                        </Transition>
                    </div>
                </Combobox>

                {rightTsx}
            </InputWrapper>
        </>
    )
}


