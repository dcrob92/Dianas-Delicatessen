import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import NoPages from "./Pages/NoPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Dianas-Delicatessen" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Dianas-Delicatessen/productos" element={<Product />} />
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
