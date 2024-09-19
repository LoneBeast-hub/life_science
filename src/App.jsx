import PrivateArea from "./components/private_area/private_area.component";
import PublicArea from "./components/public_area/public_area.component";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      {
        location.pathname.startsWith('/admin_dashboard')?
          <>
            <PrivateArea />
          </>
        :
          <PublicArea />
      }
    </>
  )
}

export default App
