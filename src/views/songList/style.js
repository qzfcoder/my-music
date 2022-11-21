import styled from "styled-components";

export const SongListWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  .song-list-top {
    box-sizing: content-box;
    padding: 50px 80px;
    padding-bottom: 20px;
    font-size: 28px;
    border-bottom: 2px solid red;
  }
  .categoriesList {
    display: flex;
    font-size: 18px;
    .categoriesList-item {
      padding-right: 10px;
      padding-top: 5px;
      cursor: pointer;
    }
  }
  .subList {
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;
    .subList-item {
      /* padding: 0 10px; */
      padding-right: 10px;
      padding-top: 5px;
      cursor: pointer;
    }
  }
`;
