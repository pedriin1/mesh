import { Route, HashRouter, Routes } from "react-router-dom";
import App from "./App";

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:color1/:color2/:color3/:color4" element={<App />} />
      </Routes>
    </HashRouter>
  );
}
