import React from 'react'
import ImageContainer from '../ImageContainer'
import Image from 'next/image'
import HeartBoom from '../shapes/HeartBoom'
import Link from 'next/link'

type Props = {
    closeModal: () => void
}

function Letter({ closeModal }: Props) {
    return (
        <div className="letter-container relative">
            <button onClick={closeModal} className="absolute top-0 right-0 z-20 bg-white rounded-tr-md rounded-bl-md hover:bg-monoPink-400 hover:text-white text-xs p-2 shadow-md font-medium italic hover:underline">Đóng</button>
            <div className="anni-letter lg:w-1/2 bg-white p-4 rounded-lg">
                <h3 className="text-3xl font-serif italic mb-4">Lời mở đầu</h3>
                <p className="text-sm">
                    Xin chào em iu!
                </p>
                <p>
                    Chúc mừng ngày kỉ niệm lần thứ 2 của chúng mình! Cám ơn em vì 2 năm qua đã luôn ở bên anh, ủng hộ anh, và mang lại cho anh những ngày tháng vui vẻ, hạnh phúc. Cám ơn những phút giây nồng thắm ở bên nhau. Cám ơn cả những lúc mình lục đục, giận hờn, để sau đó hai đứa hiểu nhau nhiều hơn. Những ngày tháng được yêu em đã cho anh vô vàn cảm hứng để sáng tác ra chiếc album (chưa chính thức) này.
                </p>
                <p>Album "Tuyển chọn những bản tình ca cho em" là album anh muốn dành tặng em. Đó là bộ sưu tập tất cả những bài hát anh đã viết và ấp ủ từ khi mới quen em.  Anh muốn album này như một sự tóm tắt về quá trình 2 năm mình yêu nhau, có thăng, có trầm. Vì vậy, trong những bài hát này, có những bài hát vui tươi, đồng thời xen lẫn những bài hát mang màu buồn anh đã viết lúc chúng mình giận nhau.</p>
                <p>Được trải qua những vui buồn cùng em là điều hạnh phúc nhất trên đời. Vậy nên hãy tận hưởng từng bài hát trong album này em nhé!</p>
                <p>Anh yêu em rất nhiều!</p>
                <p className="font-cursive text-2xl mt-4">- Mặp</p>
            </div>
            <div className="lg:w-1/2 h-full flex flex-col justify-center items-center gap-4 relative">
                <div className="relative">
                    <ImageContainer borderRadius={8} width={400} height={300} >
                        <Image src="/images/sunset.webp" alt="sunset" width={500} height={500} />
                    </ImageContainer>
                    <HeartBoom />
                </div>
                <div className="relative">
                    <Link href="/my-love/music" className="bg-monoPink-400 text-white rounded-lg px-4 py-2 w-max hover:bg-opacity-75">Vk muốn nghe nhạc!</Link>
                </div>
                <ImageContainer className="hidden lg:block animate-bounce absolute -top-10" borderRadius={50} width={50} height={50} >
                    <Image src="/images/funny.webp" alt="funny" width={50} height={50} />
                </ImageContainer>
                <ImageContainer className="hidden lg:block animate-bounce absolute -top-20 left-0" borderRadius={50} width={50} height={50} >
                    <Image src="/images/funny.webp" alt="funny2" width={50} height={50} />
                </ImageContainer>
                <ImageContainer className="hidden lg:block animate-bounce absolute -top-16 right-0" borderRadius={50} width={50} height={50} >
                    <Image src="/images/funny.webp" alt="funny3" width={50} height={50} />
                </ImageContainer>
                <ImageContainer className="hidden lg:block animate-bounce absolute top-72 right-0" borderRadius={50} width={50} height={50} >
                    <Image src="/images/funny.webp" alt="funny4" width={50} height={50} />
                </ImageContainer>
                <ImageContainer className="hidden lg:block animate-bounce absolute top-96 " borderRadius={50} width={50} height={50} >
                    <Image src="/images/funny.webp" alt="funny5" width={50} height={50} />
                </ImageContainer>
                <ImageContainer className="hidden lg:block animate-bounce absolute top-64 left-0" borderRadius={50} width={50} height={50} >
                    <Image src="/images/funny.webp" alt="funny6" width={50} height={50} />
                </ImageContainer>
            </div>
        </div>
    )
}

export default Letter