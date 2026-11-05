import { Archive, Bell, LayoutGrid, Tag, Trash2 } from "lucide-react";
import { Link, NavLink } from "react-router";

import logo from "@/assets/logo.svg";

import "./Nav.css";

const SECTIONS = [
    { href: "/", label: "Notas", Icon: LayoutGrid },
    { href: "/reminders", label: "Recordatorios", Icon: Bell },
    { href: "/tags", label: "Etiquetas", Icon: Tag },
    { href: "/archive", label: "Archivo", Icon: Archive },
    { href: "/trash", label: "Papelera", Icon: Trash2 },
];

export default function Nav() {
    return (
        <nav className="nav" aria-label="Secciones">
            <Link className="nav__home" to="/">
                <img className="nav__logo" alt="Guguel Kip" src={logo} />
            </Link>
            <ul className="nav__list">
                {SECTIONS.map(({ href, label, Icon }) => (
                    <li key={href} className="nav__item">
                        <NavLink className="nav__link" to={href}>
                            <Icon aria-hidden />
                            <span className="visually-hidden">{label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
