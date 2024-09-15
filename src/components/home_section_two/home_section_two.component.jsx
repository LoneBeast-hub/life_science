import React, { useEffect, useState, useRef } from 'react';
import './home_section_two.style.css';

const HomeSectionTwo = () => {
    const [countries, setCountries] = useState(0);
    const [cities, setCities] = useState(0);
    const [clients, setClients] = useState(0);
    const [areas, setAreas] = useState(0);
    const ref = useRef(null);

    const incrementNumber = (start, end, setter, duration = 2000) => {
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const current = Math.min(Math.floor((progress / duration) * (end - start) + start), end);
            setter(current);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    incrementNumber(0, 9, setCountries);
                    incrementNumber(0, 35, setCities);
                    incrementNumber(0, 30, setClients);
                    incrementNumber(0, 200, setAreas);
                    observer.disconnect(); // Stop observing after numbers have been animated
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the component is in view
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div ref={ref} className="w-full flex py-[40px] items-center relative min-h-[418px] home_section_two_bg bg-cover bg-fixed bg-no-repeat">
            <div className="max-w-[1200px] w-[90%] mx-auto">
                <div>
                    {/* heading */}
                    <p className='text-[2.4rem] text-center md:text-[3.7rem] font-bold text-white'>Our Work</p>
                    {/* sub heading */}
                    <p className='text-[1.6rem] text-center text-white'>Our work is global</p>
                    {/* flex */}
                    <div className="flex flex-col mt-[4rem] md:justify-between gap-[2rem] md:flex-row">
                        <div className='flex flex-col text-white items-center justify-center'>
                            <p className='text-[1.6rem]'>We've worked in</p>
                            {/* count */}
                            <p className='text-[6rem] font-bold leading-[7rem]'>{countries}</p>
                            <p className='text-[1.6rem]'>Countries</p>
                        </div>
                        <div className='flex flex-col text-white items-center justify-center'>
                            <p className='text-[1.6rem]'>In</p>
                            {/* count */}
                            <p className='text-[6rem] font-bold leading-[7rem]'>{cities}</p>
                            <p className='text-[1.6rem]'>Cities</p>
                        </div>
                        <div className='flex flex-col text-white items-center justify-center'>
                            <p className='text-[1.6rem]'>Across</p>
                            {/* count */}
                            <p className='text-[6rem] font-bold leading-[7rem]'>{clients}</p>
                            <p className='text-[1.6rem]'>Clients</p>
                        </div>
                        <div className='flex flex-col text-white items-center justify-center'>
                            <p className='text-[1.6rem]'>In over</p>
                            {/* count */}
                            <p className='text-[6rem] font-bold leading-[7rem]'>{areas}</p>
                            <p className='text-[1.6rem]'>Therapeutic areas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSectionTwo;
