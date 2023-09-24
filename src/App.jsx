import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Pomodoro from "./Pomodoro/Pomodoro";
import SessionForm from "./Pomodoro/SessionForm";

function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Pomodoro />} />
                    <Route path="/session/new" element={<SessionForm />} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
