const content: Content = require("./home.md");
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

export const getPost = (name: string | Array<string>): BlogItem => {
    let { html , attributes:{ title, cats } } = content;
    if (Array.isArray(name)) {
        name = name[0];
    }
    return cats.find(post => post.name === name) || {description: '', name: ''};
}