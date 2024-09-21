import PrivateArea from "./components/private_area/private_area.component";
import PublicArea from "./components/public_area/public_area.component";
import { useLocation } from "react-router-dom";
import { createContext, useState } from "react";

export const MyContext = createContext();

function App() {
  const [contextState, setContextState] = useState({
    showNav: false,
  });

  const location = useLocation();
  return (
    <MyContext.Provider value={{ contextState, setContextState }}>
      {
        location.pathname.startsWith('/admin_dashboard')?
          <>
            <PrivateArea />
          </>
        :
          <PublicArea />
      }
    </MyContext.Provider>
  )
}

export default App;
