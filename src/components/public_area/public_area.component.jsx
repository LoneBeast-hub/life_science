// Pages
import AboutPage from "../../pages/about/about.page";
import HomePage from "../../pages/home/home.page";
import WhatWeDoPage from "../../pages/what_we_do/what_we_do.page";
import BlogsPage from "../../pages/blogs/blogs.page";
import BlogPage from "../../pages/blog/blog.page";
// components
import Footer from "../footer/footer.component";
// react router dom
import { Route, Routes } from "react-router-dom";

const PublicArea = () => {
    const baseRoute = '/';

    return(
        <>
            {/* Routes */}
            <Routes>
                <Route path={baseRoute} exact element={<HomePage />} />
                <Route path="/about_us" element={<AboutPage />} />
                <Route path="/what_we_do" element={<WhatWeDoPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/blogs/:id" element={<BlogPage />} />
            </Routes>
            {/* footer */}
            <Footer />
        </>
    )
}

export default PublicArea;