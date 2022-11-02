import styled from "styled-components";

export const ArtistCardWrapper = styled.div`
  box-sizing: border-box;
  background-color: #fafafa;
  margin: 10px 0px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: flex-start;
  .artist-img {
    width: 62px;
    height: 62px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .artist-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    margin-left: 5px;
    .name {
      font-size: 14px;
      color: #333;
      font-weight: bold;
      line-height: 18px;
    }
  }
`;
