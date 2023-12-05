type Mods = Record<string, boolean | string>;

export function clsx(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([classname, value]) => Boolean(value))
            .map(([classname]) => classname),
    ].join(" ");
}
