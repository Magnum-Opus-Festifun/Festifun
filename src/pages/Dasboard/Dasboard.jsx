// Dasboard.jsx
import React from "react";
import "./style.css";
import Icon from "@mdi/react";
import {
    mdiViewDashboard,
    mdiPostOutline,
    mdiMessageBadgeOutline,
    mdiAccount
} from "@mdi/js";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route, Outlet } from "react-router-dom";
import DasboardPage from "./pages/DashboardPage";
import PesanPage from "./pages/PesanPage";
import ProfilPage from "./pages/ProfilPage";
import PostinganPage from "./pages/PostinganPage";

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 brdr">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <Outlet />
                    <Routes>
                        <Route path="/" element={<DasboardPage />} />
                        <Route path="/post" element={<PostinganPage />} />
                        <Route path="/pesan" element={<PesanPage />} />
                        <Route path="/profil" element={<ProfilPage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
