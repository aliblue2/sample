import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { HashRouter, Route, Router, Routes } from "react-router-dom";
import CoinDetail from "./pages/CoinDetail";
import Market from "./pages/Market";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
  <Routes>
    <Route element={<Home />} path={"/"} index />
    <Route element={<Account />} path={"/account"} />
    <Route element={<CoinDetail />} path={"/:coin"} />
    <Route element={<Market />} path={"/market"} />
  </Routes>
  </Has>
);
