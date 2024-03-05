import { useState } from 'react'
import { SIGNATURE } from '@/constants/general'
import { useRouter } from 'next/navigation'
import Transitioner from '../animator/Transitioner'

type Props = {}

function LoginForm({ }: Props) {
    const [password, setPassword] = useState<string>("")
    const [showHint, setShowHint] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const router = useRouter()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log("password", password)
        if (password === "05032022") {
            document.cookie = `signature=${SIGNATURE}`
            router.push(`/`)
        } else {
            setErrorMessage("Sai mật khẩu")
        }
    }
    return (
        <form className="flex flex-col" action="/my-love" onSubmit={handleSubmit}>
            <div className="flex items-center mb-4 gap-2 w-full">
                <Transitioner
                    show={showHint}
                    beforeTimeout={0}
                    afterTimeout={300}
                    beforeTransitionClass='hide'
                    afterTransitionClass='show'
                    className="trans-width px-2 py-1 whitespace-nowrap italic rounded-lg text-sm"
                >
                    <p className="">{`Ngày anh tỏ tình em <3`}</p>
                </Transitioner>
                <button onClick={e => { setShowHint(!showHint) }} className="bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium px-2 py-1">
                    {showHint ? "Ẩn" : "Xem"} gợi ý
                </button>
            </div>
            <input
                required
                placeholder="Mật khẩu"
                type="password"
                className="outline-0 border p-2 rounded-lg w-72"
                value={password}
                onChange={e => { setPassword(e.target.value) }}
            />
            <button
                className="bg-blue-500 rounded-lg text-white font-medium py-2 mt-4"
                type="submit"
            >
                Đăng nhập
            </button>
            {errorMessage ? <p className="text-xs text-center mt-2 text-red-500">{errorMessage}</p> : null}
        </form>
    )
}

export default LoginForm