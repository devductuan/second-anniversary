import { mails } from '@/constants/mails';
import React, { useCallback, useState } from 'react'
import { IoIosMail } from "react-icons/io";
import { IoIosMailOpen } from "react-icons/io";
import Transitioner from '../animator/Transitioner';


type Props = {}

function Mailbox({ }: Props) {

    const [isOpenMail, setIsOpenMail] = useState(false)
    const [mailIndex, setMailIndex] = useState(0)

    const openMail = () => {
        setIsOpenMail(true)
        setMailIndex(getRandomNumber())
    }

    const closeMail = () => {
        setIsOpenMail(false)
    }

    const getRandomNumber = useCallback(() => {
        return Math.floor(Math.random() * (mails.length - 1));
    }, [isOpenMail])

    return (
        <div className="h-screen bg-monoPink-100">
            <div className="container mx-auto py-20 flex flex-col items-center">
                <h2 className="text-3xl lg:text-5xl font-bold italic text-monoPink-400 uppercase text-center">Hòm thư</h2>

                <div className="mt-40">
                    <Transitioner
                        show={isOpenMail}
                        beforeTimeout={0}
                        afterTimeout={200}
                        beforeTransitionClass='trans-hide'
                        afterTransitionClass='trans-show'
                        className='trans-max-height'
                    >
                        <div className="max-w-xs text-center whitespace-pre bg-white border-4 rounded-lg p-4 border-monoPink-400">
                            {mails[mailIndex].content}
                        </div>
                    </Transitioner>
                    <div className="flex items-center justify-center pt-10">
                        <div>
                            {isOpenMail ? <button onClick={closeMail} className="text-7xl">
                                <IoIosMailOpen />
                            </button> :
                                <button onClick={openMail} className="text-7xl relative">
                                    <div className="h-3 w-3 rounded-full bg-blue-500 absolute top-2.5 animate-ping right-0" />
                                    <IoIosMail />
                                </button>
                            }
                            {!isOpenMail ? <p>Open me!</p> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mailbox