import React from 'react'

type Props = {
    animationClass: string
}

function Heart({
    animationClass
}: Props) {
    return (
        <div className={`heart ${animationClass}`}></div>
    )
}

export default Heart