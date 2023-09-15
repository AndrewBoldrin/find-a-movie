import { MovieCard } from '@/components/MovieCard'
import { SearchBar } from '@/components/SearchBar'
import { TopBar } from '@/components/TopBar'



export function Home() {
    return (
        <>
            <TopBar />
            <SearchBar />

            <div className='w-[1170px] m-auto mt-16'>
                <MovieCard />
            </div> 

        </>
    )
}
