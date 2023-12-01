type Mods = Record<string, boolean | string>

export function clsx(cls: string, mods?: Mods, additional?: string[]): string {
    return [cls, ...additional, Object.entries(mods)
        .filter(([key, value]) => Boolean(value))
        .map(([classname]) => classname)].join(' ')
}

clsx('remove-btn', {hovered: true, selectable: true, red: false}, ["pdg"])