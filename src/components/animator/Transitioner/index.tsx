import React, { forwardRef, useEffect, useState } from 'react'

type Props = {
    children: any
    show: boolean
    beforeTimeout: number
    afterTimeout: number
    className: string
    beforeTransitionClass: string
    afterTransitionClass: string
    style?: any
}

const Transitioner = forwardRef((({
    children,
    show,
    beforeTimeout,
    afterTimeout,
    className,
    beforeTransitionClass,
    afterTransitionClass,
    style,
}: Props, ref: any) => {
    const [visible, setVisible] = useState(false)
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        let showTimeout: any = undefined;
        if (show) {
            setDisplay(true)
            showTimeout = setTimeout(() => {
                setVisible(true)
            }, beforeTimeout)
        } else {
            setVisible(false)
            showTimeout = setTimeout(() => {
                setDisplay(false)
            }, afterTimeout)
        }


        return () => {
            if (showTimeout) {
                clearTimeout(showTimeout)
            }
        }
    }, [show])

    return display ? (
        <div
            style={style}
            ref={ref}
            className={`${className} ${visible ? afterTransitionClass : beforeTransitionClass}`}
        >
            {children}
        </div>
    ) : null
}))

export default Transitioner