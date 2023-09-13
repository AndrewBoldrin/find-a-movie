import React, { useEffect, useState } from 'react'

export function useToggleMenu() {
    const [isOpen, setIsOpen] = useState(false)

    function closeMenu(e: MouseEvent) {
        e.stopPropagation()
        setIsOpen(false)
    }

    function toggleMenu(e: React.MouseEvent<HTMLElement>) {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const closeMenuOnClick = (e: MouseEvent) => {
            if(isOpen) {
                closeMenu(e)
            }
        }
        if(isOpen)
            document.addEventListener('click', closeMenuOnClick)
        else
            document.removeEventListener('click', closeMenuOnClick)

        return () => {
            document.removeEventListener('click', closeMenuOnClick)
        }
    }, [isOpen])

    return {
        isOpen, toggleMenu
    }
}