import { useApiLoadingStore } from '@/components/ApiLoading/ApiLoadingStore';
import FormButton from '@/components/Form/FormButton';
import FormInput from '@/components/Form/FormInput';
import toast from '@/utils/toast';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import { useAuthStore } from './authStore';
import Link from 'next/link';

export const LoginWithPassword = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isShowPassword, setIsShowPassword] = useState(false);
  const login = useAuthStore((state) => state.login);
  const { showLoader, hideLoader } = useApiLoadingStore();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear alert and current input error
    setErrors((prev) => ({
      ...prev,
      alert: '',
      [name]: '',
    }));

    // Update form data
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const _errors = {};

    if (!data.email) {
      _errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      _errors.email = 'Invalid email address';
    }

    if (!data.password) {
      _errors.password = 'Password is required';
    }

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!validate()) {
            return false;
        }
        showLoader()
        const response = await signIn('login', {
            email: data.email,
            password: data.password,
            login_with: 'PASSWORD',
            redirect: false,
        }).then(({ ok, error }: any) => {
            hideLoader()

            if (ok) {
                login({
                    success: () => {
                        void router.push("/products");
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

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {errors.alert && (
        <div className="alert bg-red-100 text-red-600 border border-red-400 rounded-lg flex items-center">
          <ExclamationTriangleIcon width={20} className="mr-2" />
          {errors.alert}
        </div>
      )}

      <FormInput
        id="email"
        name="email"
        title="Email Address"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Enter email address"
      />

      <div className="relative">
        <FormInput
          id="password"
          title="Password"
          type={isShowPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          value={data.password}
          error={errors.password}
          onChange={handleChange}
        />
        <div
          className="absolute right-3 top-9 cursor-pointer"
          onClick={() => setIsShowPassword(!isShowPassword)}
        >
          {isShowPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </div>
      </div>

      <Link
        href="/forgot-password"
        className="link link-hover flex items-center text-primary-400 justify-end"
      >
        Forgot Password?
      </Link>

      <FormButton type="submit" className="btn btn-primary btn-block" title="Login" />
    </form>
  );
};