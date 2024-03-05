import ImageContainer from '@/components/ImageContainer';
import ScatteredTexts from '@/components/ScatteredTexts';
import { songs } from '@/constants/songs';
import Image from 'next/image';

type Props = {
    openModal: () => void
}

function MenuBlock({ openModal }: Props) {

    const leftSongs = songs.filter(song => song.position === "left");
    const rightSongs = songs.filter(song => song.position === "right")

    return (
        <section className="py-20  mx-auto px-20  h-screen relative">
            <div className="flex items-center justify-center w-full h-full container">
                <div style={{ maxWidth: 1024 }} className="relative   flex items-center justify-center">
                    <div id="music-menu" onClick={() => { openModal() }} className="cursor-pointer active:bg-opacity-75 hover:bg-opacity-75 transition-opacity ease-in-out bg-monoPink-400 p-2 rounded-lg  flex flex-col items-center justify-center relative z-50">
                        <ImageContainer borderRadius={8} width={200} height={200}>
                            <Image width={500} height={500} src='/images/tuan-guitar.webp' alt="guitar" />
                        </ImageContainer>
                        <p style={{ maxWidth: 200 }} className="mt-2 p-2 text-center text-white">Tuyển chọn những bản tình ca cho em</p>
                    </div>


                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full song-title-sm text-xl">
                <ScatteredTexts containerId="left-scatter-container" texts={songs.map(song => ({ text: song.name, id: song.id }))} />
            </div>
        </section >
    )
}

export default MenuBlock