import { Titles } from "./Titles";

export default {
    component: Titles,
    title: "Atoms/Titles",
    argTypes: {
        nivel: {
            control: "inline-radio",
        },
    },
};

export const Small = {
    args:{
        label: "Small",
        level: 3,
    },
};

export const Medium = {
    args:{
        label: "Medium",
        level: 2,
    },
};

export const Large = {
    args:{
        label: "Large",
        level: 1,
    },
};