import Link from 'next/link'
import React from 'react'

type Props = {}

function CTA({ }: Props) {
    return (
        <section className="bg-monoPink-100">
            <div className="container mx-auto text-center lg:max-w-3xl px-4 py-20 flex flex-col items-center justify-center">
                <p>Ồ, hình như anh có món quà tặng tớ. Đi thôi!</p>
                <Link href="/my-love" className="bg-monoPink-300 hover:bg-monoPink-400 rounded-lg px-4 py-2 text-white mt-4">Con đường tình iuuu</Link>
                <p className="mt-4 text-center">Nếu tấm thẻ này có thất lạc, vui lòng liên hệ: 0326055886. Xin cám ơn!</p>
            </div>
        </section>
    )
}

export default CTA