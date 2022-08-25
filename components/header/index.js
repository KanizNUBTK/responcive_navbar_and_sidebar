import React from 'react';
import TopHead from '../shared/topHead/tophead'
import Menu from '../menu/menu';



const HomePageHeader = () => {
    const data = [
        { tittle: "Main Titte", subTittle: "sub tittle" }
    ]
    return (
        <div className=''>
            {/* compnay address top header part */}
            <TopHead />

            {/* main menu with sidebar */}
            <Menu />

            {/* main header body part */}
            <div className='relative bg-[url("/images/main-banner.png")] bg-cover  h-screen w-full -z-10 -top-14'>
                <div className='absolute top-[40%] left-[20%] shadow-xl h-[30%] w-[45%] bg-gray-500 opacity-20 rounded-sm -z-10'></div>
                <div className='absolute top-[40%] left-[20%] shadow p-[2%] h-[30%] w-[45%] bg-transparent'>
                    {
                        data.map((d, i) =>
                            <div key={i + 1} className='absolute z-40'>
                                <h1 className='text-[40px] font-bold capitalize text-white'>{d.tittle}</h1>
                                <p className='text-[16px] font-normal capitalize text-white'>{d.subTittle}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePageHeader;