import useScatteredTexts from '@/hooks/useScatteredTexts'
import React, { useCallback, useEffect, useRef, useState } from 'react'

type ScatteredText = {
    text: string,
    id: string
}

type Props = {
    texts: ScatteredText[],
    containerId: string
}

function ScatteredTexts({ texts, containerId }: Props) {
    const scatteredTexts = useScatteredTexts(texts.map((item, index) => ({
        ...item,
        x: 20,
        y: 50 + (50 * index)
    })))

    useEffect(() => {
        console.log("scatteredTexts changed", scatteredTexts)
    }, [scatteredTexts])

    return (
        <div id={containerId} className="relative w-full h-full overflow-hidden">
            {scatteredTexts.map((item) => <p key={item.id}
                className="animate-pulse"
                style={{
                    position: "absolute",
                    left: item.x,
                    top: item.y,
                    whiteSpace: "nowrap"
                }}>{item.text}</p>)}
        </div>
    )
}

export default ScatteredTexts