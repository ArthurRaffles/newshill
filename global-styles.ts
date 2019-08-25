import css from 'styled-jsx/css';

export const body = css.global`{
    html {
        margin: 0;
        height: 100%;
        background-image: url('./static/nhb-track.jpg');
        background-color: #1E1F21;
        background-size:     cover;
        background-repeat:   no-repeat;
        background-position: center center; 
    }
    body {
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
        display: flex; 
        margin: 0;
        color: #eeeeee;

    },
}`;

export const padding = css.global`{
    h1 {
        padding: 10px;
    }
}`;