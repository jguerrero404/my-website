import { createGlobalStyle } from "styled-components"

export const VariableStyle = createGlobalStyle`
:root {
--sidenav-bg: var(--gray-5);
--sidenav-shadow: 1.5px 0 5px -5px #010101;
--sidenav-width: 45px;
--sidenav-max-width: 45px;
@media (min-width: 768px) {
    --sidenav-width: 70px;
    --sidenav-max-width: 70px;
}

--card-bg: var(--gray-5);
--card-shadow: 0 4px 8px rgba(0, 0, 0, 0, 0.38);



--max-width-bp:768px;
--background:var(--gray6);
--text-color:var(--gray2);
--h-color:#fff;

--toc-shadow:rgba(0,0,0,0.7) 0px 10px 20px 0px;
--tag-bg:var(--gray4);
--code-bg:#22262f;
--card-bg:var(--gray5);
--overlay-bg:rgba(0,0,0,0.9);
--h-border:2px dashed var(--sidenav-bg);

--gutter-big: 40px;
--gutter: 20px;
--gutter-small: 10px;

transition:all .3s ease
}
`
