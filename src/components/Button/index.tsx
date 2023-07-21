import React from "react";
import style from "./Button.module.scss";

interface Props {
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
}

const Button = ({children, type = 'button', onClick} : Props) => {
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {children}
        </button>
    )
}

export default Button;