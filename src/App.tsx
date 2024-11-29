import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./features/header/header";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home"; // 他のページもインポートします
import Profile from "./pages/profile";
import Message from "./pages/message";
import Record from "./pages/record";
import Settings from "./pages/settings";
import "./App.css";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {/* パスとコンポーネントをここで設定 */}
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/message" element={<Message />} />
                <Route path="/record" element={<Record />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
