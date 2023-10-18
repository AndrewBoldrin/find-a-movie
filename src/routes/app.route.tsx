import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { movieSections, seriesSections } from '@/api/Sections/sections'
import { Layout } from '@/components/core/Layout'
import { Movies } from '@/pages/Movies'
import { MovieSections } from '@/components/sections/MovieSections'
import { SerieSections } from '@/components/sections/SerieSections'
import { Series } from '@/pages/Series'

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home sectionList={Object.values(movieSections)}/>} />
                    <Route path='movie' element={<Movies />}>
                        <Route index element={<MovieSections sectionList={Object.values(movieSections)}/>} />
                        <Route path='popular' element={<MovieSections sectionList={[movieSections.popular]}/>} />
                        <Route path='top_rated' element={<MovieSections sectionList={[movieSections.top_rated]}/>} />
                        <Route path='upcoming' element={<MovieSections sectionList={[movieSections.upcoming]}/>} />
                    </Route>
                    <Route path='tv' element={<Series />}>
                        <Route index element={<SerieSections sectionList={Object.values(seriesSections)}/>} />
                        <Route path='airing_today' element={<SerieSections sectionList={[seriesSections.airing_today]}/>} />
                        <Route path='on_the_air' element={<SerieSections sectionList={[seriesSections.on_the_air]}/>} />
                        <Route path='popular' element={<SerieSections sectionList={[seriesSections.popular]}/>} />
                        <Route path='top_rated' element={<SerieSections sectionList={[seriesSections.top_rated]}/>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}