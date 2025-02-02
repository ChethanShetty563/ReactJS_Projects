import "./App.css";
import Header from "./components/Header";
import logo from "./assets/logo.svg";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile username="chethanShetty563" />} />
          <Route
            path="/projects"
            element={<Projects userName="chethanShetty563" />}
          />
          <Route
            path="/projects/:name"
            element={<ProjectDetail userName="chethanShetty563" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
