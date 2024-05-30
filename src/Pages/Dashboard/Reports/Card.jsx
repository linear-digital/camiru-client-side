import React from 'react';

const Card = ({ title }) => {
    const [show, setShow] = React.useState(false);
    return (
        <div className="lg:w-[220px] w-[300px] h-[40px]  rounded-md border border-[#C7F1FF] bg-[#F8FCFF]  flex items-center justify-between px-5 relative cursor-pointer" onClick={() => setShow(!show)}>
            <h5 className="text-cyan-700 text-[10.67px] font-normal leading-none">{title}</h5>
            <Icon />

            {
                show && <div className='absolute right-0 top-[40px] h-[200px] w-full bg-[#F8FCFF] border border-[#C7F1FF]  shadow-xl z-20 rounded-md'>

                </div>
            }
        </div>
    );
};

export default Card;


const Icon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9987 2C4.3187 2 1.33203 4.98667 1.33203 8.66667C1.33203 12.3467 4.3187 15.3333 7.9987 15.3333C11.6787 15.3333 14.6654 12.3467 14.6654 8.66667C14.6654 4.98667 11.6787 2 7.9987 2ZM7.76536 10.4333L5.90536 8.57333C5.69203 8.36 5.8387 8 6.1387 8H9.86536C10.1654 8 10.312 8.36 10.0987 8.56667L8.2387 10.4267C8.10536 10.56 7.89203 10.56 7.76536 10.4333Z" fill="#187A82" />
        </svg>
    )
}