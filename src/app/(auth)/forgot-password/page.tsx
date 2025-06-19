import ForgotPassword from '@/ui/guest/ForgotPassword/ForgotPassword'
import guestauth from '@/utils/guestauth'

const forgotPassword = () => {
    return (<>
        <ForgotPassword />
    </>
    )
}

export default guestauth(forgotPassword) 