import type { ComponentProps } from "react";

import "./Button.css";

interface ButtonProps extends ComponentProps<"button"> {
    variant?: "primary" | "ghost";
}

export default function Button({
    variant = "primary",
    type = "button",
    className,
    ...props
}: ButtonProps) {
    return (
        <button className={`button button--${variant} ${className ?? ""}`} type={type} {...props} />
    );
}
