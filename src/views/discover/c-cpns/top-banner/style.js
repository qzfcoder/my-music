import styled from "styled-components";

export const TopBannerWrapper = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-size: 30000px;
  background-position: center center;
  height: 270px;
  position: relative;
  .swiper {
    .control {
      color: #fff;
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      /* display: none; */
      display: flex;
      justify-content: space-between;
      .center {
        width: 730px;
      }
      .btn {
        flex: 1;
        display: flex;
        justify-content: right;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(
          to left,
          transparent,
          0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }
      .right {
        display: flex;
        justify-content: left;
        background: linear-gradient(
          to right,
          transparent,
          0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }
    }
    .cover {
      position: relative;
      box-sizing: border-box;
      position: relative;
      width: 730px;
      height: 285px;
      margin: 0 auto;
      border-radius: 3px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
