// components
import HomeSectionFour from "../../components/home_section_four/home_section_four.component";
import HomeSectionOne from "../../components/home_section_one/home_section_one.component";
import HomeSectionThree from "../../components/home_section_three/home_section_three.component";
import HomeSectionTwo from "../../components/home_section_two/home_section_two.component";

const HomePage = () => {
    return(
        <div>
            <HomeSectionOne />
            <HomeSectionTwo />
            <HomeSectionThree />
            <HomeSectionFour />
        </div>
    )
}

export default HomePage;