import { time } from 'console';
import React, { useState, useEffect, useMemo } from 'react';

type Props = {
    text: string,
    typingSpeed?: number
}

type DisplayedChar = {
    char: string,
    opacity: number
}

const Typewriter = ({ text, typingSpeed = 150 }: Props) => {
    const characters = useMemo(() => text.split('').map(char => ({
        char: char,
        opacity: 0.5
    })), [text])
    const [displayedChars, setDisplayedChars] = useState<DisplayedChar[]>(characters)

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            let updatedChars = displayedChars;
            updatedChars[index].opacity = 1;
            setDisplayedChars([...updatedChars])
            index++;
            if (index === text.length) clearInterval(intervalId);
        }, typingSpeed); // Adjust the typing speed here

        return () => clearInterval(intervalId);
    }, [text]);

    return <span>
        {displayedChars.map((character, index: number) => <span
            key={index}
            style={{ opacity: character.opacity }}
        >
            {character.char}
        </span>)}
    </span>
};

export default Typewriter;
