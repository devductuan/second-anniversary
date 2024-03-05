import { Song, songs } from '@/constants/songs'
import { MusicContext } from '@/contexts/MusicContext'
import React, { SyntheticEvent, useContext, useEffect, useRef } from 'react'

type Props = {
    song: Song,
    handleTimeUpdate: (p?: any) => void
}

function AudioPlayer({ song, handleTimeUpdate }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const { currentSong, setCurrentSong } = useContext(MusicContext)

    useEffect(() => {
        if (audioRef?.current) {
            audioRef.current.play()
        }
    }, [audioRef, currentSong])

    if (!currentSong) return null

    return (
        <div className="w-full flex items-center justify-center">
            <audio
                ref={audioRef}
                onEnded={() => {
                    if (currentSong.order + 1 >= songs.length) return
                    setCurrentSong(songs[currentSong.order + 1])
                }}
                onDurationChange={(e) => {
                    // @ts-ignore
                    const changedDuration = e.target.duration;
                    console.log('changedDuration', changedDuration);
                    if (changedDuration !== Infinity) {
                        // @ts-ignore
                        e.target.currentTime = 0;
                    }
                }}
                onTimeUpdate={handleTimeUpdate}
                style={{
                    borderRadius: 0
                }} src={song.songUrl} controls />
        </div>
    )
}

export default AudioPlayer