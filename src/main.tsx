import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route, Routes } from "react-router-dom";

// ページのインポート
import { default as Home } from "./pages/home";
import { default as Profile } from "./pages/profile";
import { default as Message } from "./pages/message";
import { default as Record } from "./pages/record";
import { default as Settings } from "./pages/settings";

// BrowserRouterはApp.tsxで既に使っているため、main.tsxでは削除します
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />{" "}
        {/* App.tsx内でBrowserRouterを使っているため、ここでは再度使う必要はありません */}
    </React.StrictMode>,
);
