import {createGlobalStyle} from 'styled-components';

export const TypographyStyle = createGlobalStyle`

body {
overflow: hidden;
}

body, button, textarea {
font-family: "Montserrat", sans-serif;
line-height: 1.5;
letter-spacing: -0.3px;
font-weight: 400;
font-style: normal;
}

a {
text-decoration: none;

&:hover {
}
}

`;
