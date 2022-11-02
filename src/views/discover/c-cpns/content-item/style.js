import styled from "styled-components";

export const ContentItemWrapper = styled.div`
  .content {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding-bottom: 100px;
    .content-left {
      width: 800px;
      box-sizing: border-box;
      padding: 20px 20px 40px;
      border: 1px solid #ccc;
      .SectionV2 {
        margin-top: 20px;
      }
    }
    .content-right {
      flex: 1;
      box-sizing: border-box;
      padding: 20px 20px 40px;
      border: 1px solid #ccc;
    }
  }
`;
