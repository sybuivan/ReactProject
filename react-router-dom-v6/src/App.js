import React from "react";
import './App.css';
import { Routes, Route, Outlet, Link,useParams } from "react-router-dom";
import Home from "./Pages/Home";
import Launch from "./Pages/Launch";
import LaunchIndex from "./Pages/LaunchIndex";
import LaunchShoe from "./Pages/LaunchShoe";

export default function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="launch" element={<Launch />}>
              <Route index element={<LaunchIndex />} />
              <Route path=":slug" element={<LaunchShoe />} />
            </Route>
          </Route>
        </Routes>
      </div>
  )
}

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/launch">Launch</Link>
      </nav>
      <Outlet />
    </div>
  )
}
