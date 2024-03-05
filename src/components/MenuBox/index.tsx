import { LOVE, MenuBox } from '@/constants/menus'
import React, { useCallback } from 'react'
import HeartGroup from '../shapes/HeartGroup'
import Link from 'next/link'

type Props = {
    box: MenuBox
}

function MenuBox({ box }: Props) {
    const getSurroundingItems = useCallback((type: string) => {
        if (type === LOVE) {
            return <HeartGroup />
        }
        return null
    }, [box])

    return (
        <Link href={box.link}>
            <div className={`menu-box relative menu-${box.type}`}>
                <p className="text-center font-medium">{box.title}</p>
                <div className="appear-on-hover">
                    {getSurroundingItems(box.type)}
                </div>
            </div>
        </Link>
    )
}

export default MenuBox