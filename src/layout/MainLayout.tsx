import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar.tsx";
import { Footer } from "../components/Footer.tsx";

export const MainLayout = () => {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
