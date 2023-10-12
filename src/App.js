import "./App.scss";
import React from "react";
import AppRouter from "./common/router";
import Header from "./components/header";

function App() {
  return (
    <div className="photo-app">
      <AppRouter />
    </div>
  );
}

export default App;
