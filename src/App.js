import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});
  const [islogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar
          islogged={islogged}
          setIsLogged={setIsLogged}
          setLoginUser={setLoginUser}
        />
        <Routes>
          {user && user._id ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route
              path="/signin"
              element={
                <Login setLoginUser={setLoginUser} setIsLogged={setIsLogged} />
              }
            />
          )}
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/signin"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
