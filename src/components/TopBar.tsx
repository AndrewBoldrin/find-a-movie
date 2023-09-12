import { useState, useContext, useEffect } from 'react'
import LogoSvg from '@/assets/Logo.svg'
import Hamburguer from '@/assets/Hamburguer.svg'
import UserCircle from '@/assets/UserCircle.svg'

import { UserContext, UserContextType } from '@/contexts/UserContextProvider'
import { useGoogleAuthentication } from '@/hooks/useGoogleAuthentication'

export function TopBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
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
            <div className='w-full md:w-[73rem] h-full flex justify-between items-center px-8 md:px-0 md:m-auto'>
                <button>
                    <img src={Hamburguer} alt="toggle menu" className='w-8 h-8 md:hidden'/>
                </button>
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
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='h-full flex items-center gap-6'>
                            <p className='font-inter text-base'>{username}</p>
                            {
                                <img src={photo ? photo : UserCircle} alt="user avatar"  className='w-[2.5rem] h-[2.5rem] rounded-full stroke-white'/>
                            }

                        </button>
                        {isMenuOpen && 
                            <div className='absolute px-6 py-4 bg-zinc-300 right-0 rounded-md'>
                                <ul>
                                    <button onClick={onLogout}>
                                        <li className='text-black hover:text-red-secondary'>Logout</li>
                                    </button>
                                </ul>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
}