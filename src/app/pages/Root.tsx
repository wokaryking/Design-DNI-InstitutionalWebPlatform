import { Outlet, ScrollRestoration } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div className="min-h-screen bg-[#071D49] text-[#F5F7FA]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <ScrollRestoration />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
