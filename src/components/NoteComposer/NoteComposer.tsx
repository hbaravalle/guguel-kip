import { useId, useState } from "react";
import { Check } from "lucide-react";

import Button from "@/components/Button";
import { NOTE_COLORS } from "@/types/note";

import "./NoteComposer.css";

export default function NoteComposer() {
    const [isExpanded, setIsExpanded] = useState(false);
    const titleId = useId();
    const bodyId = useId();

    return (
        <form
            className={`note-composer ${isExpanded ? "note-composer--expanded" : ""}`}
            aria-label="Crear nota"
            onSubmit={(e) => e.preventDefault()}
        >
            <label htmlFor={titleId}>
                <span className="visually-hidden">Título</span>
                <input
                    id={titleId}
                    className="note-composer__title"
                    type="text"
                    placeholder="Título"
                />
            </label>
            <label htmlFor={bodyId}>
                <span className="visually-hidden">Nota</span>
                <textarea
                    id={bodyId}
                    className="note-composer__body"
                    placeholder="Crear una nota..."
                ></textarea>
            </label>
            <div className="note-composer__footer">
                <fieldset className="note-composer__colors">
                    <legend className="visually-hidden">Color</legend>
                    {NOTE_COLORS.map((color) => (
                        <label
                            key={`${color}-color`}
                            className={`color-swatch color-swatch--${color}`}
                            onFocus={() => setIsExpanded(true)}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            <input
                                className="visually-hidden"
                                name="color"
                                type="radio"
                                defaultChecked={color === "yellow"}
                                value={color}
                            />
                            <Check className="color-swatch__check" aria-hidden size={16} />
                            <span className="visually-hidden">{color}</span>
                        </label>
                    ))}
                </fieldset>
                <div className="note-composer__actions">
                    <Button variant="ghost">Cancelar</Button>
                    <Button type="submit">Guardar</Button>
                </div>
            </div>
        </form>
    );
}
