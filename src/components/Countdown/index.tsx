import dayjs from 'dayjs';
import React, { useCallback, useEffect } from 'react'
import duration from 'dayjs/plugin/duration'
import ImageContainer from '../ImageContainer';
import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
dayjs.extend(duration);

type Props = {}

const month = 3;
const day = 5

function Countdown({ }: Props) {

    const getDaysUntilNextAnniversary = useCallback(() => {
        const now = dayjs();
        let anniversary = dayjs().month(month - 1).date(day);
        if (now.isAfter(anniversary)) {
            anniversary = anniversary.add(1, 'year');
        }
        const diff = anniversary.diff(now);
        console.log(dayjs.duration)
        return Math.floor(dayjs.duration(diff).asDays());
    }, [])

    return (
        <section className="bg-monoPink-300">
            <div className="relative font-cursive py-20 container mx-auto px-4 flex items-center justify-center text-white text-center flex-col gap-4">
                <p>Còn</p>
                <p className="text-4xl">{getDaysUntilNextAnniversary()}</p>
                <p className="text-center"> ngày nữa là đến ngày kỉ niệm tiếp theo rùi</p>
                <p className="text-4xl animate-ping my-4 "><FaHeart /></p>
                <p className="italic ">Mình đã cùng nhau đi qua</p>
                <p className="text-4xl">{dayjs().diff("2022-03-05", "days")}</p>
                <p className="italic">ngày hạnh phúc</p>
                <div className="absolute -top-4 right-20 animate-bounce">
                    <ImageContainer width={50} height={50} borderRadius={50} className="relative">
                        <Image src="/images/Y23.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={10} />
                    </ImageContainer>
                </div>
                <div className="absolute -bottom-4 right-10  animate-bounce">
                    <ImageContainer width={50} height={50} borderRadius={50} className="relative">
                        <Image src="/images/Y21.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={10} />
                    </ImageContainer>
                </div>
                <div className="absolute top-10 left-16  animate-bounce">
                    <ImageContainer width={50} height={50} borderRadius={50} className="relative">
                        <Image src="/images/Y22.webp" alt="y23" fill style={{ objectFit: "cover" }} quality={10} />
                    </ImageContainer>
                </div>
            </div>
        </section>
    )
}

export default Countdown