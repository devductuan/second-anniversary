
type Props = {
    children: any
}

function NormalLayout({ children }: Props) {
    return (
        <div>
            {children}
        </div>
    )
}

export default NormalLayout