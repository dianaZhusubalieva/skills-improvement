import { clsx } from "shared/lib/clsx/clsx";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import React from "react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
        <Button
            className={clsx(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t("language")}
        </Button>
    );
};
