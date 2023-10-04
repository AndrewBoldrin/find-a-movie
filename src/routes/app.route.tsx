import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { movieSections } from '@/api/Sections/sections'
import { Layout } from '@/components/Layout'

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home sectionList={Object.values(movieSections)}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}