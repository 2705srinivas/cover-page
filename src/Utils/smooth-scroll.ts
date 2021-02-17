export const scrollSmoothTo = (id: string) => {
    const targetElemet = document.getElementById(id);
    if(targetElemet)
        window.scrollTo({
            top: targetElemet.offsetTop,
            behavior: "smooth"
        })
}