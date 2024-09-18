import ClientsSectionOne from "../../components/clients_section_one/clients_section_one.component";
import ClientsSectionTwo from "../../components/clients_section_two/clients_section_two.component";
import Header from "../../components/header/header.component";

const ClientsPage = () => {
    return(
        <div>
            {/* Header */}
            <Header />
            <ClientsSectionOne />
            <ClientsSectionTwo />
        </div>
    )
}

export default ClientsPage;