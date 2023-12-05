import { clsx } from "shared/lib/clsx/clsx";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const icon: Record<Theme, any> = {
        dark: <DarkIcon />,
        light: <LightIcon fill={"none"} />,
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={clsx(cls.ThemeSwitcher)}
            onClick={toggleTheme}
        >
            {icon[theme]}
        </Button>
    );
};
