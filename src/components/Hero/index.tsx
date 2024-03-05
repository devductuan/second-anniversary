import Image from 'next/image'
import React from 'react'
import ImageContainer from '../ImageContainer'
import HeartBoom from '../shapes/HeartBoom'
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from 'next/link';

type Props = {}

function Hero({ }: Props) {
    return (
        <section className="bg-white">
            <div className="bg-monoPink-100 bg-opacity-50">
                <div className="container mx-auto py-20 px-4">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-xl lg:text-5xl font-bold text-center mb-4 lg:mb-10">Xin chào các cậu! Tớ là <span className="text-monoPink-300">Thu Huệ</span> :3</h1>
                        <div className="relative" >
                            <ImageContainer width={300} height={300} borderRadius={10}>
                                <Image src="/images/hero.webp" alt="hero" width={300} height={300} />
                            </ImageContainer>
                            <HeartBoom />
                        </div>

                        <p className="text-lg text-center mt-4">Tớ là người iu của anh <span className="text-blue-500 font-bold">Nguyễn Đức Tuấn</span></p>
                        <p className="text-lg text-center">(Mặp iu)</p>
                        <p className="italic mt-8">Hãy kéo xuống để biết thêm về tớ nào ^^</p>
                        <Link href="#about" className="mt-4 text-3xl">
                            <AiOutlineArrowDown />
                        </Link>
                    </div>
                </div>
            </div >
        </section>
    )
}

export default Hero