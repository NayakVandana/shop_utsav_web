import React from 'react'
import { useLegalStore } from '../../LegalPolicy/LegalStore'
import Modal from '@/ui/common/Modal/Modal'

function TermsOfUseModal() {
    const data = useLegalStore((state: any) => state.legal)
    return (
        <Modal id="terms_of_use_modal" title="Terms Of Use" className={' w-11/12 max-w-5xl'} >
            <div className="bg-base-100 " dangerouslySetInnerHTML={{ __html: data }} />
        </Modal>
    )
}

export default TermsOfUseModal
