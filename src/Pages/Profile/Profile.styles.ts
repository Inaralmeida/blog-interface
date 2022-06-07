import styled from "styled-components";
import { DefaultTheme } from "../../Style/Theme";

export const Header = styled.section`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Container = styled.main`
  width: 80%;
  height: 80vh;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  background-color: ${DefaultTheme.gray};
  padding: 20px;

  > main {
  }
  /* > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${DefaultTheme.secundary};
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
  } */
`;
export const Content = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  display: grid;
  grid-template-columns: 0.5fr repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  grid-template-areas:
    "photo username username"
    "photo name name"
    "post post post"
    "comments comments comments ";
  > h1 {
    color: ${DefaultTheme.primary};
  }

  > div {
    &.photo {
      grid-area: photo;
      border-radius: 50%;
      background-color: ${DefaultTheme.tertiary};
      > img {
        width: 100%;
        border-radius: 50%;
        width: 100%auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &.username {
      grid-area: username;
    }
    &.name {
      grid-area: name;
    }
    &.all_post_lists {
      grid-area: post;
    }
    &.all_comments_lists {
      grid-area: comments;
    }

    > img {
      width: 100%;
      border-radius: 50%;
      width: 100%auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const Photo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${DefaultTheme.tertiary};
`;
