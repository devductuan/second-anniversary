import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    borderRadius: number,
    width: number,
    height: number,
    className?: string
}

function ImageContainer({ children, borderRadius, width, height, className = "" }: Props) {
    return (
        <div
            className={`overflow-hidden  ${className}`}
            style={{
                borderRadius: borderRadius,
                width: width,
                height: height,
                flexShrink: 0
            }}
        >{children}</div>
    )
}

export default ImageContainer