export type MenuBox = {
    title: string,
    type: string,
    link: string
}

export const WORK = "work";
export const LOVE = "love";
export const ABOUT = "about"
export const OTHER = "other"

const menuBoxes: MenuBox[] = [
    {
        title: "My CV",
        type: WORK,
        link: "cv"
    },
    {
        title: "Tình iu",
        type: LOVE,
        link: "my-love"
    },
    {
        title: "Know more about me :)",
        type: ABOUT,
        link: "about"
    },
    {
        title: "Some other cool stuff!",
        type: OTHER,
        link: "#"
    },
]

export { menuBoxes }