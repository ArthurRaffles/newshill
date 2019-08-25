import React, { Component } from 'react'
import css from 'styled-jsx/css'
import { Content} from '../content/home';
import {body} from '../global-styles';

export interface BlogListProps {
    content: Content;
}

export const BlogList = (props: BlogListProps) => {
    let { html , attributes:{ title, cats } } = props.content;
    return (
      <>
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
      </>
    )
  };

const style = css`
h2 {
  color: red;
}
ul {
  padding: 0;
}

li {
  list-style: none;
  margin: 5px 0;
}`;