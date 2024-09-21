import CTAButton from '../cta_button/cta_button.component';
import './home_section_three.style.css';

const HomeSectionThree = () => {
    return(
        <div className="w-full flex py-[40px] items-center relative min-h-[418px] home_section_three_bg bg-cover bg-fixed bg-no-repeat">
            {/* adjuster */}
            <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col-reverse gap-[3rem] justify-between md:flex-row">
                {/* left */}
                <div className='flex flex-col text-white items-center justify-center'>
                    <p className='text-[1.6rem]'>New-prelaunch clients</p>
                    <p className='text-[6rem] font-bold leading-[7rem]'>6</p>
                    <p className='text-[1.6rem]'>in 2023</p>
                </div>
                {/* right */}
                <div className='md:max-w-[60%] flex flex-col gap-[3rem]'>
                    {/* heading */}
                    <p className='text-[2.4rem] text-center md:text-right md:text-[3.7rem] font-bold text-white'>Our Target Customers</p>
                    {/* body */}
                    <p className='text-[1.6rem] text-white text-center md:text-right'>
                        We work with a breadth of clients.  our sweetspot 
                        is companies that are launching new therapies or 
                        entering new disease areas and are looking for strategic 
                        & scientific partners.
                    </p>
                    {/* cta */}
                    <div className='w-fit md:self-end self-center'>
                        <CTAButton path='/clients' bgWhite>See Our Clients</CTAButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionThree;