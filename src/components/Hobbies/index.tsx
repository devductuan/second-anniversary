import Likes from './Likes';


type Props = {}

function Hobbies({ }: Props) {


    return (
        <section className="bg-monoPink-200">
            <div className="container mx-auto py-20 px-4 lg:max-w-3xl">
                <h3 className="text-3xl font-medium">Những thứ tớ <span className="text-white underline italic font-bold">thích</span> và <span className="underline italic font-bold text-white">không thích</span></h3>
                <div className="mt-20">
                    <p className="mb-20">Tớ thích...</p>
                    <div>
                        <Likes />
                    </div>
                    <div className="mt-8 italic font-cursive">
                        <p>Ngoài ra tớ còn thích:</p>
                        <ul>
                            <li>- Phê La trà vỏ cà phê</li>
                            <li>- Bánh tráng các loại</li>
                            <li>- Bông lan trứng muối + su kem </li>
                            <li>- Dâu tây</li>
                            <li>- Xoài</li>
                            <li>- Được anh đội mũ bảo hiểm + gạt chỗ để chân cho</li>
                            <li>- Thích anh đoán xem còn thứ gì tớ thích nữa ^^</li>
                        </ul>
                    </div>
                    <p className="text-right mt-20 mb-20">... nhưng tớ lại không thích ...</p>
                    <p className="text-xs text-center">{`cãi nhau ><`}</p>

                    <div className="font-cursive w-max mt-20 text-lg">
                        <p>Em là mùa xuân, anh là nắng</p>
                        <p>Mưa phùn hối hả, lạnh bàn chân</p>
                        <p>Nắng xua mùa lạnh, mong trời tạnh</p>
                        <p>Nắng ôm vào lòng cả mùa xuân</p>
                        <p className="text-right mt-4">- Nguyễn Đức Tuấn</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hobbies