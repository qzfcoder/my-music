import styled from "styled-components";

export const ItemCardWrapper = styled.div`
  .img-card {
    position: relative;
    width: 140px;
    height: 140px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img-bottom-play {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 27px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 12px;
    .IconMusic {
      margin-left: 2px;
      margin-top: 2px;
    }
    .subscribedCount {
      margin-left: 5px;
      flex: 1;
    }
    .IconPlay {
      margin-right: 2px;
      margin-top: 2px;
    }
  }
  .img-card-title {
    margin-top: 5px;
    font-size: 14px;
    color: #000000;
  }
`;
