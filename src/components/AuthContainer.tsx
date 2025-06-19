import Link from "next/link"
import ApiLoading from "./ApiLoading/ApiLoading";
import Hotjar from "./common/Hotjar";
const assets_url = `${process.env.ASSETS_URL}`
function AuthContainer(props: any) {
    const { title, subtitle, children } = props;


    return (<div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 " style={{ backgroundImage: `url(${assets_url}/images/auth-backdrop.png)` }}>
        <div className="bg-base-100 shadow-lg sm:mx-auto sm:w-full sm:max-w-lg px-8 py-8 border-1 rounded">
            <div className="" >
                <Link href={'/'} className="flex items-center justify-between pt-10">
                    <img className="mx-auto h-14 w-auto" src={assets_url + '/images/for-logo.png'} alt="LegAn" />

                </Link>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{title}</h2>
                {subtitle ? <h6 className="mt-2 mb-5 text-center text-sm leading-9 tracking-tight text-gray-900">{subtitle}</h6> : false}
            </div>

            <div className="">
                {children}
            </div>

            <ApiLoading />
 
        </div>
    </div>
    )
}

export default AuthContainer