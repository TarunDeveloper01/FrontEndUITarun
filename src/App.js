import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Analytics from "./Components/Analytics";
import Data from "./Components/Data";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/home/analytics"
            element={
              <>
                <Navbar />
                <div className="mt-[2%]"></div>
                <Analytics />
              </>
            }
          />
          <Route
            path="/home/data"
            element={
              <>
                <Navbar />
                <Data />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
