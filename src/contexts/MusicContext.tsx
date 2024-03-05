import { Song } from '@/constants/songs';
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

type MusicContextType = {
    currentSong: Song | null,
    setCurrentSong: Dispatch<SetStateAction<Song | null>>
}

export const MusicContext = createContext<MusicContextType>({
    currentSong: null,
    setCurrentSong: () => { }
});

export function MusicProvider({ children }: { children: ReactNode }) {
    const [currentSong, setCurrentSong] = useState<Song | null>(null);

    return (
        <MusicContext.Provider value={{ currentSong, setCurrentSong }}>
            {children}
        </MusicContext.Provider>
    );
}
