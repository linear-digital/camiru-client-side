import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@material-tailwind/react';
import React from 'react';
import Icon1 from './icon/icon-1.png';
import Icon2 from './icon/icon-2.png';
import Icon3 from './icon/icon-3.png';
import Icon4 from './icon/icon-4.png';
import Icon5 from './icon/icon-7.png';
import Icon6 from './icon/icon-6.png';
import { Button } from '@material-tailwind/react';
const Support = () => {
    const data = [
        {
            id: 1,
            icon: Icon1,
            title: "Getting Started",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve."
        },
        {
            id: 2,
            icon: Icon2,
            title: "Desktop and mobile apps",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve."
        },
        {
            id: 3,
            icon: Icon3,
            title: "Payment and billing",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve."
        },
        {
            id: 4,
            icon: Icon4,
            title: "Troubleshooting",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve."
        },
        {
            id: 5,
            icon: Icon5,
            title: "Login & Password",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve."
        },
        {
            id: 6,
            icon: Icon5,
            title: "Support",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve."
        },
    ]
    return (
        <main>
            <div className='w-full px-10 py-20 bg-[#187A82]'>
                <h1 className="text-white text-[31.54px] font-semibold text-center">What can help you with?</h1>
                <p className="text-center text-white text-base font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="w-[770.88px] h-[51.26px] bg-white rounded-lg mx-auto mt-10 flex items-center px-5 text-base" >
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[20px] text-[#ADA7A7]' />
                    <input type="text"
                        className='w-full h-full text-[#ADA7A7] focus:outline-none border-none text-sm pl-3'
                        placeholder='Type to search'
                    />
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
                    {
                        data.map(item => <Card
                            key={item.id}
                            className='w-full bg-white h-auto p-5 rounded-md'
                        >
                            <div className='w-[41.73px] h-[41.73px] bg-[#1879822b] rounded-full flex justify-center items-center'>
                                <img src={item.icon} alt="" />

                            </div>
                            <h1 className="text-[#000000] text-lg font-semibold mt-2">{item.title}</h1>
                            <p className="text-neutral-400 text-sm font-normal mt-2">{item.desc}</p>
                            <div>
                                <button className="text-cyan-700 mt-3  text-sm font-medium flex items-center gap-2">
                                    <span>
                                        Learn more
                                    </span>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="vuesax/bold/arrow-right">
                                            <g id="arrow-right">
                                                <path id="Vector" d="M13.1859 9.0585L11.5416 7.41421L8.86232 4.73493C8.29475 4.1757 7.32654 4.57634 7.32654 5.37762V10.5776V15.2601C7.32654 16.0614 8.29475 16.462 8.86232 15.8944L13.1859 11.5708C13.8787 10.8864 13.8787 9.75127 13.1859 9.0585Z" fill="#187A82" />
                                            </g>
                                        </g>
                                    </svg>

                                </button>
                            </div>
                        </Card>
                        )
                    }
                </div>
            </div>
            <div className='bg-[#FFBB3B] p-10 flex items-center justify-center gap-10'>
                <div className="text-center text-[#535458] text-3xl font-bold  leading-10">Still Have any Questions?</div>
                <Button className='bg-[#187A82] text-white px-10 py-4'>
                    Contact Now
                </Button>
            </div>
        </main>

    );
};

export default Support;