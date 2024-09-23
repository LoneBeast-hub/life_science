// components
import BlogsSectionOne from "../../components/blogs_section_one/blogs_section_one.component";
import BlogsSectionTwo from "../../components/blogs_section_two/blogs_section_two.component";
import Header from "../../components/header/header.component";
// context api
import { MyContext } from "../../App";
import { useContext, useEffect } from "react";
// firebase
import { db } from "../../firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const BlogsPage = () => {
    const {setContextState} = useContext(MyContext);

    useEffect(() => {
        // Reference the 'blogs' collection in Firebase
        const blogsCollectionRef = collection(db, "blogs");

        // Subscribe to changes in the blogs collection
        const unsubscribe = onSnapshot(blogsCollectionRef, (snapshot) => {
            const blogsArray = snapshot.docs.map((doc) => ({
                id: doc.id, // Firebase assigns an ID to each document
                ...doc.data(), // Spread other document data (imgUrl, date, author, category, title, info)
            }));

            // Update the context state with the new blogs data
            setContextState((prevValues) => ({
                ...prevValues,
                blogsData: blogsArray
            }));
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, [setContextState])

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