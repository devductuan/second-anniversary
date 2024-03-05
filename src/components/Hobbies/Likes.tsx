// @ts-nocheck

import React, { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle';
import ImageContainer from '../ImageContainer';
import Image from 'next/image';
register()

type Props = {}

function Likes({ }: Props) {
    const swiperElRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        if (!swiperElRef.current) return
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            // @ts-ignore
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            console.log('slide changed');
        });
    }, [swiperElRef]);

    return (
        <div>
            <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
                navigation="true"
                // pagination="true"
                space-between={60}
            >
                {/* @ts-ignore */}
                <swiper-slide style={{ width: 400, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                    <ImageContainer height={300} width={300} borderRadius={10} className="relative">
                        <Image src="/images/sunset-2.webp" alt="sunset" fill style={{ objectFit: "cover" }} quality={40} />
                    </ImageContainer>
                    <p className="font-serif mt-2 text-center text-xl">Ngắm hoàng hôn cùng anh</p>
                    {/* @ts-ignore */}
                </swiper-slide>
                {/* @ts-ignore */}
                <swiper-slide style={{ width: 400, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                    <ImageContainer height={300} width={300} borderRadius={10} className="relative">
                        <Image src="/images/luon.webp" alt="luon" fill style={{ objectFit: "cover" }} quality={40} />
                    </ImageContainer>
                    <p className="font-serif mt-2 text-center text-xl">Lượn phố khi trời mát</p>
                    {/* @ts-ignore */}
                </swiper-slide>
                {/* @ts-ignore */}
                <swiper-slide style={{ width: 400, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                    <ImageContainer height={300} width={300} borderRadius={10} className="relative">
                        <Image src="/images/flower.webp" alt="flowers" fill style={{ objectFit: "cover" }} quality={40} />
                    </ImageContainer>
                    <p className="font-serif mt-2 text-center text-xl">Dù em là bông hoa đẹp nhất nhưng em vẫn thích được tặng hoa</p>
                    {/* @ts-ignore */}
                </swiper-slide>
                {/* @ts-ignore */}
                <swiper-slide style={{ width: 400, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                    <ImageContainer height={300} width={300} borderRadius={10} className="relative">
                        <Image src="/images/cook.webp" alt="cook" fill style={{ objectFit: "cover" }} quality={40} />
                    </ImageContainer>
                    <p className="font-serif mt-2 text-center text-xl">Nấu cơm cho anh, và anh ăn hết sạch sành sanh :3</p>
                    {/* @ts-ignore */}
                </swiper-slide>
                {/* @ts-ignore */}
                <swiper-slide style={{ width: 400, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                    <ImageContainer height={300} width={300} borderRadius={10} className="relative">
                        <Image src="/images/dulich.webp" alt="dulich" fill style={{ objectFit: "cover" }} quality={40} />
                    </ImageContainer>
                    <p className="font-serif mt-2 text-center text-xl">{`Du hý cùng anh í`}</p>
                    {/* @ts-ignore */}
                </swiper-slide>
                {/* @ts-ignore */}
                <swiper-slide style={{ width: 400, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                    <ImageContainer height={300} width={300} borderRadius={10} className="relative">
                        <Image src="/images/kiss.webp" alt="kiss" fill style={{ objectFit: "cover" }} quality={40} />
                    </ImageContainer>
                    <p className="font-serif mt-2 text-center text-xl">{`được iu thưn thế này nè <3`}</p>
                    {/* @ts-ignore */}
                </swiper-slide>

                {/* @ts-ignore */}
                <swiper-slide style={{ width: 400, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                    <ImageContainer height={300} width={300} borderRadius={10} className="relative">
                        <Image src="/images/hold.webp" alt="hold" fill style={{ objectFit: "cover" }} quality={40} />
                    </ImageContainer>
                    <p className="font-serif mt-2 text-center text-xl">{`... còn anh thì muốn nắm tay em đi khắp thế gian...`}</p>
                    {/* @ts-ignore */}
                </swiper-slide>
                {/* @ts-ignore */}
            </swiper-container>
        </div>
    )
}

export default Likes