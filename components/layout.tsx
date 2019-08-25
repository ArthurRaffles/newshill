import React, { Component } from 'react';
import css from 'styled-jsx/css';
import {Header} from './header';

const layoutStyle = {
};

export const Layout = (props: any) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);
