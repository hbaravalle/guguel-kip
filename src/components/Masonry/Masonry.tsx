import "./Masonry.css";

interface MasonryProps {
    children: React.ReactNode;
}

export default function Masonry({ children }: MasonryProps) {
    return (
        <ul className="masonry" aria-label="Notas">
            <li>{children}</li>
        </ul>
    );
}
