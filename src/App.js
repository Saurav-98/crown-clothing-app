import React from "react";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

import "./categories.styles.scss";
import "./App.css";

const Shop = () => {
  return (
    <div>
      <h1>This is the Shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />}>
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
