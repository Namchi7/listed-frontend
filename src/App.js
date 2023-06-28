import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./components/signIn";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
