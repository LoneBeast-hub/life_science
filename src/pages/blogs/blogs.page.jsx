// components
import BlogsSectionOne from "../../components/blogs_section_one/blogs_section_one.component";
import BlogsSectionTwo from "../../components/blogs_section_two/blogs_section_two.component";
import Header from "../../components/header/header.component";

const BlogsPage = () => {
    return(
        <div>
            {/* Header */}
            <Header />
            <BlogsSectionOne />
            <BlogsSectionTwo />
        </div>
    )
}

export default BlogsPage;