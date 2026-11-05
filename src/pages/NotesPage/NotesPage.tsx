import Note from "@/components/Note";
import NoteComposer from "@/components/NoteComposer";
import { initialNotes } from "@/data/notes";

import "./NotesPage.css";

export default function NotesPage() {
    return (
        <div className="notes-page">
            <NoteComposer />
            <ul className="masonry">
                {initialNotes.map((note) => (
                    <li key={note.id} className="masonry__item">
                        <Note {...note} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
