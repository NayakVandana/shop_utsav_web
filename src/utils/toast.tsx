import { toast as _toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function toast(data: any) {
    try {
        let options: any = {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark', 
        }
        switch (data.status) {
            case 'success':
                _toast.success(data.message, options);
                break;
            case 'werning':
                _toast.warn(data.message, options);
                break;

            case 'info':
                _toast.info(data.message, {
                    ...options,
                    position: 'top-center'

                });
                break;
            default:
                _toast.error(data.message, options);
                break;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}