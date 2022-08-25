import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from "next/router";

const Sidebar = ({ show, handleCloseSideBar }) => {
    const router = useRouter();

    return (
        <div className='side-drawer' onClick={handleCloseSideBar}>
            {/* <div className={show ? 'side-drawer open' : ' side-drawer'} onCdivck={handleCloseSideBar}> */}
            <div className='relative'>
                <div className='absolute top-4 right-10  '>
                    <span className='block text-white cursor-pointer'>
                        <AiOutlineClose size={20} />
                    </span>
                </div>
                <div className=''>
                    <div className='mini-menubar'>
                        <div>
                            <div className="mini-menu "><Link href="/"><a className={router.pathname === "/" ? "text-red-500" : "text-white"}>Home</a></Link></div>
                            <div className='mini-menu '><Link href="/about"><a className={router.pathname === "/about" ? "text-red-500" : "text-white"}>About</a></Link></div>
                            <div className='mini-menu'>
                                <Link href="#"><a className={router.pathname == "#" ? "text-red-500" : "text-white"}>More</a></Link>
                                <div className='mini-ani-menu'>
                                    <div className='sub-mini-Link'><Link href="#"><a className={router.pathname === "#" ? "text-red-500" : "text-white"}>sub1 sub1 sub1</a></Link></div>
                                    <div className='sub-mini-Link'><Link href="#"><a className={router.pathname === "#" ? "text-red-500" : "text-white"}>sub2</a></Link></div>
                                    <div className='sub-mini-Link'><Link href="#"><a className={router.pathname === "#" ? "text-red-500" : "text-white"}>sub3</a></Link></div>
                                </div>
                            </div>
                            <div className='mini-menu'><Link href="#"><a className={router.pathname == "#" ? "text-red-500" : "text-white"}>Contact</a></Link></div>
                            <div className='mini-menu'>
                                <Link href="#"><a className={router.pathname == "#" ? "text-red-500" : "text-white"}>Login/Register</a></Link>
                                <div className='mini-ani-menu'>
                                    <div className='sub-mini-Link'><Link href="#"><a className={router.pathname === "#" ? "text-red-500" : "text-white"}>logout</a></Link></div>
                                    <div className='sub-mini-Link'><Link href="#"><a className={router.pathname === "#" ? "text-red-500" : "text-white"}>Dashboard</a></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;