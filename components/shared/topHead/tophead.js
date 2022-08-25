import Link from 'next/link';
import React from 'react';
import { BsTelephoneFill, BsTwitter } from 'react-icons/bs';
import { GoClock } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from 'react-icons/md';

const TopHead = () => {
    const data={
        email:"support@gmail.com",
        phone:"880100000000",
        officeTime:"Sun-Thu/10AM-5PM",
        fbLink:'#',
        InLink:'#',
        TwLink:'#'
    }
    return (
        <div>
            {/* top header */}
            <div className='hidden border-gray-500 z-40 bg-transparent lg:block '>
                <div className='grid grid-cols-6 divide-x-[1px] divide-gray-500 border-b-[1px] border-gray-500 text-gray-200 text-[14px]'>
                    <div className='flex items-center justify-center'>
                        <p className='my-auto'>Call Us Today!</p>
                    </div>
                    <div className='flex items-center  p-1'>
                        <BsTelephoneFill className='mr-1' />
                        <Link href='tel:+1 647 987 4025'><span className='lg:mr-6 hover:cursor-pointer'>{data.phone}</span></Link>
                    </div>
                    <div className='col-span-3 flex justify-between'>
                        <div className='flex items-center p-1'>
                            <MdEmail size={20} className='mr-1' />
                            <Link href='mailto:support@taxants.ca'><span className='lg:mr-6 hover:cursor-pointer'>{data.email}</span></Link>
                        </div>
                        <div className='flex items-center p-1'>
                            <GoClock size={20} className='mr-1' />
                            <Link href='#'><span className='lg:mr-6 hover:cursor-pointer'>{data.officeTime}</span></Link>
                        </div>
                        {/* <div className='flex items-center'>
                            {
                                user?.role === "student" ?
                                    <Link href="https://home.taxants.tk"><a className='border-2 border-[#BC0E0E] rounded-sm px-2 mr-1 hover:bg-[#890606] text-[14px] text-white '>
                                        File Your Taxes Online
                                    </a></Link>
                                    :
                                    <Link href="/login"><a className='border-2 border-[#BC0E0E] rounded-sm px-1 mr-1 hover:bg-[#890606] text-[14px] text-white '>
                                        File Your Taxes Online
                                    </a></Link>
                            }
                        </div> */}
                    </div>
                    <div className='flex items-center justify-center border-gray-500 p-1'>
                        <Link href={data.fbLink}><a target="_blank" className='anchor-color'><FaFacebookF size={15} className='mx-2 mt-1 hover:cursor-pointer ' /></a></Link>
                        <Link href={data.TwLink}><a target="_blank" className='anchor-color'><BsTwitter size={15} className='mx-2 mt-1  hover:cursor-pointer ' /></a></Link>
                        <Link href={data.InLink}><a target="_blank" className='anchor-color'><AiFillInstagram size={15} className='mx-2 mt-1 hover:cursor-pointer' /></a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHead;