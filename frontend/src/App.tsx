import { JSX } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./page/login/Login";
import Admin from "./page/AdminPanel/AdminPanel";
import Gallery from "./components/Gallery/Gallery";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("token");
  const isAuthenticated = Boolean(token && token !== "null" && token !== "");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => (
  <Router basename="/">
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Menu />
            <Events />
            <Gallery />
            <Contact />
            <Footer />
          </>
        }
      />
    </Routes>
  </Router>
);

export default App;
