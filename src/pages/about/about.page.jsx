// components
import AboutSectionOne from "../../components/about_section_one/about_section_one.component";
import AboutSectionTwo from "../../components/about_section_two/about_section_two.component";
import Header from "../../components/header/header.component";

const AboutPage = () => {
    return(
        <div>
            {/* Header */}
            <Header />
            <AboutSectionOne />
            <AboutSectionTwo />
        </div>
    )
}

export default AboutPage;