// Pages
import AboutPage from "../../pages/about/about.page";
import HomePage from "../../pages/home/home.page";
import Footer from "../footer/footer.component";
// components
import Header from "../header/header.component";
// react router dom
import { Route, Routes } from "react-router-dom";

const PublicArea = () => {
    const baseRoute = '/';

    return(
        <>
            {/* Header */}
            <Header />
            {/* Routes */}
            <Routes>
                <Route path={baseRoute} exact element={<HomePage />} />
                <Route path={`${baseRoute}/about_us`} element={<AboutPage />} />
            </Routes>
            {/* footer */}
            <Footer />
        </>
    )
}

export default PublicArea;