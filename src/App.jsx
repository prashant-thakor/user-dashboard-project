import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center" }}>
        <h1>User Dashboard</h1>

        {/* Navbar */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/users">Users</Link> |{" "}
          <Link to="/add">Add User</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;