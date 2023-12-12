import {clsx} from "shared/lib/clsx/clsx";
import cls from "./Sidebar.module.scss";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/ui/LangSwitcher";

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div
            className={clsx(cls.Sidebar, {[cls.collapsed]: collapsed}, [
                className,
            ])}>
            <button onClick={onToggle}>toggle</button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
