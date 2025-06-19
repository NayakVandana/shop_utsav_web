import apiCall from "@/utils/apiCall";
import { handleResponse } from "@/utils/common";
import toast from "@/utils/toast";
import { create } from "zustand";


export const useSelectCompanyStore = create((set, get: any) => ({
    customerList: [],
    clearCustomerList: () => set({ customerList: [], isLoaded: false }),
    getCustomerList: (data: any, callback: any) => {
        apiCall('/company/get-creditor-debtor-list', data, {
            showLoader: true
        }).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    set((state: any) => ({ customerList: responseData.data }));
                    callback?.success();
                } else {
                    callback?.error(responseData);
                    toast({ message: responseData.message });
                }
            }
        });
    },
    getCustomerName: (id: any) => {
        let customerName = '';
        set((state: any) => ({
            customerList: state.customerList.map((item: any) => {
                if (item.id == id) {
                    customerName = item.name;
                }
                return item;
            })
        }));
        return customerName;
    },
    checkEmailAdded: (id: any) => {
        let customerEmail = '';
        set((state: any) => ({
            customerList: state.customerList.map((item: any) => {
                if (item.id == id) {
                    customerEmail = item.email;
                }
                return item;
            })
        }));
        return customerEmail;
    },
    checkGstAdded: (id: any) => {
        let customerGst = '';
        set((state: any) => ({
            customerList: state.customerList.map((item: any) => {
                if (item.id == id) {
                    customerGst = item.gst_no;
                }
                return item;
            })
        }));
        return customerGst;
    },
    
    customerEmail :[] ,
    getCustomerEmail: (data: any, callback: any) => {
        apiCall('/company/get-my-customer-details', data, {
            showLoader: true
        }).then((response) => {
            let responseData = handleResponse(response);
            if (responseData) {
                if (responseData.status == true) {
                    set((state: any) => ({ customerEmail: responseData.data }));
                    callback?.success();
                } else {
                    callback?.error(responseData);
                    toast({ message: responseData.message });
                }
            }
        });
    },
})
);