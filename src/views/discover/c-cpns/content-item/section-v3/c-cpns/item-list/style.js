import styled from "styled-components";

export const ItemListWrapper = styled.div`
  flex: 1;
  border: 2px solid #e8e8e8;
  box-sizing: border-box;
  padding: 12px 20px;
  .top-title {
    display: flex;
    text-align: center;
    justify-content: flex-start;
    .left-img {
      width: 80px;
      height: 80px;
      display: flex;
      text-align: center;
      justify-content: center;
      line-height: 80px;
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      background-color: ${(props) => props.color};
    }
    .right {
      margin-left: 20px;
      margin-top: 10px;
      font-weight: bold;
      font-size: 16px;
    }
  }
  ul {
    margin-top: 20px;
    li {
      display: block;
      font-size: 14px;
      line-height: 22px;
      &:nth-child(odd) {
        background-color: #e8e8e8;
      }
    }
  }
`;
