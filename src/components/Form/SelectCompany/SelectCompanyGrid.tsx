// components/SelectCompanyGrid.js

import AddAsDebtorCustomer from '@/deprecated/ui/marketing/Customer/AddAsDebtorCustomer';
import { useCustomersStore } from '@/deprecated/ui/marketing/Customer/useCustomersStore';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Check, Plus } from 'react-feather';
import FormError from '../FormError';
import { useSelectCompanyStore } from './selectCompanyStore';
import RegisteredBadge from '@/components/common/RegisteredBadge';

export default function SelectCompanyGrid(props) {
    const { type, with_transaction_count = false, onChange, className, error, value } = props;


    const customerList = useSelectCompanyStore((state) => state.customerList);
    const getCustomerList = useSelectCompanyStore((state) => state.getCustomerList);
    const removeIndividualCustomer = useCustomersStore((state: any) => state.removeIndividualCustomer)



    const [selectedCustomer, setSelectedCustomer] = useState(value || {});

    const getData = () => {
        getCustomerList({
            type,
            with_transaction_count: with_transaction_count,
        })
    }


    useEffect(() => {
        getData()
    }, [])

    const handleSelect = (customer) => {
        console.log(customer);
        setSelectedCustomer(customer);
        onChange({ target: { name: props?.name, value: customer } });
    };

    const addBorrow = () => {
        (document.getElementById('customer_add_as_debtor_modal') as HTMLFormElement).showModal();
    };

    const callBack = (data) => {
        console.log(data);
        const { company_name, company_id } = data
        getData();
        handleSelect({ name: company_name, id: company_id })

        setSelectedCustomer({ id: company_id, name: company_name });
        (document.getElementById('customer_add_as_debtor_modal') as HTMLFormElement).close();
        removeIndividualCustomer();
    }
    return (
        <>

            <div className={`space-y-5 sm:space-y-0 sm:grid md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>

                <div className="flex items-center justify-center border p-4  border-2 border-primary-400 border-dotted rounded text-primary cursor-pointer " onClick={addBorrow} >
                    <Plus color='green' />
                    <span className="ml-2 truncate text-primary-400 ">
                        Add Borrower
                    </span>
                </div>
                {customerList.map((customer, index) => (
                    <div
                        key={index}
                        className={`relative p-4 border border-2 rounded-md cursor-pointer ${selectedCustomer?.id === customer.id ? 'border-green-500 bg-primary-50' : 'border-gray-300'}`}
                        onClick={() => handleSelect(customer)}
                    >
                        <div className='flex justify-between items-center'>
                            <div className="flex items-center truncate">
                                {customer.logo_url ? (
                                    <Image className="h-10 w-10 rounded-full" height={50} width={50} src={customer.logo_url} alt={customer.name} />
                                ) : (
                                    <span className="h-10 w-10 rounded-full bg-slate-200"></span>
                                )}
                                <div className='flex flex-col ml-3  truncate'>
                                    <span className="truncate font-semibold">{customer.name}</span>
                                    <span className="truncate text-sm text-gray-400">{customer.formated_repute_id}</span>
                                </div>
                            </div>
                            <div>
                                {selectedCustomer?.id === customer.id && (
                                    <div className='border bg-primary-400 p-0.5 rounded-full'>
                                        <Check color='#fff' size={18} />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Badge positioned at the top right for transactions */}
                        {with_transaction_count && customer.transaction_count > 0 && (
                            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
                                {customer.transaction_count} Transactions
                            </span>
                        )}

                        {/* Badge for alerts counts positioned at the top right */}
                        <span className="absolute top-2 right-2">
                            <RegisteredBadge
                                is_registered={customer.is_registered}
                                is_individual={customer.is_individual}
                            />

                        </span>
                    </div>
                ))}
            </div>
            {error && <FormError error={error} />}
            <AddAsDebtorCustomer callBack={callBack} />
        </>
    );
}