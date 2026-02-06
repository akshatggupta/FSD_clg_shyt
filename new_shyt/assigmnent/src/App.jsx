import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/home";   // add this
import Login from "./components/Login";
import Register from "./components/registration";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />  {/* FIXED */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
