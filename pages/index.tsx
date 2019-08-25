import React, { Component } from 'react'
import css from 'styled-jsx/css'
import { BlogItem, Content} from '../content/home';
import { Layout } from '../components/layout';
import {body} from '../global-styles';
const content: Content = require("../content/home.md");

const style = css`
h1,
a {
  font-family: 'Arial';
}
h2 {
  color: red;
}
ul {
  padding: 0;
}

li {
  list-style: none;
  margin: 5px 0;
}

a {
  text-decoration: none;
  color: blue;
}

a:hover {
  opacity: 0.6;
}
`;

export default class Home extends Component {
  render() {
    let { html , attributes:{ title, cats } } = content;
    return (
      <div>
          <style>{`
            #__next { width: 100% }
          `}
          </style>
      <Layout >
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          <ul>
              { cats.map((cat, k) => (
                  <li key={k}>
                    <h2>{cat.name}</h2>
                    <p>{cat.description}</p>
                  </li>
              ))}
          </ul>
          <style jsx>{body}</style>
          <style jsx>{style}</style>
      </Layout>
      </div>
    )
  }
}