// Pages
import AboutPage from "../../pages/about/about.page";
import HomePage from "../../pages/home/home.page";
import WhatWeDoPage from "../../pages/what_we_do/what_we_do.page";
import BlogsPage from "../../pages/blogs/blogs.page";
// components
import Header from "../header/header.component";
import Footer from "../footer/footer.component";
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
                <Route path="/about_us" element={<AboutPage />} />
                <Route path="/what_we_do" element={<WhatWeDoPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
            </Routes>
            {/* footer */}
            <Footer />
        </>
    )
}

export default PublicArea;