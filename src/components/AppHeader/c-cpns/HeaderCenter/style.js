import styled from "styled-components";

export const HeaderCenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 70px;
  ul {
    list-style: none;
    li {
      display: inline-block;
      cursor: pointer;
      position: relative;
      a {
        padding: 0 19px;
        text-align: center;
        line-height: 70px;
        color: #ccc;
      }
      &.active {
        background: #000;
        text-decoration: none;
        color: #fff;
      }
    }
  }
  .cor {
    display: block;
    position: absolute;
    left: 50%;
    top: 50.5px;
    width: 12px;
    height: 7px;
    margin-left: -6px;
    overflow: hidden;
    transform: translateX(-25%);
    background-position: -226px 0;
    border-top: 10px solid #000;
    border-bottom: 10px solid red;
    border-left: 11px solid #000;
    border-right: 10px solid #000;
  }
`;
