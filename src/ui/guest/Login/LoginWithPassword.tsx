
import { useApiLoadingStore } from '@/components/ApiLoading/ApiLoadingStore';
import FormButton from '@/components/Form/FormButton';
import FormInput from '@/components/Form/FormInput';
import FormInputMasked from '@/components/Form/FormInputMasked';
import { validPhone } from '@/components/Form/FormValidation';
import toast from '@/utils/toast';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import { useAuthStore } from './authStore';
import Link from 'next/link';

export const LoginWithPassword = () => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState<any>({});
    const login = useAuthStore((state: any) => state.login);
    const [isShowPassword, togglePassword] = useState(false)
    const { showLoader, hideLoader } = useApiLoadingStore()
    let router = useRouter();

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        // input value checked
        if (name === 'username' && value) {
            //  allow only numbers
            if (!/^[0-9]+$/.test(value)) {
                return false;
            }
        }
        errors.alert = ""
        // remove current input error message
        setErrors({
            ...errors,
            [name]: ""
        });

        // set data 
        setData({
            ...data, [name]: value
        });


    }




    const validate = () => {
        let _errors: any = {};

        if (!data.username) {
            _errors.username = 'Mobile number is required';
        } else if (!validPhone(data.username)) {
            _errors.username = 'Invalid Mobile Mumber';
        }
        if (!data.password) {
            _errors.password = 'Password is required';
        }

        if (Object.keys(_errors).length > 0) {
            setErrors(_errors);
            return false;
        }
        return true;
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!validate()) {
            return false;
        }
        showLoader()
        const response = await signIn('login', {
            username: data.username,
            password: data.password,
            login_with: 'PASSWORD',
            redirect: false,
        }).then(({ ok, error }: any) => {
            hideLoader()

            if (ok) {
                login({
                    success: () => {
                        void router.push("/select-company");
                    },
                })

            } else {

                const _err = JSON.parse(error);

                setErrors({
                    alert: _err.message
                    // password: <PASSWORD>
                })
                toast({ message: _err.message, type: "error" });
            }
        })
        console.log(response)
        // login({
        //     username: data.username,
        //     password: data.password,
        //     login_with: 'PASSWORD',
        // }, {
        //     success: () => {
        //     },
        //     error: (error) => {
        //         let errors = error?.data?.errors
        //         setErrors(errors);
        //     }
        // });
    }

    return (<>


        <form className="space-y-6" onSubmit={handleSubmit}>
            {errors.alert && <div className="alert bg-red-100 text-red-600 border border-red-400 rounded-lg">
                <ExclamationTriangleIcon width={20} />
                {errors.alert}</div>}
            <FormInputMasked
                title="Mobile Number"
                type="text"
                mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                placeholder="Mobile Number"
                name="username"
                value={data.username}
                error={errors?.username}
                onChange={handleChange}
            />

            <FormInput
                id="password"
                title="Password"
                type={isShowPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={data.password}
                error={errors?.password}
                onChange={handleChange}
                className={'flex items-center '}
                // needRightIcon
                joinright={<div className='absolute right-3 top-3 cursor-pointer' onClick={() => togglePassword(!isShowPassword)}>{isShowPassword ? <EyeOff /> : <Eye />}</div>}
            // joinright={<div onClick={()=>togglePassword(!isSho/wPassword)}>{isShowPassword ? <EyeOff/> : <Eye/>}</div>}
            />

            <Link href={'/forgot-password'} className="link link-hover  flex  items-center text-primary-400 justify-end ml-auto">
                Forgot Password?
            </Link>

            <FormButton type="submit" className="btn btn-primary btn-block " title="Login" />

        </form>


    </>
    );
}
