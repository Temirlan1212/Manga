import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import BackToTop from "./BackToTop";
import BgColor from "./components/BgColor/BgColor";
import Navbar from "./components/Navbar/Navbar";

import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <AuthContextProvider>
          <ProductContextProvider>
            <BackToTop />

            <Navbar />
          </ProductContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
