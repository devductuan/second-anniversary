import { Position, ScatteredText, ScatteredTextAndPosition } from '@/types/ScatteredTexts';
import React, { useEffect, useState } from 'react'



export const getRandomPosition = (maxX: number, maxY: number, offset: number, store: ScatteredTextAndPosition[]): Position => {
    const randomX = Math.floor(Math.random() * (maxX - offset))
    const randomY = Math.floor(Math.random() * maxY - offset)
    const paddingToAvoidX = 20;
    const paddingToAvoidY = 20;

    const existingX = store.find(item => Math.abs(item.x - randomX) <= paddingToAvoidX);
    const existingY = store.find(item => Math.abs(item.y - randomY) <= paddingToAvoidY);

    if (existingX || existingY) {
        return getRandomPosition(maxX, maxY, offset, store);
    }

    return {
        x: randomX,
        y: randomY
    }
}

function useScatteredTexts(texts: ScatteredTextAndPosition[]): ScatteredTextAndPosition[] {
    const [scatteredTextsWithPosition, setScatteredTextsWithPosition] = useState<ScatteredTextAndPosition[]>(texts)

    useEffect(() => {
        const generateScatters = () => {
            const container = document.getElementById("left-scatter-container")
            if (!container) return
            let scatterredTextsStore: ScatteredTextAndPosition[] = [];

            texts.forEach(item => {
                const scatteredContainer = container;
                const containerRect = scatteredContainer.getBoundingClientRect()
                const offset = 0;
                const position = getRandomPosition(containerRect.width, containerRect.height, offset, scatterredTextsStore)
                scatterredTextsStore.push({
                    ...item,
                    x: position.x,
                    y: position.y,
                })
            })

            setScatteredTextsWithPosition(scatterredTextsStore)
        }

        const interval = setInterval(generateScatters, 5000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return scatteredTextsWithPosition
}

export default useScatteredTexts