// components
import ContactSectionOne from "../../components/contact_section_one/contact_section_one.component"
import ContactSectionTwo from "../../components/contact_section_two/contact_section_two.component"
import Header from "../../components/header/header.component"

const ContactPage = () => {
    return(
        <div>
            <Header />
            <ContactSectionOne />
            <ContactSectionTwo />
        </div>
    )
}

export default ContactPage