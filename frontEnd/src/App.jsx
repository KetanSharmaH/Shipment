import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage.jsx";
import Signup from "./components/signUpPage.jsx";
import FrontPage from "./components/frontPage.jsx";
import SecondPage from "./components/secondPage.jsx";
import Orders from "./components/orders.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/front_page" element={<FrontPage />} />
        <Route path="/second_page" element={<SecondPage />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
