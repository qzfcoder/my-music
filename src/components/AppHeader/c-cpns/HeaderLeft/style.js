import styled from "styled-components";

import logo from "@/assets/img/logo.png";
/* background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover; */

export const HeaderLeftWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  .logo {
    /* width: 50px; */
    height: 50px;
    background: url(${logo}) no-repeat;
    background-size: auto 100%;
    /* background: url(${require("@/assets/img/logo.png")}) center/cover; */
    a {
      padding-left: 50px;
      font-size: 24px;
      line-height: 50px;
      color: #fff;
      letter-spacing: 2px;
    }
  }
`;
