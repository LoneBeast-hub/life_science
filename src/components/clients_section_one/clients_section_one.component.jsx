import './clients_section_one.style.css'

const ClientsSectionOne = () => {
    return(
        <div className="w-full flex items-center relative min-h-[100vh] max-h-[880px] clients_section_one_bg bg-cover bg-fixed bg-no-repeat">
            {/* bg-overlay */}
            <div className="bg-[#00000083] z-[0] w-full h-full absolute top-0"></div>
            {/* adjuster */}
            <div className="max-w-[1200px] relative z-[1] w-[90%] mx-auto py-[130px] lg:py-[240px]">
                <p className="text-[4rem] text-white font-bold text-center">Industries We Serve</p>
            </div>
        </div>
    )
}

export default ClientsSectionOne;