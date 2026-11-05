import { useId } from "react";
import { Archive, Bell, Palette, Trash2 } from "lucide-react";

import type { Note as NoteProps } from "@/types/note";

import "./Note.css";

export default function Note({ title, body, color }: NoteProps) {
    const titleId = useId();

    return (
        <article className={`note note--${color}`} aria-labelledby={title ? titleId : undefined}>
            {title && (
                <h2 id={titleId} className="note__title">
                    {title}
                </h2>
            )}
            <p className="note__body">{body}</p>
            <div className="note__actions">
                <button className="note__action" type="button">
                    <Palette aria-hidden />
                    <span className="visually-hidden">Color</span>
                </button>
                <button className="note__action" type="button">
                    <Bell aria-hidden />
                    <span className="visually-hidden">Recordatorio</span>
                </button>
                <button className="note__action" type="button">
                    <Archive aria-hidden />
                    <span className="visually-hidden">Archivar</span>
                </button>
                <button className="note__action" type="button">
                    <Trash2 aria-hidden />
                    <span className="visually-hidden">Borrar</span>
                </button>
            </div>
        </article>
    );
}
