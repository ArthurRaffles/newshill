import React, { Component } from 'react';
import css from 'styled-jsx/css';
import {body, padding} from '../global-styles';
import Link from 'next/link';

export const Header = () => {
    return (
        <div>
            <h1>News Hill Barn</h1>
            <Nav />
            <style jsx>{body}</style>
            <style jsx>{headerStyle}</style>
            <style jsx>{padding}</style>
        </div>
    );
}

const Nav = () => (
    <div>
        <Link href="/">
            <span>Home</span>
        </Link>
        <Link href="/blog">
            <span>Blog</span>
        </Link>
        <style jsx>{navStyle}</style>
    </div>
)
const headerStyle = css`
div {
    background-color: black;
    display: flex;
    opacity: 0.8;
    justify-content: space-between;
    align-items: center;
},`;
const navStyle = css`
div {
    display: flex;
    justify-items: space-between;
}

span {
    margin-right: 15px;
}

span:hover {
    color: white;
    opacity: 0.6;
    pointer: hand;
}`;
