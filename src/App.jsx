import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Pages-Folder/Search";
import Pages from "./Pages-Folder/Pages";
import MyNetwork from "./Pages-Folder/MyNetwork";
import Account from "./Pages-Folder/Account";
import Home from "./Pages-Folder/Home";

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
