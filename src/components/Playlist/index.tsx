import { songs } from '@/constants/songs'
import Image from 'next/image'
import React, { useContext } from 'react'
import ImageContainer from '../ImageContainer'
import { MusicContext } from '@/contexts/MusicContext'

type Props = {}

function Playlist({ }: Props) {
    const { setCurrentSong, currentSong } = useContext(MusicContext)

    return (
        <div className="">
            <div className="text-white">
                <div className="p-4 sticky top-0 bg-black z-100">
                    <h2 className='font-cursive text-xl '>Tuyển chọn những bản tình ca cho em</h2>
                    <p className='text-sm mt-2'>Sáng tác: Nguyễn Đức Tuấn - người iu embe Thu Huệ</p>
                </div>
                <ul className="">
                    {songs.map((song, index) => <li
                        key={index}
                        onClick={() => { setCurrentSong(song) }}
                        className={`${index % 2 === 0 ? 'bg-opacity-10' : 'bg-opacity-20'}  px-2 py-4 flex items-center gap-4 hover:bg-monoPink-400 cursor-pointer bg-white`}
                        style={{
                            backgroundColor: currentSong?.id === song.id ? "#FF6680" : ""
                        }}
                    >
                        <span>{index + 1}.</span>
                        <div className="flex items-center gap-2">
                            <ImageContainer className="relative" width={50} height={50} borderRadius={8}>
                                <Image quality={10} style={{ objectFit: "cover" }} fill src={song.thumbnail} alt={song.id} />
                            </ImageContainer>
                            <span className="font-medium">{song.name}</span>
                        </div>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Playlist