'use client'
import Playlist from '@/components/Playlist'
import SongPlayer from '@/components/SongPlayer'
import Transitioner from '@/components/animator/Transitioner'
import { songs } from '@/constants/songs'
import { MusicContext } from '@/contexts/MusicContext'
import React, { useContext, useEffect, useState } from 'react'
import { LuMenuSquare } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import Link from 'next/link'



type Props = {}

function MusicPage({ }: Props) {
    const { setCurrentSong, currentSong } = useContext(MusicContext)
    const [showPlaylist, setShowPlaylist] = useState(false)

    useEffect(() => {
        console.log("first song:", songs[0], setCurrentSong)
        setCurrentSong(songs[0])
    }, [])

    useEffect(() => {
        setShowPlaylist(false)
    }, [currentSong])

    return (
        <div className="music-container relative">
            <button onClick={() => { setShowPlaylist(!showPlaylist) }} className={`${showPlaylist ? "block" : "hidden"} lg:hidden absolute top-0 right-0 z-100 bg-black text-monoPink-400 rounded-tr-md rounded-br-md p-1 text-3xl hover:bg-monoPink-400 hover:text-black`}><LuMenuSquare /></button>
            <Transitioner
                show={showPlaylist}
                beforeTimeout={50}
                afterTimeout={200}
                beforeTransitionClass='trans-hide'
                afterTransitionClass='trans-show'
                className='trans-to-right playlist-container fixed overflow-y-auto '
            >
                <Playlist />
            </Transitioner>
            <main className={`music-main h-full relative ${showPlaylist ? "has-margin" : "no-margin"} `}>
                <div className="absolute top-0 z-100 bg-black flex flex-col rounded-tr-md rounded-br-md overflow-hidden">
                    <button onClick={() => { setShowPlaylist(!showPlaylist) }} className="text-monoPink-400 rounded-tr-md p-1 text-3xl hover:bg-monoPink-400 hover:text-black">
                        <LuMenuSquare />
                    </button>
                    <Link href="/" className="text-monoPink-400 rounded-br-md p-1 text-3xl hover:bg-monoPink-400 hover:text-black">
                        <FaHome />
                    </Link>
                </div>

                <SongPlayer />
            </main>
        </div>
    )
}

export default MusicPage