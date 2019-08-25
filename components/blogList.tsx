import React, { Component } from 'react'
import css from 'styled-jsx/css'
import { Content} from '../content/home';
import {body} from '../global-styles';
import Link from 'next/link';

export interface BlogListProps {
    content: Content;
}
interface PostLinkProps {
    name: string;
}
const PostLink = ({name}: PostLinkProps) => (
    <li>
      <Link href={`/post?name=${name}`}>
        <a>{name}</a>
      </Link>
    </li>
  );
export const BlogList = (props: BlogListProps) => {
    let { html , attributes:{ title, cats } } = props.content;
    return (
      <>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          <ul>
              { cats.map((cat, k) => (
                  <PostLink key={k} name={cat.name} />
              ))}
          </ul>
          <style jsx>{body}</style>
          <style jsx>{style}</style>
      </>
    )
  };

const style = css`
ul {
  padding: 0;
}

li {
  list-style: none;
  margin: 5px 0;
}`;