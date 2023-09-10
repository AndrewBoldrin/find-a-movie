import LogoSvg from '@/assets/Logo.svg'
import Hamburguer from '@/assets/Hamburguer.svg'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebase/config'

export function TopBar() {

    const app = initializeApp(firebaseConfig)

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
                <button className='w-[4.375rem] md:w-24 h-8 md:h-12 text-xs md:text-base text-white font-inter font-medium bg-red-primary rounded hover:bg-red-secondary transition-all ease-in-out delay-75'>Login</button>
            </div>
        </div>
    )
}