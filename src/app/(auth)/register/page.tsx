


import Register from '@/ui/guest/Register/Register'
import guestauth from '@/utils/guestauth'


const register = () => {
    return (<>
        <Register />
    </>
    )
}
export default guestauth(register)