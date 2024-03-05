// @ts-nocheck
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle';
import ImageContainer from '../ImageContainer';

register();

type Props = {}

function About({ }: Props) {
    const swiperElRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!swiperElRef.current) return
        // listen for Swiper events using addEventListener
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
        <section id="about">
            <div className="container mx-auto px-4 py-20 lg:max-w-3xl">
                <p className="text-center mb-8">{`"Ở trường, tớ là một học sinh chăm ngoan, học giỏi, nhưng ở nhà, tớ là cô giáo trong mắt những thiên thần đáng iu <3"`}</p>
                <swiper-container
                    ref={swiperElRef}
                    slides-per-view="auto"
                    navigation="true"
                    pagination="true"
                    space-between={60}
                >
                    <swiper-slide style={{ width: 500 }}>
                        <ImageContainer className="relative" width={500} height={500} borderRadius={8}>
                            <Image fill style={{ objectFit: "cover" }} src="/images/about2.webp" alt="about" />
                        </ImageContainer>
                    </swiper-slide>
                    <swiper-slide style={{ width: 500 }}>
                        <ImageContainer className="relative" width={500} height={500} borderRadius={8}>
                            <Image fill style={{ objectFit: "cover" }} src="/images/about1.webp" alt="about" />
                        </ImageContainer>
                    </swiper-slide>
                    <swiper-slide style={{ width: 500 }}>
                        <ImageContainer className="relative" width={500} height={500} borderRadius={8}>
                            <Image fill style={{ objectFit: "cover", }} src="/images/about3.webp" alt="about" />
                        </ImageContainer>
                    </swiper-slide>

                    <swiper-slide style={{ width: 500 }}>
                        <ImageContainer className="relative" width={500} height={500} borderRadius={8}>
                            <Image fill style={{ objectFit: "cover" }} src="/images/suesha.webp" alt="about" />
                        </ImageContainer>
                    </swiper-slide>
                    <swiper-slide style={{ width: 500 }}>
                        <ImageContainer className="relative" width={500} height={500} borderRadius={8}>
                            <Image fill style={{ objectFit: "cover" }} src="/images/xemay.webp" alt="about" />
                        </ImageContainer>
                    </swiper-slide>

                </swiper-container>
            </div>
        </section>
    )
}

export default About