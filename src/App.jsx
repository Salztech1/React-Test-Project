import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import Pages from "./Pages/Pages";
import MyNetwork from "./Pages/MyNetwork";
import Account from "./Pages/Account";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/my-network" element={<MyNetwork />} />
            <Route path="/account" element={<Account />} />
            <Route index element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
