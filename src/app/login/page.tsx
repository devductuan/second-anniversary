"use client"

import LoginForm from '@/components/LoginForm'

type Props = {}

function LoginPage({ }: Props) {

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <p>Hơi tò mò đó nha ^^. Đánh mật khẩu xem, đúng thì tui cho vào xem :)</p>
            <div className="mt-8">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage