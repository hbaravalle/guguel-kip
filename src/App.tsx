import { useState } from "react";
import { Route, Routes } from "react-router";

import Nav from "@/components/Nav";
import Topbar from "@/components/Topbar";
import NotesPage from "@/pages/NotesPage";

import "./App.css";

export default function App() {
    const [isDevtoolsOpen, setIsDevtoolsOpen] = useState(false);

    return (
        <div className={`app ${isDevtoolsOpen ? "app--devtools-open" : ""}`}>
            <Nav />
            <div className="app__content">
                <Topbar
                    isDevtoolsOpen={isDevtoolsOpen}
                    onToggleDevtools={() => setIsDevtoolsOpen((prev) => !prev)}
                />
                <main className="app__main">
                    <Routes>
                        <Route element={<NotesPage />} path="/" />
                    </Routes>
                </main>
            </div>
            <aside className="app__devtools" aria-label="Panel de hooks">
                devtools
            </aside>
        </div>
    );
}
