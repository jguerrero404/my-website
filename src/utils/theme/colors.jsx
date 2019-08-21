import { createGlobalStyle } from "styled-components"

export const Colors = createGlobalStyle`
:root {
--gray-0: #f8f8f8;
--gray-1: #dbe1e8;
--gray-2: #b2becd;
--gray-3: #6c7983;
--gray-4: #454e56;
--gray-5: #2a2e35;
--gray-6: #12181b;

--red:#ff3860;
--red-dark:#ff1443;
--red-light:#ff5c7c;
--blue:#498afb;
--blue-dark:#2674fa;
--blue-light:#6ca0fc;
--orange:#fa8142;
--orange-dark:#f96a1f;
--orange-light:#fb9865;
--green:#09c372;
--green-dark:#07a15e;
--green-light:#0be586;
--purple:#9166cc;
--purple-dark:#7d4bc3;
--purple-light:#a481d5;
--yellow:#ffdd57;
--yellow-dark:#ffd633;
--yellow-light:#ffe47a;
--pink:#ff4088;
--pink-dark:#ff1c72;
--pink-light:#ff649e;

--gray0:#f8f8f8;
--gray1:#dbe1e8;
--gray2:#b2becd;
--gray3:#6c7983;
--gray4:#454e56;
--gray5:#2a2e35;
--gray6:#12181b;

--orange-pink:linear-gradient(to bottom right,var(--orange-light),var(--orange-dark) 85%);
--green-grad:linear-gradient(to bottom right,var(--green-light),var(--green-dark) 85%);

--primary-color: var(--green);

transition:all .3s ease
}
`
