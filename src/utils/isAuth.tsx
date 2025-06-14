
import { redirect } from "next/navigation";
import { isLoggedin } from "./isLoggedin";
export default function auth(Component: any) {
    return async function IsAuth(props: any) {

        let isLogin = await isLoggedin();
        if (!isLogin) {
            return redirect("/login");
        }

        return <>
            <Component {...props} />
        </>
    };
}