import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffff0910;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
}

#no-scroll {
  overflow: hidden;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

#pagination {
  gap: 5px;
}

#page-link {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #b5daf4;
}

@media screen and (max-width: 400px) {
  #disabled {
    display: none;
  }
}

@media screen and (min-width: 480px) {
  #page-link {
    width: 40px;
    height: 40px;
  }
}
`;

export default GlobalStyle;
