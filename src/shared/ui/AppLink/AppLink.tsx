import { clsx } from "shared/lib/clsx/clsx";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC, ReactNode } from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
    const { className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <Link className={clsx(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
