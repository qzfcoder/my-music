import styled from "styled-components";

export const HeaderBottomWrapper = styled.div`
  width: 100%;
  min-height: 10px;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  .header-bottom {
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    ul {
      list-style: none;
      li {
        display: inline-block;
        cursor: pointer;
        a {
          padding: 0 19px;
          text-align: center;
          line-height: 30px;
          color: #fff;
          text-align: center;
        }
        &.active {
          color: #fff;
          background: #9b0909;
          padding: 0 13px;
          margin: 7px 17px;
          border-radius: 20px;
        }
      }
    }
  }
`;
