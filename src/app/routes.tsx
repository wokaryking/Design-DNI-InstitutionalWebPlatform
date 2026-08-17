import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import CanalConfidencial from "./pages/CanalConfidencial";
import SobreNosotros from "./pages/SobreNosotros";
import NuestraHistoria from "./pages/NuestraHistoria";
import MisionVisionValores from "./pages/MisionVisionValores";
import MarcoLegal from "./pages/MarcoLegal";
import RolDNI from "./pages/RolDNI";
import QueEsInteligencia from "./pages/QueEsInteligencia";
import TrabajaConNosotros from "./pages/TrabajaConNosotros";
import Contacto from "./pages/Contacto";
import SNI from "./pages/SNI";
import AreasLayout from "./pages/areas/AreasLayout";
import Ciberseguridad from "./pages/areas/Ciberseguridad";
import CriptografiaNacional from "./pages/areas/CriptografiaNacional";
import InvestigacionCiberdelitos from "./pages/areas/InvestigacionCiberdelitos";
import InteligenciaEstrategica from "./pages/areas/InteligenciaEstrategica";
import CooperacionInternacional from "./pages/areas/CooperacionInternacional";
import InteligenciaDelictiva from "./pages/areas/InteligenciaDelictiva";
import InteligenciaProspectiva from "./pages/areas/InteligenciaProspectiva";
import Contrainteligencia from "./pages/areas/Contrainteligencia";

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
      { path: "trabaja-con-nosotros", Component: TrabajaConNosotros },
      { path: "contacto", Component: Contacto },
      { path: "sni", Component: SNI },
      { path: "canal-confidencial", Component: CanalConfidencial },
      {
        path: "areas-de-trabajo",
        Component: AreasLayout,
        children: [
          { path: "ciberseguridad", Component: Ciberseguridad },
          { path: "criptografia-nacional", Component: CriptografiaNacional },
          { path: "investigacion-ciberdelitos", Component: InvestigacionCiberdelitos },
          { path: "inteligencia-estrategica", Component: InteligenciaEstrategica },
          { path: "cooperacion-internacional", Component: CooperacionInternacional },
          { path: "inteligencia-delictiva", Component: InteligenciaDelictiva },
          { path: "inteligencia-prospectiva", Component: InteligenciaProspectiva },
          { path: "contrainteligencia", Component: Contrainteligencia },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
