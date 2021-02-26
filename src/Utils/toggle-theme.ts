export const toggleTheme = (theme: 'light-theme'|'dark-theme') => {
    let targetElem = document.documentElement
    targetElem.classList.remove(...['light-theme', 'dark-theme']);
    targetElem.classList.add(theme)
}