import React from 'react'
import { useLegalStore } from '../../LegalPolicy/LegalStore'
import Modal from '@/ui/common/Modal/Modal'

function AuthorizedLegalPolicy() {
    const data = useLegalStore((state: any) => state.legal)
    return (
        <Modal id="authoried_disclaimer_modal" title="Authorization Agreement for Legal Notice Services" className={' w-11/12 max-w-5xl'} >
            <div className="bg-base-100" dangerouslySetInnerHTML={{ __html: data }} />
        </Modal>
    )
}

export default AuthorizedLegalPolicy
