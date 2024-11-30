import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import Header from "./features/header/header";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Message from "./pages/message";
import Record from "./pages/record";
import Settings from "./pages/settings";
import "./App.css";

const isAuth = (): boolean => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    // デコードし、有効期限を確認。
    try {
        const decoded = jwtDecode(token);
        if (!decoded.exp || decoded.exp * 1000 < Date.now()) {
            return false;
        }
    } catch (error) {
        return false;
    }

    return true;
};

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    return isAuth() ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {/* 認証不必要ページ */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                {/* 認証必要ページ */}
                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/message"
                    element={
                        <PrivateRoute>
                            <Message />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/record"
                    element={
                        <PrivateRoute>
                            <Record />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <PrivateRoute>
                            <Settings />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
