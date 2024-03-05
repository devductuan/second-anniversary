import React from 'react'

type Props = {}

function Loading({ }: Props) {
    return (
        <div
            className="text-white text-center bg-white bg-opacity-10 animate-pulse"
            style={{
                width: 200,
                height: 200,
            }}
        >

        </div>
    )
}

export default Loading