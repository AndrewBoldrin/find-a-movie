import { TopBar } from '@/components/TopBar'
import { Outlet } from 'react-router-dom'

export function Home() {
    return (
        <>
            <TopBar />
            <Outlet />
        </>
    )
}
