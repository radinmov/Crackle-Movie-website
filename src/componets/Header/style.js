import styled from "styled-components";
import { pallete } from "../../theme";

 export const Style = styled.div `
 background:#1a1919;
 padding: 10px 0;
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 z-index: 10;
 backdrop-filter: blur(20px);
 .logo {
   img {
     width: 109px;
     height: auto;
    }
    .container
    {
     displey:flex;
    }
 }
 .menu {
   ul {
     li {
       a {
         display: flex;
         gap: 5px;
       }
     }
   }
 }
`;