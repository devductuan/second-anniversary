import React, { Dispatch, MouseEvent, ReactNode, SetStateAction } from 'react'
import Transitioner from '../animator/Transitioner'

type Props = {
    children: ReactNode,
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

function Modal({ children, show, setShow }: Props) {
    const handleBackgroundClick = (e: MouseEvent) => {
        e.stopPropagation();
        setShow(false)
    }

    return (
        <Transitioner
            show={show}
            beforeTimeout={0}
            afterTimeout={200}
            beforeTransitionClass='trans-hide'
            afterTransitionClass='trans-show'
            className='trans-scale-center  fixed z-100 top-0   w-full h-full'
        >
            <div onClick={handleBackgroundClick} className="modal-background w-full h-full flex items-center justify-center">
                <div className='modal-container' onClick={e => { e.stopPropagation() }}>
                    {children}
                </div>
            </div>
        </Transitioner>
    )
}

export default Modal