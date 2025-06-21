'use client';
import AuthContainer from "@/components/AuthContainer"
import FormInput from "@/components/Form/FormInput"
import Link from "next/link"
import React, { useEffect } from "react"
import { LoginWithPassword } from "./LoginWithPassword"
import { LoginWithOtp } from "./LoginWithOtp"
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import FormButton from "@/components/Form/FormButton";
import { useAuthStore } from "./authStore";


export default function Login() {
    const [loginWith, SetLoginWith] = React.useState('password')

    const  logout = useAuthStore(state => state.logout);

    useEffect(() => { 
            logout(); 
    }, [logout])



    return (<>
        <AuthContainer title={"Login to your account"}>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  rounded">
                {loginWith === 'password' ? <LoginWithPassword /> : <LoginWithOtp />}

                {/* <div className="divider py-5 ">OR</div>

                <FormButton onClick={() => SetLoginWith(loginWith === 'password' ? 'otp' : 'password')} className="btn btn-primary btn-block  btn-outline" title={loginWith === 'password' ? 'Login via OTP' : 'Login Via Password'} /> */}



                <p className="mt-10 text-center text-sm text-gray-500">
                    Don’t have account? <Link href="/register" className="link link-hover text-blue-400 ">Register Now</Link>
                </p>
            </div>
        </AuthContainer>

    </>
    )
}
