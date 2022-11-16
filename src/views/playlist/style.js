import styled from "styled-components";

export const PlayListWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding-bottom: 100px;
  .left-box {
    /* width: 800px; */
    flex: 1;
    box-sizing: border-box;
    padding: 20px 20px 40px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    .left-box-top {
      display: flex;
      justify-content: space-around;
      .left-content {
        flex: 1;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        .left-img {
          width: 200px;
          height: 200px;
          box-sizing: border-box;
          padding: 3px;
          border: 1px solid #ccc;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .right-content {
        box-sizing: border-box;
        flex: 2;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        .name {
          box-sizing: border-box;
          background: red;
          padding: 5px 0;
          padding-left: 5px;
          position: relative;
        }
        .circle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 2px;
          color: white;
          background-color: white;
          display: inline-block;
          right: 20px;
          z-index: 99;
          top: 12px;
        }
        .name::after {
          position: relative;
          top: 8.5px;
          content: "";
          display: inline-block;
          /*宽高为0*/
          width: 14px;
          height: 14px;
          border-top: 14px solid white;
          border-bottom: 14px solid white;
          border-left: 14px solid red;
          border-right: 14px solid white;
        }
        .title {
          font-size: 22px;
          line-height: 26px;
        }
        > div {
          margin-top: 20px;
        }
        .player {
          display: flex;
          align-items: center;

          .img-box {
            width: 35px;
            height: 35px;
            margin-left: 0px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          > div {
            margin-left: 10px;
          }
        }
        .tag-group {
          .tag {
            padding: 2px 15px;
            background-color: #ccc;
            border-radius: 16px;
            margin-left: 10px;
          }
        }
        .desc-group {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
    .left-box-bottom {
      margin-top: 30px;
      .left-box-title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .song-list {
          display: flex;
          /* justify-content: center; */
          align-items: center;
          min-height: 36px;
          background-color: #f7f7f7;
          border-top: 2px solid red;
          margin-top: 20px;
        }
        .song-lists {
          display: flex;
          /* justify-content: center; */
          align-items: center;
          min-height: 36px;
        }
      }
    }
  }

  .right-box {
    /* flex: 1; */
    width: 300px;
    box-sizing: border-box;
    padding: 20px 12px 40px 12px;
    border: 1px solid #ccc;
    .right-box-title {
      padding: 0px 0px 5px 0px;
      box-sizing: border-box;
      border-bottom: 2px solid #ccc;
    }
    .allbox {
      display: flex;
      /* flex-wrap: wrap; */
      flex-direction: column;
      .box {
        width: inherit;
        display: flex;
        box-sizing: border-box;
        padding: 5px 0px;
        .img {
          width: 50px;
          height: 50px;
        }
        .content {
          width: calc(100% - 60px);
          margin-left: 10px;
          .title {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .frist-clomn {
    min-width: 70px;
    padding: 10px;
    height: 100%;
  }
  .second-clomn {
    min-width: 240px;
    padding: 10px;
  }
  .threed-clomn {
    min-width: 150px;
    padding: 10px;
  }
  .four-clomn {
    min-width: 150px;
    padding: 10px;
  }
  .five-clomn {
    min-width: 150px;
    padding: 10px;
  }
`;
