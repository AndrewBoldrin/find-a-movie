import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { movieSections } from '@/api/Sections/sections'
import { Layout } from '@/components/core/Layout'
import { Movies } from '@/pages/Movies'
import { MovieSections } from '@/components/sections/MovieSections'
import { SerieSections } from '@/components/sections/SerieSections'
import { Series } from '@/pages/Series'
import { SerieSection } from '@/components/section/SerieSection'
import { SectionType, seriesSections } from '@/api/Sections/seriesSections'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home sectionList={Object.values(movieSections)} />}
          />
          <Route path="movie" element={<Movies />}>
            <Route
              index
              element={
                <MovieSections sectionList={Object.values(movieSections)} />
              }
            />
            <Route
              path="popular"
              element={<MovieSections sectionList={[movieSections.popular]} />}
            />
            <Route
              path="top_rated"
              element={
                <MovieSections sectionList={[movieSections.top_rated]} />
              }
            />
            <Route
              path="upcoming"
              element={<MovieSections sectionList={[movieSections.upcoming]} />}
            />
          </Route>
          <Route path="tv" element={<Series />}>
            <Route
              index
              element={
                <SerieSections sectionList={Object.values(seriesSections)} />
              }
            />
            {Object.values(seriesSections).map((section: SectionType) => {
              return (
                <Route
                  key={section.name}
                  path={section.path}
                  element={<SerieSection section={section} hasPagination />}
                />
              )
            })}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
