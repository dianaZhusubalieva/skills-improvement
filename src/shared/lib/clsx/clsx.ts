type Mods = Record<string, boolean | string>

export function clsx(cls: string, mods?: Mods): string {
    return [cls, mods ? [...Object.entries(mods)
        .filter(([classname, value]) => Boolean(value))
        .map(([classname]) => classname)] : undefined].join(' ')
}
