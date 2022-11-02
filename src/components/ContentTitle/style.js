import styled from "styled-components";

export const ContentTitleWrapper = styled.div`
  height: 33px;
  padding: 0 10px;
  border-bottom: 2px solid #c10d0c;
  .content-title {
    display: flex;
    /* text-align: center; */
    align-items: center;
    .content-title-circle {
      width: 15px;
      height: 15px;
      border-radius: 7.5px;
      background-color: #fff;
      position: relative;
      border: 5px solid red;
    }
    .content-title-title {
      margin-left: 5px;
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
    .content-title-list {
      flex: 1;
      display: inline-block;
      margin: 7px 0 0 20px;
      display: flex;
      a {
        display: inline-block;
      }
      .line {
        margin: 0 10px;
        color: #ccc;
      }
    }
    .content-title-more {
      cursor: pointer;
    }
  }
`;
