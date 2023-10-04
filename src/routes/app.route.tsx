import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { movieSections } from '@/api/Sections/sections'
import { Layout } from '@/components/Layout'
import { Movies } from '@/pages/Movies'
import { MoviesSections } from '@/components/MoviesSections'

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home sectionList={Object.values(movieSections)}/>} />
                    <Route path='movie' element={<Movies />}>
                        <Route path='popular' element={<MoviesSections sectionList={[movieSections.popular]}/>} />
                        <Route path='top_rated' element={<MoviesSections sectionList={[movieSections.top_rated]}/>} />
                        <Route path='upcoming' element={<MoviesSections sectionList={[movieSections.upcoming]}/>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}