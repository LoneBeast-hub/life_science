// components
import WhatWeDoSectionOne from "../../components/what_we_do_section_one/what_we_do_section_one.component";
import WhatWeDoSectionTwo from "../../components/what_we_do_section_two/what_we_do_section_two.component";
import Header from "../../components/header/header.component";

const WhatWeDoPage = () => {
    return(
        <div>
            {/* Header */}
            <Header />
            <WhatWeDoSectionOne />
            <WhatWeDoSectionTwo />
        </div>
    )
}

export default WhatWeDoPage;