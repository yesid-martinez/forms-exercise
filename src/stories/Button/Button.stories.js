import { Button } from "./Button";

export default {
    component: Button,
    title: "Atoms/Button",
    tags: ["autodocs"],
};

export const Basic = {
    args:{
        label: "Primary",
        primary: true,
    },
};

export const Small = {
    args: {
        label: "Small",
        primary: true,
        size: "small",
    },
};

export const Medium = {
    args: {
        label: "Medium",
        primary: true,
        size: "medium",
    },
};

export const Large = {
    args: {
        label: "Large",
        primary: true,
        size: "large",
    },
};