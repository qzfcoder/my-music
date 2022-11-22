import styled from "styled-components";

export const ItemCardWrapper = styled.div`
  width: 140px;
  box-sizing: border-box;
  padding: 20px;


  .img {
    width: 140px;
    height: 140px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .title {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 27px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  .songName {
    padding-top: 5px;
    text-overflow: ellipsis;
  }
`;
