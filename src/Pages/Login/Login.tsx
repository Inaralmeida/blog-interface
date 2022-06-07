import { useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import * as S from "./Login.styles";

const Login = () => {
  const context = usePosts();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<any>({
    username: false,
    password: false,
  });
  function singIn(e: any) {
    e.preventDefault();
    context?.actions?.handleLogin(username, password);
    setError({
      username: context?.states?.errorLogin?.username,
      password: context?.states?.errorLogin?.password,
    });
    console.log(error);
  }
  return (
    <S.Container>
      <S.Form>
        <h2>Login</h2>
        <fieldset>
          <label htmlFor="">username</label>
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          {error?.username && <p>Username inválido</p>}
        </fieldset>
        <fieldset>
          <label htmlFor="password">password</label>
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
          {error?.password && <p>Senha inválida</p>}
        </fieldset>
        <button onClick={singIn}>Sing in</button>
      </S.Form>
    </S.Container>
  );
};

export default Login;
