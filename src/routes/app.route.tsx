import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Content } from '@/components/Content'
import { movieSections } from '@/api/Sections/sections'

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<Content sectionList={Object.values(movieSections)} />}></Route>
                    <Route path='movie'>
                        <Route path='popular' element={<Content sectionList={[movieSections.popular]}/>}></Route>
                        <Route path='top_rated' element={<Content sectionList={[movieSections.top_rated]}/>}></Route>
                        <Route path='upcoming' element={<Content sectionList={[movieSections.upcoming]}/>}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}