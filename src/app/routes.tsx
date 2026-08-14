import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import NuestraHistoria from "./pages/NuestraHistoria";
import MisionVisionValores from "./pages/MisionVisionValores";
import MarcoLegal from "./pages/MarcoLegal";
import RolDNI from "./pages/RolDNI";
import QueEsInteligencia from "./pages/QueEsInteligencia";

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="text-[#C9A55C] text-7xl font-extrabold font-['Plus_Jakarta_Sans'] mb-4">404</div>
      <h1 className="text-white text-2xl font-bold font-['Plus_Jakarta_Sans'] mb-3">Página no encontrada</h1>
      <p className="text-[#8FA4C8] mb-8 font-['Plus_Jakarta_Sans']">La página que buscas no existe o ha sido movida.</p>
      <a href="/" className="px-6 py-3 bg-[#C9A55C] text-[#071D49] font-bold text-sm rounded font-['Plus_Jakarta_Sans'] hover:bg-[#D4B567] transition-colors">
        Volver al inicio
      </a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "sobre-nosotros", Component: SobreNosotros },
      { path: "historia", Component: NuestraHistoria },
      { path: "mision-vision-valores", Component: MisionVisionValores },
      { path: "marco-legal", Component: MarcoLegal },
      { path: "rol-de-la-dni", Component: RolDNI },
      { path: "que-es-la-inteligencia", Component: QueEsInteligencia },
      { path: "*", Component: NotFound },
    ],
  },
]);
