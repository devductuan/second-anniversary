"use client"
import Letter from '@/components/Letter'
import Mailbox from '@/components/Mailbox'
import Modal from '@/components/Modal'
import EntranceBlock from '@/components/blocks/EntranceBlock'
import MenuBlock from '@/components/blocks/MenuBlock'
import SpringLayout from '@/layouts/SpringLayout'
import { useState } from 'react'

type Props = {}

function MyLove({ }: Props) {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="bg-monoPink-200 relative">
            <SpringLayout>
                <EntranceBlock />
            </SpringLayout>
            <div>
                <MenuBlock openModal={() => { setShowModal(true) }} />
            </div>
            <Mailbox />

            <Modal
                show={showModal}
                setShow={setShowModal}
            >
                <Letter closeModal={() => { setShowModal(false) }} />
            </Modal>
        </div>
    )
}

export default MyLove