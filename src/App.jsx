import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Home from '../src/pages/Home'
import Layout from "./components/Layout";
function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Home />
      </Layout>
    </BrowserRouter>
  )
}

export default App
