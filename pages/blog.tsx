import React, { Component } from 'react';
import css from 'styled-jsx/css';
import { Content} from '../content/home';
import { Layout, BlogList } from '../components';
const content: Content = require("../content/home.md");

const Blog = () => {
    return (
        <div>
            <style>{`
            #__next { width: 100% }
            `}
            </style>
            <Layout >
                <BlogList content={content} />
            </Layout>
        </div>
    );
}
export default Blog;
