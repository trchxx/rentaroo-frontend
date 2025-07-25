import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout.tsx";
import { Home } from "./pages/Home.tsx";
import { Contact } from "./pages/Contact.tsx";
import { ProductPage } from "./pages/ProductPage.tsx";
import { LoginModal } from "./components/LoginModal.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Route>
      </Routes>

      <LoginModal />
    </>
  );
}

export default App;
