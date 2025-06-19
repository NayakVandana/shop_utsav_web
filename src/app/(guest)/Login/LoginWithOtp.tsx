
import React from 'react';
// import ScreenTitle from '../../common/Page/ScreenTitle';
// import GuestScreen from '../../common/Page/GuestScreen';
import { useApiLoadingStore } from '@/components/ApiLoading/ApiLoadingStore';
import FormButton from '@/components/Form/FormButton';
import FormInput from '@/components/Form/FormInput';
import { FormOtpInput } from '@/components/Form/FormOtpInput';
import { allowOnlyNumbers, validPhone } from '@/components/Form/FormValidation';
import { useOtpStore } from '@/ui/common/Otp/useOtpStore';
import { VerificationTokenRequest } from '@/utils/constants';
import { useCheckIsRegistered } from '@/utils/store';
import toast from '@/utils/toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from './authStore';

export const LoginWithOtp = () => {
    const router = useRouter();
    const { checkMobileIsRegistered }: any = useCheckIsRegistered()
    const {showLoader, hideLoader} = useApiLoadingStore()
    const [data, setData] = React.useState({
        mobile: '',
        otp: '',
    });
    const [errors, setErrors] = React.useState<any>({});
    const [isSent, setIsSent] = React.useState(false);
    const login = useAuthStore((state: any) => state.login);

    const { isSending, sendOtp, otp_response }: any = useOtpStore();

    const handleChange = (e: any) => {

        const { name, value } = e.target;

        // input value checked
        if (name === 'mobile' && value) {
            //  allow only numbers
            if (!allowOnlyNumbers(value)) {
                return false;
            }
        }

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

        if (!data.mobile) {
            _errors.mobile = 'Mobile is required';
        }
        if (data.mobile && !validPhone(data.mobile)) {
            _errors.mobile = 'Enter valid mobile'
        }

        if (Object.keys(_errors).length > 0) {
            setErrors(_errors);
            return false;
        }
        return true;
    }

    const requestOtp = async (e: any) => {
        e.preventDefault();
        if (!validate()) {
            return false;
        }

        // check here 
        await checkMobileIsRegistered({ mobile: data.mobile },
            {
                success: () => {
                    sendOtp({
                        mobile: data.mobile,
                        request_type: VerificationTokenRequest.LOGIN,
                    }, {
                        success: (response: any) => {
                            setIsSent(true)
                        },
                        errors: (errors: any) => {
                            setIsSent(false)
                        }
                    })
                },
                error: (error: any) => {
                    setErrors({ mobile: error.message })
                }
            }
        )
    }

    const verifyOtp = async (e: any) => {
        e.preventDefault();

        if (!validate()) {
            return false;
        }
        showLoader()
        const response = await signIn('login', {
            username: data.mobile,
            login_with: 'OTP',
            otp: data.otp,
            verification_token: otp_response.verification_token,
            request_type: VerificationTokenRequest.LOGIN,
            redirect: false
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
                    otp: _err.message
                    // password: <PASSWORD>
                })
                toast({ message: _err.message, type: "error" });
            }
        })

    }

    return (<>
        {isSent === false ?
            <form className="space-y-6" action="#" onSubmit={requestOtp}>
                <FormInput
                    title="Mobile Number"
                    type="text"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={data.mobile}
                    error={errors?.mobile}
                    onChange={handleChange}
                />

                <FormButton type="submit" className="btn btn-primary btn-block " title="Get OTP" />

            </form> :
            <form className="space-y-6" action="#" onSubmit={verifyOtp}>
                <h2 className='text-center font-semibold text-xl'>Verify OTP</h2>
                <span className="text-sm text-center  text-gray-500 flex">
                    We have sent a code to your mobile number. Please enter the code below to verify your account.
                </span>
                <FormOtpInput
                    // title="Enter OTP"
                    containerStyle={"justify-center mb-10"}
                    numInputs={6}
                    value={data.otp}
                    error={errors?.otp}
                    onChange={(otp: any) => handleChange({ target: { name: 'otp', value: otp } })}
                />
                <FormButton type="submit" className="btn btn-primary btn-block  " title="Verify" />
                {/* Didn't recieve code? Resend */}
                <p className="mt-10 text-center text-sm text-gray-500">
                    {"Didn't recieve code?"} <button className="link link-hover">Resend </button>
                </p>

            </form>}
    </>
    );
}
