import { useContext, useEffect } from 'react'
import LogoSvg from '@/assets/Logo.svg'
import Hamburguer from '@/assets/Hamburguer.svg'
import UserCircle from '@/assets/UserCircle.svg'

import { UserContext, UserContextType } from '@/contexts/UserContextProvider'
import { useGoogleAuthentication } from '@/hooks/useGoogleAuthentication'
import { useToggleMenu } from '../hooks/useToggleMenu'

export function TopBar() {
    const { isOpen: isMenuNavOpen, toggleMenu: toggleMenuNav } = useToggleMenu()
    const { isOpen: isMenuOpen, toggleMenu: toggleMenu } = useToggleMenu()
    const { isLogged, username, photo, setIsLogged, setUsername, setPhoto } = useContext(UserContext) as UserContextType
    const { auth, login, logout } = useGoogleAuthentication()

    async function onLogin() {
        const data = await login()
        setUsername(data.user.displayName)
        setPhoto(data.user.photoURL)
        setIsLogged(true)
    }

    function onLogout() {
        logout()
        setIsLogged(false)
        setUsername(null)
        setPhoto(null)
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setIsLogged(true)
                setUsername(user.displayName)
                setPhoto(user.photoURL)
            }
            else setIsLogged(false)
        })
    })

    return (
        <div className="relative w-full h-[5rem] bg-dark-primary border-2 border-dark-secondary">
            <div className='w-full md:max-w-[73rem] h-full flex justify-between items-center px-8 md:px-0 md:m-auto'>
                <div className='relative z-10'>
                    <button className='w-8 h-8' onClick={toggleMenuNav}>
                        <img src={Hamburguer} alt="toggle menu" className='w-8 h-8 md:hidden'/>
                    </button>
                    {isMenuNavOpen &&
                        <div className='absolute left-0 bg-dark-contrast-dark rounded-sm animate-[open_.5s_ease-in-out_1]'>
                            <ul className='flex flex-col'>
                                <li className='w-full text-center px-6 py-3 text-zinc-300 active:bg-dark-contrast-light active:text-red-secondary'>Filmes</li>
                                <li className='w-full text-center px-6 py-3 text-zinc-300 active:bg-dark-contrast-light active:text-red-secondary'>Series</li>
                                <li className='w-full text-center px-6 py-3 text-zinc-300 active:bg-dark-contrast-light active:text-red-secondary'>Favorites</li>
                            </ul>
                        </div> 
                    }
                </div>
                <div className='w-full md:w-auto left-0 absolute md:relative'>
                    <img src={LogoSvg} alt="logo" className='m-auto md:m-0 md:mr-[3.125rem]'/>
                </div>
                <ul className='hidden md:block md:flex-1 md:flex md:gap-14'>
                    <a href="">
                        <li className='font-poppins hover:text-red-primary transition ease-in-out delay-75'>Filmes</li>
                    </a>
                    <a href="">
                        <li className='font-poppins hover:text-red-primary transition ease-in-out delay-75'>Series</li>
                    </a>
                    <a href="">
                        <li className='font-poppins hover:text-red-primary transition ease-in-out delay-75'>Favoritos</li>
                    </a>
                </ul>
                {
                    !isLogged ?
                        <button className='w-[4.375rem] md:w-24 h-8 md:h-12 text-xs md:text-base text-white font-inter font-medium bg-red-primary rounded hover:bg-red-secondary transition-all ease-in-out delay-75' onClick={onLogin}>Login</button>
                    :
                    <div className='relative'>
                        <button onClick={toggleMenu} className='h-full flex items-center gap-6'>
                            <p className='hidden md:block font-inter text-base'>{username}</p>
                            {
                                <img src={photo ? photo : UserCircle} alt="user avatar"  className='w-[2.5rem] h-[2.5rem] rounded-full stroke-white'/>
                            }

                        </button>
                        {isMenuOpen && 
                            <div className='min-w-8 absolute px-6 py-4 bg-dark-contrast-dark right-0 rounded-md animate-[open_.5s_ease-in-out_1]'>
                                <ul className='flex flex-col justify-center'>
                                    <li className='block md:hidden border-b border-dark-contrast-light mb-4'>
                                        <p className='font-poppins text-zinc-300 font-extralight text-xs pb-1 whitespace-nowrap'>
                                            {username}
                                        </p>
                                    </li>
                                    <li className='text-zinc-300 hover:text-red-secondary'>
                                        <button onClick={onLogout} className='w-full m-auto'>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}