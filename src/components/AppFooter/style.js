import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  border-top: 1px solid #000;
  box-sizing: border-box;
  padding-top: 20px;
  background-color: #f2f2f2;
  padding-bottom: 53px;
  .footer-top {
    display: flex;
    position: relative;
    z-index: 10;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    width: 1100px;
    margin: 0 auto;
    .footer-left {
      ul {
        list-style-type: none;
        li {
          display: inline-block;
          font-size: 12px;
          color: #999;
        }
        li::before {
          content: "|";
          margin: 0 5px;
        }
        li:nth-child(1)::before {
          content: " " !important;
        }
      }
    }
  }
  .footer-left-bottom {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .list-item {
    line-height: 22px;
    font-size: 14pxz;
    color: #666;
    margin-left: 10px;
  }
  .footer-right {
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    .img-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      margin-left: 20px;
      div {
        margin-top: 10px;
      }
    }
  }
`;
