// import { NextPage } from 'next';

// const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
//   <h1>Hello world! - user agent: {userAgent}</h1>
// );

// Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
//   return { userAgent };
// };

// export default Home;
import React, { Component } from 'react'
import { BlogItem, Content} from '../content/home';
const content: Content = require("../content/home.md");
// import content from '../content/home.md';

export default class Home extends Component {
  render() {
    let { html , attributes:{ title, cats } } = content;
    return (
      <article>
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
      </article>
    )
  }
}