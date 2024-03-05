import ImageContainer from '@/components/ImageContainer'
import ParticlesGroup from '@/components/animator/ParticlesGroup'
import Transitioner from '@/components/animator/Transitioner'
import Typewriter from '@/components/animator/Typewriter'
import Image from 'next/image'
import React, { Fragment, Suspense, useEffect, useState } from 'react'

type Props = {}

function EntranceBlock({ }: Props) {
    const [tab, setTab] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setTab(1)
        }, 4000)
    }, [])

    return (
        <div className="h-screen bg-monoPink-100 relative">

            <div className={`absolute z-10 text-center flex items-center flex-col justify-center h-screen left-0 right-0 transition-all duration-200 ease-in-out ${tab === 0 ? "visible opacity-100" : "xl:invisible xl:opacity-0"}`}>
                <h1 className="love-heading-1"><Typewriter text="Happy Anniversary!" typingSpeed={70} /></h1>
                <p className="love-subheading mt-4"><Typewriter text="Em bé Thu Huệ của anh ❤️" typingSpeed={70} /></p>
            </div>

            <div className={`absolute xl:block hidden w-full h-full transition-all duration-500 ease-in-out z-10 ${tab === 1 ? "visible opacity-100" : "invisible opacity-0"}`}>
                <div className="love-img-card-1 ">
                    <ImageContainer width={300} height={400} borderRadius={10} className="relative">
                        <Image src="/images/Y23.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
                <div className="love-img-card-2 ">
                    <ImageContainer width={300} height={400} borderRadius={10} className="relative">
                        <Image src="/images/Y21.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
                <div className="love-img-card-3 ">
                    <ImageContainer width={300} height={400} borderRadius={10} className="relative">
                        <Image src="/images/Y22.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
                <div className="love-img-card-4 ">
                    <ImageContainer width={300} height={200} borderRadius={10} className="relative">
                        <Image src="/images/sunset.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
                <div className="love-img-card-5 ">
                    <ImageContainer width={500} height={300} borderRadius={10} className="relative">
                        <Image src="/images/mailanguoianhyeu.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
                <div className="love-img-card-6 ">
                    <ImageContainer width={300} height={200} borderRadius={10} className="relative">
                        <Image src="/images/kiss.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
            </div>

            <div className={`absolute xl:hidden  block w-full h-full transition-all duration-500 ease-in-out z-10 ${tab === 1 ? "visible opacity-100" : "invisible opacity-0"}`}>
                <div className="love-img-card-1 ">
                    <ImageContainer width={150} height={200} borderRadius={10} className="relative">
                        <Image src="/images/Y23.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
                <div className="love-img-card-2 ">
                    <ImageContainer width={150} height={200} borderRadius={10} className="relative">
                        <Image src="/images/Y21.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
                <div className="love-img-card-3 ">
                    <ImageContainer width={150} height={200} borderRadius={10} className="relative">
                        <Image src="/images/Y22.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
                <div className="love-img-card-4 ">
                    <ImageContainer width={150} height={100} borderRadius={10} className="relative">
                        <Image src="/images/sunset.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
                <div className="love-img-card-5 ">
                    <ImageContainer width={250} height={150} borderRadius={10} className="relative">
                        <Image src="/images/mailanguoianhyeu.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
                <div className="love-img-card-6 ">
                    <ImageContainer width={150} height={100} borderRadius={10} className="relative">
                        <Image src="/images/kiss.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={50} />
                    </ImageContainer>
                </div>
            </div>

            <Suspense fallback={<p>Loading</p>}>
                <ParticlesGroup />
            </Suspense>
        </div>
    )
}

export default EntranceBlock