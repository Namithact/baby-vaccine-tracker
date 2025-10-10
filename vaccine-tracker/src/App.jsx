import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Tracker from "./pages/Tracker";
import VaccineEntry from "./pages/VaccineEntry";
export default function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/tracker" element={<Tracker/>}></Route>
      <Route path="/entry" element={<VaccineEntry/>}></Route>
    </Routes>
   </Router>
  )
}
