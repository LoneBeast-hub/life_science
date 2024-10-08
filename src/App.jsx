import PrivateArea from "./components/private_area/private_area.component";
import PublicArea from "./components/public_area/public_area.component";
import { useLocation } from "react-router-dom";
import { createContext, useState } from "react";
// components
import AddBlogModal from "./components/add_blog_modal/add_blog_modal.component";
import DeleteBlogModal from "./components/delete_blog_modal/delete_blog_modal.component";
import EditBlogModal from "./components/edit_blog_modal/edit_blog_modal.component";

export const MyContext = createContext();

function App() {
  const [contextState, setContextState] = useState({
    showNav: false,
    showAddBlogModal: false,
    showDeleteBlogModal: false,
    showEditBlogModal: false,
    blogToDelete: null,
    blogToEdit: null,
    selectedCategory: 'All',
    blogsData: []
  });

  const location = useLocation();
  return (
    <MyContext.Provider value={{ contextState, setContextState }}>
      {
        location.pathname.startsWith('/admin_dashboard')?
          <>
            <PrivateArea />
            {/* Add Blog Modal */}
            {contextState.showAddBlogModal? <AddBlogModal /> : ''}
            {/* Delete Blog Modal */}
            {contextState.showDeleteBlogModal? <DeleteBlogModal /> : ''}
            {/* Edit Blog Modal */}
            {contextState.showEditBlogModal? <EditBlogModal /> : ''}
          </>
        :
          <PublicArea />
      }
    </MyContext.Provider>
  )
}

export default App;
