import { MusicContext } from '@/contexts/MusicContext'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import ImageContainer from '../ImageContainer'
import Loading from '../Loading'
import AudioPlayer from './AudioPlayer'
import Link from 'next/link'

type Props = {}

function SongPlayer({ }: Props) {

    const { currentSong } = useContext(MusicContext)
    const [isImageLoading, setImageLoading] = useState(true)

    useEffect(() => {
        setImageLoading(true)
    }, [currentSong])

    if (!currentSong) return null

    const lyrics = currentSong.lyrics;

    const handleTimeUpdate = () => {
    }

    return (
        <div className=" relative h-full ">
            <div className="text-xl overflow-y-scroll text-center py-48 lyrics-container px-2">
                {currentSong.lyricsString}
            </div>
            <div className=" bottom-0 w-full">
                <div className="bg-black flex items-end gap-6 p-10 text-whites">
                    <ImageContainer className="relative" width={200} height={200} borderRadius={8}>
                        <Image
                            onLoad={() => {
                                setImageLoading(false)
                            }}
                            quality={40}
                            style={{
                                objectFit: "cover",
                                visibility: isImageLoading ? "hidden" : "visible"
                            }}
                            fill
                            src={currentSong.thumbnail}
                            alt={currentSong.id}
                            priority
                        />
                    </ImageContainer>

                    <div>
                        <h3 className="text-white font-bold text-xl lg:text-5xl mb-4">{currentSong.name}</h3>
                        <p className={`text-white italic ${currentSong.liveLink ? "mb-8" : ""}`}>"{currentSong.description}"</p>
                        {currentSong.liveLink ? <Link href={currentSong.liveLink} target='_blank'>
                            <ImageContainer className="relative" width={60} height={35} borderRadius={8}>
                                <Image quality={10} src="https://1000logos.net/wp-content/uploads/2021/04/Soundcloud-logo.png" alt="soundcloud" width={60} height={35} />
                            </ImageContainer>
                        </Link> : null}
                    </div>
                </div>
                <div className="bg-monoPink-200">
                    <AudioPlayer handleTimeUpdate={handleTimeUpdate} song={currentSong} />
                </div>
            </div>
        </div>
    )
}

export default SongPlayer