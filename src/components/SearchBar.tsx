import React from 'react'
import Search from '@/assets/Search.svg'

type Props = {
    searchInput: string | null
    setSearchInput: (inputText: string) => void
}

export function SearchBar({ searchInput, setSearchInput}: Props) {
    return (
        <div className="max-w-[30rem] flex gap-4 mx-4 md:mx-auto mt-16 px-10 py-5 bg-dark-contrast-dark rounded-md shadow-lg hover:shadow-gray-700/50 focus-within:shadow-gray-700/50 transition ease-in-out delay-150">
            <input type="text" className="w-full h-8 bg-dark-contrast-dark focus:outline-none" placeholder="Pesquise filmes e séries por genero, nome..." value={searchInput ? searchInput : ''} onChange={(e: React.FormEvent<HTMLInputElement>) => setSearchInput(e.currentTarget.value)}/>
            <button className='hover:scale-125'>
                <img src={Search} alt="search icon" className='w-8 h-8' />
            </button>
        </div>
    )
}