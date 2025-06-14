

import { isLoggedin } from "./isLoggedin";
export default function guest(Component: any) {
    return async function guest(props: any) {
        let isLogin = await isLoggedin();
        return <Component {...props} />
    };
}