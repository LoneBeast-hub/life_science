import BT from '../../assets/biotechnology.jpg';
import PH from '../../assets/pharmaceuticals.jpg';
import MD from '../../assets/medical_devices.jpg';
import MAS from '../../assets/medical_affairs_solutions.jpg';

const ClientsSectionTwo = () => {
    return(
        <div className="max-w-[1200px] w-[90%] flex flex-col gap-[4rem] mx-auto py-[5rem]">
            {/* Biotechnology */}
            <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row gap-[3rem]">
                {/* text info */}
                <div className="flex flex-col gap-[2rem] md:w-1/2">
                    {/* heading */}
                    <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Biotechnology</p>
                    {/* body */}
                    <p className="text-[1.4rem] md:text-left text-justify">
                        We help biotech companies accelerate innovation and bring 
                        life-saving products to market by providing regulatory 
                        strategy, medical writing, and business optimization 
                        services.
                    </p>
                </div>
                {/* img */}
                <div className="md:w-1/2">
                    <img className="w-full" src={BT} alt="Biotechnology" />
                </div>
            </div>
            {/* Pharmaceuticals */}
            <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row-reverse gap-[3rem]">
                {/* text info */}
                <div className="flex flex-col gap-[2rem] md:w-1/2">
                    {/* heading */}
                    <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Pharmaceuticals</p>
                    {/* body */}
                    <p className="text-[1.4rem] md:text-left text-justify">
                        Our consulting services ensure that pharmaceutical companies 
                        navigate complex regulatory landscapes, accelerate clinical 
                        trials, and communicate scientific data effectively.
                    </p>
                </div>
                {/* img */}
                <div className="md:w-1/2">
                    <img className="w-full" src={PH} alt="Pharmaceuticals" />
                </div>
            </div>
            {/* Medical Devices */}
            <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row gap-[3rem]">
                {/* text info */}
                <div className="flex flex-col gap-[2rem] md:w-1/2">
                    {/* heading */}
                    <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Medical Devices</p>
                    {/* body */}
                    <p className="text-[1.4rem] md:text-left text-justify">
                        We offer comprehensive solutions for medical device companies, 
                        focusing on compliance, product lifecycle management, and 
                        documentation for regulatory submissions.
                    </p>
                </div>
                {/* img */}
                <div className="md:w-1/2">
                    <img className="w-full" src={MD} alt="Medical Devices" />
                </div>
            </div>
            {/* Healthcare Providers */}
            <div className="flex shadow-lg p-[1rem] justify-between items-center flex-col md:flex-row-reverse gap-[3rem]">
                {/* text info */}
                <div className="flex flex-col gap-[2rem] md:w-1/2">
                    {/* heading */}
                    <p className="text-[3rem] font-medium md:text-left text-center leading-[1]">Healthcare Providers</p>
                    {/* body */}
                    <p className="text-[1.4rem] md:text-left text-justify">
                        We support healthcare organizations by providing strategic 
                        consulting, medical writing, and technology-driven solutions 
                        that enhance operational efficiency and patient care.
                    </p>
                </div>
                {/* img */}
                <div className="md:w-1/2">
                    <img className="w-full" src={MAS} alt="Healthcare Provicers" />
                </div>
            </div>
        </div>
    )
}

export default ClientsSectionTwo;