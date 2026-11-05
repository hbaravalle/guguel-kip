export const NOTE_COLORS = ["yellow", "blue", "red", "paper"] as const;

export type NoteColor = (typeof NOTE_COLORS)[number];

export interface Note {
    id: string;
    title?: string;
    body: string;
    color: NoteColor;
}
