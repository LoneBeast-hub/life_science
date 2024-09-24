import CareersSectionOne from "../../components/careers_section_one/careers_section_one.component";
import CareersSectionTwo from "../../components/careers_section_two/careers_section_two.component";
import Header from "../../components/header/header.component";

const CareersPage = () => {
    return(
        <div>
            {/* Header */}
            <Header />
            <CareersSectionOne />
            <CareersSectionTwo />
        </div>
    )
}

export default CareersPage;