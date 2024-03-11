

export class Category{
    id: number | undefined;
    name: string | undefined;
    iconPath: string | undefined;
}

export let CATEGORIES: Category[] =[
    {id: 1, name: "computers", iconPath: "icon path to computers"},
    {id: 2, name: "design", iconPath: "icon path to design"},
    {id: 3, name: "mathematic", iconPath: "icon path to mathematic"}
] 