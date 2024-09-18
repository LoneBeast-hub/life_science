// Pages
import AboutPage from "../../pages/about/about.page";
import HomePage from "../../pages/home/home.page";
import WhatWeDoPage from "../../pages/what_we_do/what_we_do.page";
import BlogsPage from "../../pages/blogs/blogs.page";
import BlogPage from "../../pages/blog/blog.page";
import ContactPage from "../../pages/contact/contact.page";
import ClientsPage from "../../pages/clients/clients.page";
import PublicNotFoundPage from "../../pages/public_not_found/public_not_found.page";

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
                <Route path="/clients" element={<ClientsPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Catch-all route for non-existent pages */}
                <Route path="*" element={<PublicNotFoundPage />} />
            </Routes>
            {/* footer */}
            <Footer />
        </>
    )
}

export default PublicArea;