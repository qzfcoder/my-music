import styled from "styled-components";

export const SectionV2Wrapper = styled.div`
  .scroll-box {
    margin-top: 20px;
    background: #f5f5f5;
    /* border: 1px solid #fff; */
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    padding: 15px;
  }
  .all-card {
    width: 100px;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 12px 0;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
    &:last-child {
      margin-right: 0;
    }
    .name {
      margin-top: 5px;
      color: #000;
      font-size: 12px;
      width: 90%;
      overflow: hidden;
    }
    .writer-name {
      color: #666;
      font-size: 12px;
      width: 90%;
      overflow: hidden;
    }
    .img-card {
      height: 100px;
      box-sizing: border-box;

      img {
        /* width: 100%; */
        height: 100%;
      }
    }
  }
`;
