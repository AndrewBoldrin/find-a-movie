import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/core/Layout'
import { Movies } from '@/pages/Movies'
import { MovieSections } from '@/components/sections/MovieSections'
import { SerieSections } from '@/components/sections/SerieSections'
import { Series } from '@/pages/Series'
import { SerieSection } from '@/components/section/SerieSection'
import { SectionType, seriesSections } from '@/api/Sections/seriesSections'
import { movieSections } from '@/api/Sections/moviesSections'
import { MovieSection } from '@/components/section/MovieSection'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/movie" />} />
          <Route path="movie" element={<Movies />}>
            <Route
              index
              element={
                <MovieSections sectionList={Object.values(movieSections)} />
              }
            />
            {Object.values(movieSections).map((section) => {
              return (
                <Route
                  key={section.name}
                  path={section.path}
                  element={<MovieSection section={section} hasPagination />}
                />
              )
            })}
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
