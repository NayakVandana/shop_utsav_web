import ForgotPasswordConfirm from '@/ui/guest/ForgotPassword/ForgotConfirm'
import guestauth from '@/utils/guestauth'

const forgotPasswordConfirm = () => {
    return (<>
        <ForgotPasswordConfirm />
    </>
    )
}

export default guestauth(forgotPasswordConfirm) 