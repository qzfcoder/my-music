import styled from "styled-components";

export const LeaderboardWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  min-height: 300px;
  /* align-items: center; */
  justify-content: center;
  padding-bottom: 100px;
  .leaderboard-left {
    width: 340px;
    border: 1px solid #ccc;
    .leaderboard-left-box {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .leaderboard-left-title {
        padding: 0 10px 12px 15px;
        font-size: 16px;
        color: #000;
        font-weight: bold;
      }
      .leaderboard-left-content {
        box-sizing: border-box;
        padding: 10px 20px;
      }
      .leaderboard-content-box {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 15px;
        .leaderboard-img-box {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .leaderboard-name-box {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: calc(100% - 80px);
          padding: 10px 20px;
          box-sizing: border-box;

          .leaderboard-name {
            overflow: hidden;
            text-overflow: ellipsis;
            padding-bottom: 10px;
            white-space: nowrap;
          }
          .leaderboard-description {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .leaderboard-left-box-top {
      }
    }
  }
  .leaderboard-right {
    flex: 1;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 40px 20px;
    .leaderboard-right-top {
      display: flex;
      .leaderboard-right-img {
        width: 150px;
        height: 150px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .leaderboard-right-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        > div {
          padding: 10px 10px;
        }
        .leaderboard-right-name {
          line-height: 24px;
          font-size: 24px;
          font-weight: bold;
          color: #000;
        }
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
