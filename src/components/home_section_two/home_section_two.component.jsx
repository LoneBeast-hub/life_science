import './home_section_two.style.css'

const HomeSectionTwo = () => {
    return(
        <div className="w-full flex py-[40px] items-center relative min-h-[418px] home_section_two_bg bg-cover bg-fixed bg-no-repeat">
            {/* adjuster */}
            <div className="max-w-[1200px] w-[90%] mx-auto">
                <div>
                    {/* heading */}
                    <p className='text-[2.4rem] text-center md:text-[3.7rem] font-bold text-white'>Our Work</p>
                    {/* sub heading */}
                    <p className='text-[1.6rem] text-center text-white'>Our work is global</p>
                    {/* flex */}
                    <div className="flex flex-col mt-[4rem] md:justify-between gap-[2rem] md:flex-row">
                        {/* flex */}
                        <div className='flex flex-col text-white items-center justify-center'>
                            <p className='text-[1.6rem]'>We've worked in</p>
                            <p className='text-[6rem] font-bold leading-[7rem]'>9</p>
                            <p className='text-[1.6rem]'>Countries</p>
                        </div>
                        {/* flex */}
                        <div className='flex flex-col text-white items-center justify-center'>
                            <p className='text-[1.6rem]'>In</p>
                            <p className='text-[6rem] font-bold leading-[7rem]'>35</p>
                            <p className='text-[1.6rem]'>Cities</p>
                        </div>
                        {/* flex */}
                        <div className='flex flex-col text-white items-center justify-center'>
                            <p className='text-[1.6rem]'>Across</p>
                            <p className='text-[6rem] font-bold leading-[7rem]'>30</p>
                            <p className='text-[1.6rem]'>Clients</p>
                        </div>
                        {/* flex */}
                        <div className='flex flex-col text-white items-center justify-center'>
                            <p className='text-[1.6rem]'>In over</p>
                            <p className='text-[6rem] font-bold leading-[7rem]'>200</p>
                            <p className='text-[1.6rem]'>Therapeutic areas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionTwo;