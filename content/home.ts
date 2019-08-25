const content: Content = require("./home.md");
export interface BlogItem {
    description: string;
    name: string;
    date: string;
    body: any;
}

export interface Attributes {
    title: string;
    posts: BlogItem[];
}

export interface Content {
    html: any;
    attributes: Attributes;
}

export const getPost = (name: string | Array<string>): BlogItem => {
    let { html , attributes:{ title, posts } } = content;
    if (Array.isArray(name)) {
        name = name[0];
    }
    return posts.find(post => post.name === name) 
    || {description: '', name: '', body: '', date: ''};
}