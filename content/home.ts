export interface BlogItem {
    description: string;
    name: string;
}
export interface Attributes {
    title: string;
    cats: BlogItem[];
}
export interface Content {
    html: any;
    attributes: Attributes;
}