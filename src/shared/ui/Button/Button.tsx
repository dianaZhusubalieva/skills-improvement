import { clsx } from "shared/lib/clsx/clsx";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, PropsWithChildren, ReactNode } from "react";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ThemeButton;
}
export const Button: FC<PropsWithChildren<ButtonProps>> = (
    props: ButtonProps,
) => {
    const { className, children, theme, ...rest } = props;
    return (
        <button
            className={clsx(cls.Button, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </button>
    );
};
