import Link from 'next/link';
import React, { useState } from 'react';
import { TbGridDots } from 'react-icons/tb';
import { useRouter } from "next/router";

const Navbar = ({handleOpenSidebar}) => {
    const [changeNavColor, setChangeNavColor] = useState(false);
    const router = useRouter();
    const data = { logoimg: "" }

    const handleNavColorPosition = () => {
        if (window.scrollY >= 100) {
            setChangeNavColor(true);
        }
        else {
            setChangeNavColor(false)
        }
    }
    window.addEventListener('scroll', handleNavColorPosition);

    return (
        <div className={changeNavColor ? "topHeaderPage topHeaderPage-bg " : " topHeaderPage"}>
            <div className='flex justify-around shadow-md'>
                <div className='flex justify-center items-center'>
                    <img className=' h-8 w-48 text-white' src={data?.logoimg} alt="logo" />
                </div>
                <div className='flex active relative'>
                    <nav className='large-menu'>
                        <ul>
                            <li className="menu"><Link href="/"><a className={router.pathname === "/" ? " text-red-500" : "text-white"}>Home</a></Link></li>
                            <li className='menu'><Link href="/about"><a className={router.pathname == "/about" ? "text-red-500" : "text-white"}>About</a></Link></li>
                            <li className='menu'>
                                <Link href="#"><a className={router.pathname == "#" ? "text-red-500" : "text-white"}>More</a></Link>
                                <ul className='ani-menu'>
                                    <li className='menu-list'><Link href="#"><a className={router.pathname === "#" ? "text-red-500" : "text-white"}>sub1 sub1 sub1</a></Link></li>
                                    <li className='menu-list'><Link href="#"><a className={router.pathname === "#" ? "text-red-500" : "text-white"}>sub2</a></Link></li>
                                    <li className='menu-list'><Link href="#"><a className={router.pathname === "#" ? "text-red-500" : "text-white"}>sub3</a></Link></li>
                                </ul>
                            </li>
                            <li className='menu'><Link href="#"><a className={router.pathname == "#" ? "text-red-500" : "text-white"}>Contact</a></Link></li>
                            <li className='menu'>
                                <Link href="#"><a className={router.pathname == "#" ? "text-red-500" : "text-white"}>Login/Register</a></Link>
                                <ul className='ani-menu'>
                                    <li className='menu-list'><Link href="#"><a className={router.pathname === "#" ? "text-red-500" : "text-white"}>logout</a></Link></li>
                                    <li className='menu-list'><Link href="#"><a className={router.pathname === "#" ? "text-red-500" : "text-white"}>Dashboard</a></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className='flex justify-center items-center text-white hover:cursor-pointer'>
                        <TbGridDots  onClick={handleOpenSidebar} size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;