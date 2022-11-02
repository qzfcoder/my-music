import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .create-center {
    color: #fff;
    text-decoration: none;
    border: 1px solid #ccc;
    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
  .m-topvd {
    width: 100px;
    margin-left: 10px;
    height: 32px;
    padding: 0 12px;
    border: 1px solid #4f4f4f;
    line-height: 33px;
    color: #ccc;
    border-radius: 20px;
    box-sizing: border-box;
  }
  .login {
    margin-left: 10px;
    width: 40px;
    color: #ccc;
    box-sizing: border-box;
  }
`;
