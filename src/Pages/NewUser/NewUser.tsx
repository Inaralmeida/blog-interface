import * as S from "./NewUser.styles";
import { IUser } from "../../utils/Posts.types";
import { usePosts } from "../../hooks/usePosts";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { api } from "../../Services/Api";
const NewUser = () => {
  const v4 = uuidv4();
  const posts = usePosts();
  const [usernameInvalid, setUsernameInvalid] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<IUser>({
    username: "",
    name: "",
    password: "",
    token: v4,
    comments: [],
    posts: [],
    photo: "",
  });

  function validateUser(username: string) {
    api.get("/users").then((response) => {
      const data = response.data;
      const isInvalid = data.some(
        (user: any) =>
          user.id.toUpperCase() === username.toUpperCase() ||
          username.length < 5
      );
      setUsernameInvalid(isInvalid);
    });
  }
  return (
    <S.Container>
      <S.Form action="/feed">
        <h2>New User</h2>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            name="name"
            value={dataUser.name}
            onChange={({ target }) => {
              setDataUser((prev) => ({
                ...prev,
                name: target.value,
              }));
            }}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="name">Username</label>
          <input
            required
            type="text"
            name="username"
            value={dataUser.username}
            onChange={({ target }) => {
              setDataUser((prev) => ({
                ...prev,
                username: target.value,
              }));
              validateUser(target.value);
            }}
          />
          {usernameInvalid && <p>Usuário inválido ou já existente</p>}
        </fieldset>
        <fieldset>
          <label htmlFor="password">password</label>
          <input
            required
            type="password"
            name="password"
            value={dataUser.password}
            onChange={({ target }) => {
              setDataUser((prev) => ({
                ...prev,
                password: target.value,
              }));
            }}
          />
          {usernameInvalid && <p>Usuário inválido ou já existente</p>}
        </fieldset>

        <button
          disabled={usernameInvalid}
          onClick={(e) => {
            e.preventDefault();

            posts?.actions?.handleCreateNewUser(dataUser);
          }}
        >
          criar
        </button>
      </S.Form>
    </S.Container>
  );
};

export default NewUser;
