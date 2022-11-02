import styled from "styled-components";

export const ContentTitleV2Wrapper = styled.div`
  height: 20px;
  padding: 0 10px;
  border-bottom: 2px solid #eee;
  .content-title {
    display: flex;
    /* text-align: center; */
    align-items: center;
    .content-title-title {
      font-size: 12px;
      font-weight: normal;
      line-height: 16px;
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
