import { useId } from "react";
import { SquareCode } from "lucide-react";

import "./Topbar.css";

interface TopbarProps {
    isDevtoolsOpen: boolean;
    onToggleDevtools: () => void;
}

export default function Topbar({ isDevtoolsOpen, onToggleDevtools }: TopbarProps) {
    const searchId = useId();

    return (
        <header className="topbar">
            <h1 className="topbar__title">Guguel Kip</h1>
            <form
                className="topbar__search-form"
                role="search"
                onSubmit={(e) => e.preventDefault()}
            >
                <label htmlFor={searchId}>
                    <span className="visually-hidden">Buscar notitas</span>
                    <input
                        id={searchId}
                        className="topbar__search-input"
                        type="search"
                        placeholder="Buscar notitas"
                    />
                </label>
            </form>
            <button
                className="topbar__devtools-toggle"
                type="button"
                aria-pressed={isDevtoolsOpen}
                onClick={onToggleDevtools}
            >
                <SquareCode aria-hidden />
                <span className="visually-hidden">Panel de hooks</span>
            </button>
        </header>
    );
}
