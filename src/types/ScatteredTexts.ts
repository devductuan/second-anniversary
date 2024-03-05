export type ScatteredText = {
    text: string,
    id: string
}

export type Position = {
    x: number,
    y: number
}

export type ScatteredTextAndPosition = ScatteredText & Position