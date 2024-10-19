import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";  // Importe o useLocation
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/membro/membro";
import Formulario from "./scenes/formulario";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendario/calendar";
import Login from "./scenes/login/login";
import FormularioEndereco from "../src/components/formularioEndereco/FormularioEndereco";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();  // Obtenha a localização atual

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* Condicionalmente renderiza o Sidebar e o Topbar com base na rota */}
          {location.pathname !== '/login' && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {location.pathname !== '/login' && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              {/* Redirecionar a rota "/" para "/login" */}
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/formulario" element={<Formulario />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/endereco" element={<FormularioEndereco />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

